import {Document, Schema} from 'mongoose'
import mongoose from "../database/index";

export interface Post extends Document {
  content: string;
  comments?: string[];
}

const PostSchema : Schema = new mongoose.Schema({
  content: { type: String, required: true },
  comments: { type: [String] },
});

const Post = mongoose.model<Post>("Post", PostSchema);

export default Post;
