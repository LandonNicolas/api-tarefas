const { v4: uuidv4 } = require('uuid');

let tarefas = [];

const adicionarTarefa = (tarefa) => {
  const novaTarefa = { id: uuidv4(), ...tarefa };
  tarefas.push(novaTarefa);
  return novaTarefa;
};

const listarTarefas = (filtro = {}) => {
  if (filtro.concluida !== undefined) {
    return tarefas.filter(t => t.concluida === filtro.concluida);
  }
  return tarefas;
};

const buscarTarefaPorId = (id) => {
  const tarefa = tarefas.find(t => t.id === id);
  if (!tarefa) throw new Error('Tarefa não encontrada');
  return tarefa;
};

const atualizarTarefa = (id, dados) => {
  const index = tarefas.findIndex(t => t.id === id);
  if (index === -1) throw new Error('Tarefa não encontrada');
  tarefas[index] = { ...tarefas[index], ...dados };
  return tarefas[index];
};

const deletarTarefa = (id) => {
  const index = tarefas.findIndex(t => t.id === id);
  if (index === -1) throw new Error('Tarefa não encontrada');
  return tarefas.splice(index, 1)[0];
};

const concluirTarefa = (id) => {
  const index = tarefas.findIndex(t => t.id === id);
  if (index === -1) throw new Error('Tarefa não encontrada');
  tarefas[index].concluida = true;
  return tarefas[index];
};

module.exports = {
  adicionarTarefa,
  listarTarefas,
  buscarTarefaPorId,
  atualizarTarefa,
  deletarTarefa,
  concluirTarefa
};
