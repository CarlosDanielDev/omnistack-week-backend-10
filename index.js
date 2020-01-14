import express from "express";

const app = express();

app.use(express.json()); // informei ao express pra usar JSON no corpo da requisição.
// Métodos HTTP: GET POST, PUT, DELETE

// Tipos de parâmetros:
// Query Params: req.query (filtros, ordenação, paginação)
// Route Params: req.params (Identificar recurso na alteração ou remoção);
// Body: req.body (Dado para criação, ou alteração de registros)

app.get("/", (req, res) => {
  return res.json({ hello: "World" });
});

app.listen(3000);
