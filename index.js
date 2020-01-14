import express from "express";

const app = express();

// GET POST, PUT, DELETE

app.get("/", (req, res) => {
  return res.json({ hello: "World" });
});

app.listen(3000);
