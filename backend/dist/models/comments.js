"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var database_1 = __importDefault(require("../database/"));
var PostSchema = new database_1.default.Schema({
    content: String,
    comments: [],
});
var Post = database_1.default.model("Post", PostSchema);
exports.default = Post;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tbWVudHMuanMiLCJzb3VyY2VSb290IjoiLi9zcmMvIiwic291cmNlcyI6WyJtb2RlbHMvY29tbWVudHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSwwREFBb0M7QUFFcEMsSUFBTSxVQUFVLEdBQUcsSUFBSSxrQkFBUSxDQUFDLE1BQU0sQ0FBQztJQUNyQyxPQUFPLEVBQUUsTUFBTTtJQUNmLFFBQVEsRUFBRSxFQUFFO0NBQ2IsQ0FBQyxDQUFDO0FBRUgsSUFBTSxJQUFJLEdBQUcsa0JBQVEsQ0FBQyxLQUFLLENBQUMsTUFBTSxFQUFFLFVBQVUsQ0FBQyxDQUFDO0FBQ2hELGtCQUFlLElBQUksQ0FBQSJ9