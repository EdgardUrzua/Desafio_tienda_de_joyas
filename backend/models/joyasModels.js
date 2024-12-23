const pool = require("../db/connection");

exports.obtenerJoyas = async (limits, page, order_by) => {
  let query = 'SELECT * FROM inventario';
  const values = [];

  if (order_by) {
    query += ` ORDER BY $${values.length + 1}`;
    values.push(order_by);
  }

  if (limits && page) {
    const offset = (page - 1) * limits;
    query += ` LIMIT $${values.length + 1} OFFSET $${values.length + 2}`;
    values.push(parseInt(limits), offset);
  }

  const result = await pool.query(query, values);
  return result.rows;
};

exports.filtrarJoyas = async (precio_max, precio_min, categoria, metal) => {
  let query = 'SELECT * FROM inventario WHERE 1=1';
  const values = [];

  if (precio_max) {
    query += ` AND precio < $${values.length + 1}`;
    values.push(parseInt(precio_max));
  }

  if (precio_min) {
    query += ` AND precio > $${values.length + 1}`;
    values.push(parseInt(precio_min));
  }

  if (categoria) {
    query += ` AND categoria = $${values.length + 1}`;
    values.push(categoria);
  }

  if (metal) {
    query += ` AND metal = $${values.length + 1}`;
    values.push(metal);
  }

  const result = await pool.query(query, values);
  return result.rows;
};

exports.contarJoyas = async () => {
  const result = await pool.query('SELECT COUNT(*) FROM inventario');
  return parseInt(result.rows[0].count);
};

exports.sumarStock = async () => {
  const result = await pool.query('SELECT SUM(stock) FROM inventario');
  return parseInt(result.rows[0].sum);
};