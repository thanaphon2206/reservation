const Joi = require('joi');

const table = Joi.object().keys({
  table: Joi.string().required()
})

module.exports = { table }
