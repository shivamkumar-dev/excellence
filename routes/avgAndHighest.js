const { TestScore } = require('../models/testScore');
const router = require('express').Router();

// Highest Scoring Candidate
router.get('/highest', async (req, res) => {
  const highestScore = await TestScore.find().sort('-totalScore').limit(1);
  res.send(highestScore);
});

// Average Scores
router.get('/average', async (req, res) => {
  const averageScore = await TestScore.aggregate([
    {
      $group: {
        _id: null,
        firstRound: { $avg: '$firstRound' },
        secondRound: { $avg: '$secondRound' },
        thirdRound: { $avg: '$thirdRound' },
      },
    },
  ]);
  res.send(averageScore);
});

module.exports = router;
