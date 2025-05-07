const db = require('../database/fakeDb');
const logger = require('../utils/logger');

const criarTarefa = (dados) => {
  const tarefa = db.adicionarTarefa(dados);
  logger.info(`Tarefa ${tarefa.id} criada`);
  return tarefa;
};

const listarTarefas = (filtro) => db.listarTarefas(filtro);

const buscarTarefa = (id) => db.buscarTarefaPorId(id);

const atualizarTarefa = (id, dados) => {
  const tarefa = db.atualizarTarefa(id, dados);
  logger.info(`Tarefa ${id} atualizada`);
  return tarefa;
};

const deletarTarefa = (id) => {
  db.deletarTarefa(id);
  logger.info(`Tarefa ${id} deletada`);
};

const concluirTarefa = (id) => {
  const tarefa = db.concluirTarefa(id);
  logger.info(`Tarefa ${id} concluída`);
  return tarefa;
};

module.exports = {
  criarTarefa,
  listarTarefas,
  buscarTarefa,
  atualizarTarefa,
  deletarTarefa,
  concluirTarefa
};
