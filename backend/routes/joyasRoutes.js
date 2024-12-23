const express = require('express');
const router = express.Router();
const joyasController = require('../controllers/joyasController');

router.get('/', joyasController.obtenerJoyas);
router.get('/filtros', joyasController.filtrarJoyas);

module.exports = router;