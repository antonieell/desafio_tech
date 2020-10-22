import * as postController from '../controllers/postController'
import {Router} from 'express'
const router = Router()

router.get('/posts', postController.getPosts)
router.post('/posts', postController.createPost)

export default router
