const express = require('express');
const router = express.Router();
const controller = require('../controllers/tarefasController');
const validate = require('../middlewares/validateTarefa');

router.get('/', controller.listarTarefas);
router.post('/', validate, controller.criarTarefa);
router.get('/:id', controller.buscarTarefa);
router.put('/:id', validate, controller.atualizarTarefa);
router.delete('/:id', controller.deletarTarefa);
router.patch('/:id/concluir', controller.concluirTarefa);

module.exports = router;
