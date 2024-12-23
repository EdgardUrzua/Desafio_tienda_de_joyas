const express = require("express");
const pool = require("./db/connection"); // Importa la función pool
const cors = require("cors");
const joyasRoutes = require('./routes/joyasRoutes'); // Importa las rutas
const logger = require('./middlewares/logger'); // Importa el middleware logger

const app = express();

app.use(express.json());
app.use(cors());
app.use(logger); // Usa el middleware logger

// Usa las rutas definidas en joyasRoutes.js
app.use('/joyas', joyasRoutes); 

// Iniciar el servidor
const PORT = 3000;
app.listen(PORT, () => console.log(`Servidor levantado en el puerto ${PORT}`));