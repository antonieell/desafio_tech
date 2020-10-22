import mongoose from "../database/index";

const PostSchema = new mongoose.Schema({
  content: { type: String, required: true },
  comments: { type: [String] },
});

const Post = mongoose.model("Post", PostSchema);

export default Post;
