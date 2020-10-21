import env from 'dotenv'
import express from "express";

env.config()

import "./models/comments"

const app = express();
const port = process.env.PORT || 3001;

app.listen(port, () => {
  console.log("\n✅ Servidor iniciado com sucesso na porta:", port);
});
