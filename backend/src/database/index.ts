import mongoose from "mongoose";

const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.6abgj.mongodb.net/techagr?retryWrites=true&w=majority`;
const options = {
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false,
  useNewUrlParser: true,
};
const errorCallback = (err: mongoose.Error) => {
  if (err) {
    console.log("❌ Erro ao conectar com o MongoAtlas: ", err.message);
  } else {
    console.log("✅ MongoDB conectado com sucesso!");
  }
}

mongoose.connect(uri, options, errorCallback);

export default mongoose;
