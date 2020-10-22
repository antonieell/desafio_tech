import * as postController from '../controllers/postController'
import {Router} from 'express'
const router = Router()

router.get('/posts', postController.getPosts)
router.get('/posts/:id', postController.getPostsById)
router.get('/posts/:id/comments', postController.getCommentsById)
router.post('/posts', postController.createPost)
router.post('/posts/:id/comments', postController.createComment)

export default router
