import env from 'dotenv'; env.config();
import express, {json} from "express";
import routes from './routes/'

const app = express();
const port = process.env.PORT || 3001;

//TODO use cors
app.use(json())
app.use('/', routes)

app.listen(port, () => {
  console.log("\n✅ Servidor iniciado com sucesso na porta:", port);
});

