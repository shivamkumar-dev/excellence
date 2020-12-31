const Joi = require('joi');
const { candidateSchema } = require('../models/candidate');
const { Schema, model } = require('mongoose');

// Test_Score Schema
const testScoreSchema = new Schema({
  candidate: {
    type: candidateSchema,
    required: true,
  },

  firstRound: { type: Number, min: 0, max: 10, default: 0 },
  secondRound: { type: Number, min: 0, max: 10, default: 0 },
  thirdRound: { type: Number, min: 0, max: 10, default: 0 },

  totalScore: { type: Number, min: 0, max: 30, default: 0 },
});

const TestScore = model('TestScore', testScoreSchema);

// Test_Score Validator
const validateTestScore = (candidate) => {
  const schema = Joi.object({
    candidateId: Joi.objectId().required(),

    firstRound: Joi.number().min(0).max(10),
    secondRound: Joi.number().min(0).max(10),
    thirdRound: Joi.number().min(0).max(10),

    totalScore: Joi.number().min(0).max(30),
  });

  return schema.validate(candidate);
};

exports.TestScore = TestScore;
exports.validate = validateTestScore;
