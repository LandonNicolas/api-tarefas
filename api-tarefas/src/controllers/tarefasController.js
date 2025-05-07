const service = require('../services/tarefasService');
const logger = require('../utils/logger');

const criarTarefa = (req, res) => {
  try {
    const tarefa = service.criarTarefa(req.body);
    res.status(201).json(tarefa);
  } catch (error) {
    logger.error(`Erro ao criar tarefa: ${error.message}`);
    res.status(400).json({ mensagem: error.message });
  }
};

const listarTarefas = (req, res) => {
  try {
    const filtro = req.query.concluida ? { concluida: req.query.concluida === 'true' } : {};
    res.json(service.listarTarefas(filtro));
  } catch (error) {
    logger.error(`Erro ao listar tarefas: ${error.message}`);
    res.status(500).json({ mensagem: 'Erro interno' });
  }
};

const buscarTarefa = (req, res) => {
  try {
    const tarefa = service.buscarTarefa(req.params.id);
    res.json(tarefa);
  } catch (error) {
    logger.error(`Erro ao buscar tarefa: ${error.message}`);
    res.status(404).json({ mensagem: error.message });
  }
};

const atualizarTarefa = (req, res) => {
  try {
    const tarefa = service.atualizarTarefa(req.params.id, req.body);
    res.json(tarefa);
  } catch (error) {
    logger.error(`Erro ao atualizar tarefa: ${error.message}`);
    res.status(400).json({ mensagem: error.message });
  }
};

const deletarTarefa = (req, res) => {
  try {
    service.deletarTarefa(req.params.id);
    res.status(204).end();
  } catch (error) {
    logger.error(`Erro ao deletar tarefa: ${error.message}`);
    res.status(404).json({ mensagem: error.message });
  }
};

const concluirTarefa = (req, res) => {
  try {
    const tarefa = service.concluirTarefa(req.params.id);
    res.json(tarefa);
  } catch (error) {
    logger.error(`Erro ao concluir tarefa: ${error.message}`);
    res.status(404).json({ mensagem: error.message });
  }
};

module.exports = {
  criarTarefa,
  listarTarefas,
  buscarTarefa,
  atualizarTarefa,
  deletarTarefa,
  concluirTarefa
};
