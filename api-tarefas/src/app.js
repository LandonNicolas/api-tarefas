const express = require('express');
const morgan = require('morgan');
const app = express();
const routes = require('./routes/tarefasRoutes');

app.use(express.json());
app.use(morgan('dev'));
app.use('/tarefas', routes);

app.use((err, req, res, next) => {
  res.status(500).json({ mensagem: 'Erro interno' });
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
