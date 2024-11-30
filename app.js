const express = require('express');
const app = express();
const clientesRoutes = require('./rutasCliente.js');
const cors = require('cors');

app.use(express.json());
app.use(cors());

app.use(express.static('public'));


app.use('/api', clientesRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor escuchando en el puerto ${PORT}`);
});