const joyasModel = require('../models/joyasModel');

exports.obtenerJoyas = async (req, res) => {
  try {
    const { limits, page, order_by } = req.query;
    const joyas = await joyasModel.obtenerJoyas(limits, page, order_by);
    const totalJoyas = await joyasModel.contarJoyas();
    const stockTotal = await joyasModel.sumarStock();

    const response = {
      totalJoyas: totalJoyas,
      stockTotal: stockTotal,
      results: joyas.map((joya) => ({
        name: joya.nombre,
        href: `/joyas/joya/${joya.id}`,
      })),
    };

    res.json(response);
  } catch (error) {
    console.error(error);
    res.status(500).send('Error al obtener las joyas');
  }
};

exports.filtrarJoyas = async (req, res) => {
  try {
    const { precio_max, precio_min, categoria, metal } = req.query;
    const joyas = await joyasModel.filtrarJoyas(precio_max, precio_min, categoria, metal);
    res.json(joyas);
  } catch (error) {
    console.error(error);
    res.status(500).send('Error al filtrar las joyas');
  }
};