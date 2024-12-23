const { Pool } = require("pg");

// Configuración del pool de conexiones
const pool = new Pool({
    host: "localhost",
    user: "postgres",
    password: "Nelly",
    database: "joyas",
    allowExitOnIdle: true, 
});

module.exports = pool;