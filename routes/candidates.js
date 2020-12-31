const { Candidate, validate } = require('../models/candidate');
const router = require('express').Router();

// GET
router.get('/', async (req, res) => {
  const candidates = await Candidate.find();
  res.send(candidates);
});

// POST
router.post('/', async (req, res) => {
  const { error } = validate(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  const candidate = new Candidate({
    name: req.body.name,
    email: req.body.email,
  });
  await candidate.save();

  res.send(candidate);
});

// PUT
router.put('/:id', async (req, res) => {
  const { error } = validate(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  const candidate = await Candidate.findByIdAndUpdate(
    req.params.id,
    {
      name: req.body.name,
      email: req.body.email,
    },
    { new: true }
  );

  if (!candidate)
    return res
      .status(400)
      .send('The Candidate with the given ID was not found');

  res.send(candidate);
});

// DELETE
router.delete('/:id', async (req, res) => {
  const candidate = await Candidate.findByIdAndRemove(req.params.id);

  if (!candidate)
    return res
      .status(400)
      .send('The Candidate with the given ID was not found');

  res.send(candidate);
});

// GET
router.get('/:id', async (req, res) => {
  const candidate = await Candidate.findById(req.params.id);

  if (!candidate)
    return res
      .status(400)
      .send('The Candidate with the given ID was not found');

  res.send(candidate);
});

module.exports = router;
