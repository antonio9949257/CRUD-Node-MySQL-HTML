const express = require('express');
const router = express.Router();
const clientesController = require('./controladorClientes.js');
router.post('/clientes', clientesController.createCliente);       
router.get('/clientes', clientesController.getClientes);          
router.get('/clientes/:id', clientesController.getClienteById);  
router.put('/clientes/:id', clientesController.updateCliente);    
router.delete('/clientes/:id', clientesController.deleteCliente); 

module.exports = router;