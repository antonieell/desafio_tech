"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createComment = exports.createPost = exports.getCommentsById = exports.getPostsById = exports.getPosts = void 0;
var post_1 = __importDefault(require("../models/post"));
/* GET /posts
Retorna a lista de posts */
exports.getPosts = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var allPosts, error_1;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                return [4 /*yield*/, post_1.default.find()];
            case 1:
                allPosts = _a.sent();
                return [2 /*return*/, res.status(200).send(allPosts)];
            case 2:
                error_1 = _a.sent();
                console.log(error_1);
                return [2 /*return*/, res.status(500)];
            case 3: return [2 /*return*/];
        }
    });
}); };
/* GET /posts/:id
 Retorna um post específico, caso não exista deverá retornar 404 Not Found*/
exports.getPostsById = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var id, getPostById, error_2;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                id = req.params.id;
                _a.label = 1;
            case 1:
                _a.trys.push([1, 3, , 4]);
                return [4 /*yield*/, post_1.default.findById(id).orFail()];
            case 2:
                getPostById = _a.sent();
                return [2 /*return*/, res.status(200).send(getPostById)];
            case 3:
                error_2 = _a.sent();
                console.log(error_2);
                return [2 /*return*/, res.status(404).send({ err: "Post não encontrado" })];
            case 4: return [2 /*return*/];
        }
    });
}); };
/* GET /posts/:id/comments Retorna a lista de comentários para um determinado post,
caso não exista deverá retornar 404 Not Found */
exports.getCommentsById = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var id, getPostById, error_3;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                id = req.params.id;
                _a.label = 1;
            case 1:
                _a.trys.push([1, 3, , 4]);
                return [4 /*yield*/, post_1.default.findById(id).orFail()];
            case 2:
                getPostById = _a.sent();
                return [2 /*return*/, res.status(200).send(getPostById === null || getPostById === void 0 ? void 0 : getPostById.comments)];
            case 3:
                error_3 = _a.sent();
                console.log(error_3);
                return [2 /*return*/, res.status(404).send({ err: "Post não encontrado" })];
            case 4: return [2 /*return*/];
        }
    });
}); };
/* POST /posts
Faz a inclusão de um novo post */
exports.createPost = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var content, post, error_4;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                content = req.body.content;
                _a.label = 1;
            case 1:
                _a.trys.push([1, 3, , 4]);
                return [4 /*yield*/, post_1.default.create({ content: content })];
            case 2:
                post = _a.sent();
                return [2 /*return*/, res.json(post)];
            case 3:
                error_4 = _a.sent();
                console.log(error_4);
                return [2 /*return*/, res.status(500).json({ err: "Não foi possível criar o post" })];
            case 4: return [2 /*return*/];
        }
    });
}); };
/* POST /posts/:id/comments
Faz a inclusão de um novo comentário para um determinado post */
exports.createComment = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var id, comment, post, err_1;
    var _a;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                id = req.params.id;
                comment = req.body;
                _b.label = 1;
            case 1:
                _b.trys.push([1, 5, , 6]);
                return [4 /*yield*/, post_1.default.findById(id).orFail()];
            case 2:
                post = _b.sent();
                if (!comment)
                    throw "Ta faltando o comentário";
                if (!post) return [3 /*break*/, 4];
                comment.postId = id;
                (_a = post.comments) === null || _a === void 0 ? void 0 : _a.push(comment);
                return [4 /*yield*/, post.save()];
            case 3:
                _b.sent();
                _b.label = 4;
            case 4: return [2 /*return*/, res.json(post)];
            case 5:
                err_1 = _b.sent();
                console.log('ERROR: ', err_1);
                return [2 /*return*/, res.status(500).json({ err: "Não foi possível criar o comentário." })];
            case 6: return [2 /*return*/];
        }
    });
}); };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicG9zdENvbnRyb2xsZXIuanMiLCJzb3VyY2VSb290IjoiLi9zcmMvIiwic291cmNlcyI6WyJjb250cm9sbGVycy9wb3N0Q29udHJvbGxlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFQSx3REFBa0M7QUFFbEM7MkJBQzJCO0FBQ2QsUUFBQSxRQUFRLEdBQUcsVUFBTyxHQUFZLEVBQUUsR0FBYTs7Ozs7O2dCQUVyQyxxQkFBTSxjQUFJLENBQUMsSUFBSSxFQUFFLEVBQUE7O2dCQUE1QixRQUFRLEdBQUcsU0FBaUI7Z0JBQ2xDLHNCQUFPLEdBQUcsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxFQUFDOzs7Z0JBRXRDLE9BQU8sQ0FBQyxHQUFHLENBQUMsT0FBSyxDQUFDLENBQUM7Z0JBQ25CLHNCQUFPLEdBQUcsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLEVBQUM7Ozs7S0FFMUIsQ0FBQztBQUVGOzRFQUM0RTtBQUMvRCxRQUFBLFlBQVksR0FBRyxVQUFPLEdBQVksRUFBRSxHQUFhOzs7OztnQkFDcEQsRUFBRSxHQUFLLEdBQUcsQ0FBQyxNQUFNLEdBQWYsQ0FBZ0I7Ozs7Z0JBRUoscUJBQU0sY0FBSSxDQUFDLFFBQVEsQ0FBQyxFQUFFLENBQUMsQ0FBQyxNQUFNLEVBQUUsRUFBQTs7Z0JBQTlDLFdBQVcsR0FBRyxTQUFnQztnQkFDcEQsc0JBQU8sR0FBRyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLEVBQUM7OztnQkFFekMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxPQUFLLENBQUMsQ0FBQztnQkFDbkIsc0JBQU8sR0FBRyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsRUFBRSxHQUFHLEVBQUUscUJBQXFCLEVBQUUsQ0FBQyxFQUFDOzs7O0tBRS9ELENBQUM7QUFFRjtnREFDZ0Q7QUFDbkMsUUFBQSxlQUFlLEdBQUcsVUFBTyxHQUFZLEVBQUUsR0FBYTs7Ozs7Z0JBQ3ZELEVBQUUsR0FBSyxHQUFHLENBQUMsTUFBTSxHQUFmLENBQWdCOzs7O2dCQUVKLHFCQUFNLGNBQUksQ0FBQyxRQUFRLENBQUMsRUFBRSxDQUFDLENBQUMsTUFBTSxFQUFFLEVBQUE7O2dCQUE5QyxXQUFXLEdBQUcsU0FBZ0M7Z0JBQ3BELHNCQUFPLEdBQUcsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLFdBQVcsYUFBWCxXQUFXLHVCQUFYLFdBQVcsQ0FBRSxRQUFRLENBQUMsRUFBQzs7O2dCQUVuRCxPQUFPLENBQUMsR0FBRyxDQUFDLE9BQUssQ0FBQyxDQUFDO2dCQUNuQixzQkFBTyxHQUFHLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxFQUFFLEdBQUcsRUFBRSxxQkFBcUIsRUFBRSxDQUFDLEVBQUM7Ozs7S0FFL0QsQ0FBQztBQUVGO2lDQUNpQztBQUNwQixRQUFBLFVBQVUsR0FBRyxVQUFPLEdBQVksRUFBRSxHQUFhOzs7OztnQkFDbEQsT0FBTyxHQUFLLEdBQUcsQ0FBQyxJQUFJLFFBQWIsQ0FBYzs7OztnQkFFZCxxQkFBTSxjQUFJLENBQUMsTUFBTSxDQUFDLEVBQUUsT0FBTyxTQUFBLEVBQUUsQ0FBQyxFQUFBOztnQkFBckMsSUFBSSxHQUFHLFNBQThCO2dCQUMzQyxzQkFBTyxHQUFHLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFDOzs7Z0JBRXRCLE9BQU8sQ0FBQyxHQUFHLENBQUMsT0FBSyxDQUFDLENBQUM7Z0JBQ25CLHNCQUFPLEdBQUcsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLEVBQUUsR0FBRyxFQUFFLCtCQUErQixFQUFFLENBQUMsRUFBQzs7OztLQUV6RSxDQUFDO0FBRUY7Z0VBQ2dFO0FBRW5ELFFBQUEsYUFBYSxHQUFHLFVBQU8sR0FBWSxFQUFFLEdBQWE7Ozs7OztnQkFDckQsRUFBRSxHQUFLLEdBQUcsQ0FBQyxNQUFNLEdBQWYsQ0FBZ0I7Z0JBQ3BCLE9BQU8sR0FBRyxHQUFHLENBQUMsSUFBSSxDQUFDOzs7O2dCQUVWLHFCQUFNLGNBQUksQ0FBQyxRQUFRLENBQUMsRUFBRSxDQUFDLENBQUMsTUFBTSxFQUFFLEVBQUE7O2dCQUF2QyxJQUFJLEdBQUcsU0FBZ0M7Z0JBQzdDLElBQUksQ0FBQyxPQUFPO29CQUFFLE1BQU0sMEJBQTBCLENBQUM7cUJBQzVDLElBQUksRUFBSix3QkFBSTtnQkFDTCxPQUFPLENBQUMsTUFBTSxHQUFHLEVBQUUsQ0FBQTtnQkFDbkIsTUFBQSxJQUFJLENBQUMsUUFBUSwwQ0FBRSxJQUFJLENBQUMsT0FBTyxFQUFDO2dCQUM1QixxQkFBTSxJQUFJLENBQUMsSUFBSSxFQUFFLEVBQUE7O2dCQUFqQixTQUFpQixDQUFBOztvQkFFbkIsc0JBQU8sR0FBRyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsRUFBQzs7O2dCQUV0QixPQUFPLENBQUMsR0FBRyxDQUFDLFNBQVMsRUFBQyxLQUFHLENBQUMsQ0FBQTtnQkFDMUIsc0JBQU8sR0FBRyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsRUFBRSxHQUFHLEVBQUUsc0NBQXNDLEVBQUUsQ0FBQyxFQUFDOzs7O0tBRWhGLENBQUMifQ==