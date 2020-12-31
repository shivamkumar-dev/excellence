const { Candidate } = require('../models/candidate');
const { TestScore, validate } = require('../models/testScore');
const router = require('express').Router();

// GET
router.get('/', async (req, res) => {
  const testScores = await TestScore.find();
  res.send(testScores);
});

// POST
router.post('/', async (req, res) => {
  const { error } = validate(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  const { candidateId, firstRound, secondRound, thirdRound } = req.body;

  const candidate = await Candidate.findById(candidateId);
  if (!candidate) return res.status(400).send('Invalid Candidate');

  const testScore = new TestScore({
    candidate: {
      _id: candidate._id,
      name: candidate.name,
      email: candidate.email,
    },

    firstRound: firstRound,
    secondRound: secondRound,
    thirdRound: thirdRound,

    totalScore: firstRound + secondRound + thirdRound,
  });
  await testScore.save();

  res.send(testScore);
});

// PUT
router.put('/:id', async (req, res) => {
  const { error } = validate(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  const { candidateId, firstRound, secondRound, thirdRound } = req.body;

  const candidate = await Candidate.findById(candidateId);
  if (!candidate) return res.status(400).send('Invalid Candidate');

  const testScore = await TestScore.findByIdAndUpdate(
    req.params.id,
    {
      candidate: {
        _id: candidate._id,
        name: candidate.name,
        email: candidate.email,
      },

      firstRound: firstRound,
      secondRound: secondRound,
      thirdRound: thirdRound,

      totalScore: firstRound + secondRound + thirdRound,
    },
    { new: true }
  );
  if (!testScore)
    return res
      .status(400)
      .send('The Test-Score with the given ID was not found');

  res.send(testScore);
});

// DELETE
router.delete('/:id', async (req, res) => {
  const testScore = await TestScore.findByIdAndRemove(req.params.id);

  if (!testScore)
    return res
      .status(400)
      .send('The Test-Score with the given ID was not found');

  res.send(testScore);
});

// GET
router.get('/:id', async (req, res) => {
  const testScore = await TestScore.findById(req.params.id);

  if (!testScore)
    return res
      .status(400)
      .send('The Test-Score with the given ID was not found');

  res.send(testScore);
});

module.exports = router;
