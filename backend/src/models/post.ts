import mongoose from "../database/index";

const PostSchema = new mongoose.Schema({
  content: String,
  comments: [String],
});

const Post = mongoose.model("Post", PostSchema);

export default Post
