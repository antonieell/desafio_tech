"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var index_1 = __importDefault(require("../database/index"));
var PostSchema = new index_1.default.Schema({
    content: { type: String, required: true },
    comments: {
        type: [
            {
                postId: { type: index_1.default.Types.ObjectId },
                comment: { type: String },
            },
        ],
    },
});
var Post = index_1.default.model("Post", PostSchema);
exports.default = Post;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicG9zdC5qcyIsInNvdXJjZVJvb3QiOiIuL3NyYy8iLCJzb3VyY2VzIjpbIm1vZGVscy9wb3N0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQ0EsNERBQXlDO0FBT3pDLElBQU0sVUFBVSxHQUFXLElBQUksZUFBUSxDQUFDLE1BQU0sQ0FBQztJQUM3QyxPQUFPLEVBQUUsRUFBRSxJQUFJLEVBQUUsTUFBTSxFQUFFLFFBQVEsRUFBRSxJQUFJLEVBQUU7SUFDekMsUUFBUSxFQUFFO1FBQ1IsSUFBSSxFQUFFO1lBQ0o7Z0JBQ0UsTUFBTSxFQUFFLEVBQUUsSUFBSSxFQUFFLGVBQVEsQ0FBQyxLQUFLLENBQUMsUUFBUSxFQUFFO2dCQUN6QyxPQUFPLEVBQUUsRUFBRSxJQUFJLEVBQUUsTUFBTSxFQUFFO2FBQzFCO1NBQ0Y7S0FDRjtDQUNGLENBQUMsQ0FBQztBQUVILElBQU0sSUFBSSxHQUFHLGVBQVEsQ0FBQyxLQUFLLENBQU8sTUFBTSxFQUFFLFVBQVUsQ0FBQyxDQUFDO0FBRXRELGtCQUFlLElBQUksQ0FBQyJ9