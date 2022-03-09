import express from "express";
import cors from "cors";

const app = express();
const porta = 3000;

const ranking = [
  { nome: "João", pontos: 100 },
  { nome: "Pedro", pontos: 200 },
  { nome: "Maria", pontos: 300 },
  { nome: "José", pontos: 400 },
];

app.use(cors());
app.use(express.static("public"));
app.get("/ranking", function (req, res) {
  res.send(ranking);
});

app.listen(porta, () => console.log("Executando na porta " + porta));
