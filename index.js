const express = require('express');
const cors = require('cors');
const router = require('./src/routes/roupas.routes');
const connectToDatabase = require('./src/database/database');

const port = process.env.PORT || 3005;
const app = express();

app.use(express.json());
app.use(cors());
app.use('/hamburguer', router);
connectToDatabase();

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
