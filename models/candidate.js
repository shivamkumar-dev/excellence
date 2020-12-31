const Joi = require('joi');
const { Schema, model } = require('mongoose');

// Candidate Schema
const candidateSchema = new Schema({
  name: {
    type: String,
    required: true,
    minlength: 5,
    maxlength: 50,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    minlength: 5,
    maxlength: 255,
    unique: true,
    trim: true,
  },
});

const Candidate = model('Candidate', candidateSchema);

// Candidate Validator
const validateCandidate = (candidate) => {
  const schema = Joi.object({
    name: Joi.string().min(5).max(50).required(),
    email: Joi.string().min(5).max(255).required().email(),
  });

  return schema.validate(candidate);
};

exports.candidateSchema = candidateSchema;
exports.Candidate = Candidate;
exports.validate = validateCandidate;
