const Joi = require('joi');

const schema = Joi.object({
  titulo: Joi.string().min(3).required(),
  descricao: Joi.string().required(),
  concluida: Joi.boolean().required()
});

const validateTarefa = (req, res, next) => {
  const { error } = schema.validate(req.body);
  if (error) {
    return res.status(400).json({ 
      mensagem: 'Dados inválidos',
      detalhes: error.details.map(d => d.message) 
    });
  }
  next();
};

module.exports = validateTarefa;
