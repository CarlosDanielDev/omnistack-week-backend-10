// dev radar
const express = require("express");
const mongoose = require("mongoose");
const routes = require("./routes");
const app = express();
const cors = require("cors");

mongoose.connect("mongodb://localhost:27017/omnistack", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: true,
  useCreateIndex: true
});
app.use(cors());
app.use(express.json()); // informei ao express pra usar JSON no corpo da requisição.
// Métodos HTTP: GET POST, PUT, DELETE
app.use(routes);
// Tipos de parâmetros:
// Query Params: req.query (filtros, ordenação, paginação)
// Route Params: req.params (Identificar recurso na alteração ou remoção);
// Body: req.body (Dado para criação, ou alteração de registros)

app.listen(3333);
