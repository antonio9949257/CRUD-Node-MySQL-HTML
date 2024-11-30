const db = require('./db'); 

exports.createCliente = async (req, res) => {
  try {
    const { nombreCliente } = req.body;
    await db.query('INSERT INTO clientes (nombreCliente) VALUES (?)', [nombreCliente]);
    res.status(201).json({ message: 'Cliente creado exitosamente' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};


exports.getClientes = async (req, res) => {
  try {
    const [rows] = await db.query('SELECT * FROM clientes');
    res.status(200).json(rows);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getClienteById = async (req, res) => {
  try {
    const { id } = req.params;
    const [rows] = await db.query('SELECT * FROM clientes WHERE id_cliente = ?', [id]);
    if (rows.length === 0) return res.status(404).json({ message: 'Cliente no encontrado' });
    res.status(200).json(rows[0]);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
exports.updateCliente = async (req, res) => {
  try {
    const { id } = req.params;
    const { nombreCliente } = req.body;
    const [result] = await db.query('UPDATE clientes SET nombreCliente = ? WHERE id_cliente = ?', [nombreCliente, id]);
    if (result.affectedRows === 0) return res.status(404).json({ message: 'Cliente no encontrado' });
    res.status(200).json({ message: 'Cliente actualizado exitosamente' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
exports.deleteCliente = async (req, res) => {
  try {
    const { id } = req.params;
    const result = await db.query('DELETE FROM clientes WHERE id_cliente = ?', [id]);    

    if (result.affectedRows === 0) {
      return res.status(404).json({ message: 'Cliente no encontrado' });
    }
    res.status(200).json({ message: 'Cliente eliminado exitosamente' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
