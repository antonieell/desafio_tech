import express from "express";
import env from 'dotenv'
env.config()

import routes from './routes/'

const app = express();
const port = process.env.PORT || 3001;

app.use('/', routes)

app.listen(port, () => {
  console.log("\n✅ Servidor iniciado com sucesso na porta:", port);
});
