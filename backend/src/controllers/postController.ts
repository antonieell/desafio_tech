import { Request, Response } from "express";
import mongoose from "../database";
import Post from "../models/post";

/* GET /posts 
Retorna a lista de posts */
export const getPosts = async (req: Request, res: Response) => {
  try {
    const allPosts = await Post.find().orFail();
    return res.status(200).send(allPosts);
  } catch (error) {
    console.log(error);
    return res.status(500);
  }
};

/* GET /posts/:id 
 Retorna um post específico, caso não exista deverá retornar 404 Not Found*/
export const getPostsById = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const getPostById = await Post.findById(id).orFail();
    return res.status(200).send(getPostById);
  } catch (error) {
    console.log(error);
    return res.send({ err: "Post não encontrado" }).status(404);
  }
};

/* GET /posts/:id/comments Retorna a lista de comentários para um determinado post, 
caso não exista deverá retornar 404 Not Found */
export const getCommentsById = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const getPostById = await Post.findById(id).orFail();
    return res.status(200).send(getPostById?.comments);
  } catch (error) {
    console.log(error);
    return res.send({ err: "Post não encontrado" }).status(404);
  }
};

/* POST /posts 
Faz a inclusão de um novo post */
export const createPost = async (req: Request, res: Response) => {
  const { content } = req.body;
  try {
    const post = await Post.create({ content });
    return res.json(post);
  } catch (error) {
    console.log(error);
    return res.json({ err: "Não foi possível criar o post" }).status(500);
  }
};

/* POST /posts/:id/comments 
Faz a inclusão de um novo comentário para um determinado post */

export const createComment = async (req: Request, res: Response) => {
  const { id } = req.params;
  const comment = req.body;
  try {
    const post = await Post.findById(id).orFail();
    if(post){
      comment.postId = id
      post.comments?.push(comment)
      await post.save()
    }
    return res.json(post);
  } catch (error) {
    console.log(error);
    return res.json({ err: "Não foi possível encontrar o post" }).status(500);
  }
};
