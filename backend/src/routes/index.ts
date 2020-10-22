import * as postController from '../controllers/postController'
import {Router} from 'express'
const router = Router()

router.get('/posts', postController.getPosts)

export default router
