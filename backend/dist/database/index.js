"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = __importDefault(require("mongoose"));
var uri = "mongodb+srv://" + process.env.DB_USER + ":" + process.env.DB_PASS + "@cluster0.6abgj.mongodb.net/techagr?retryWrites=true&w=majority";
var options = {
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useNewUrlParser: true,
};
var errorCallback = function (err) {
    if (err) {
        console.log("❌ Erro ao conectar com o MongoAtlas: ", err.message);
    }
    else {
        console.log("✅ MongoDB conectado com sucesso!");
    }
};
mongoose_1.default.connect(uri, options, errorCallback);
exports.default = mongoose_1.default;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiLi9zcmMvIiwic291cmNlcyI6WyJkYXRhYmFzZS9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLHNEQUFnQztBQUVoQyxJQUFNLEdBQUcsR0FBRyxtQkFBaUIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxPQUFPLFNBQUksT0FBTyxDQUFDLEdBQUcsQ0FBQyxPQUFPLG9FQUFpRSxDQUFDO0FBQ3pJLElBQU0sT0FBTyxHQUFHO0lBQ2Qsa0JBQWtCLEVBQUUsSUFBSTtJQUN4QixjQUFjLEVBQUUsSUFBSTtJQUNwQixnQkFBZ0IsRUFBRSxLQUFLO0lBQ3ZCLGVBQWUsRUFBRSxJQUFJO0NBQ3RCLENBQUM7QUFDRixJQUFNLGFBQWEsR0FBRyxVQUFDLEdBQW1CO0lBQ3hDLElBQUksR0FBRyxFQUFFO1FBQ1AsT0FBTyxDQUFDLEdBQUcsQ0FBQyx1Q0FBdUMsRUFBRSxHQUFHLENBQUMsT0FBTyxDQUFDLENBQUM7S0FDbkU7U0FBTTtRQUNMLE9BQU8sQ0FBQyxHQUFHLENBQUMsa0NBQWtDLENBQUMsQ0FBQztLQUNqRDtBQUNILENBQUMsQ0FBQTtBQUVELGtCQUFRLENBQUMsT0FBTyxDQUFDLEdBQUcsRUFBRSxPQUFPLEVBQUUsYUFBYSxDQUFDLENBQUM7QUFFOUMsa0JBQWUsa0JBQVEsQ0FBQyJ9