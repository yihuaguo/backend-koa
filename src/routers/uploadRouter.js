import Router from 'koa-router'
import uploadController from '../api/uploadController'

const router = new Router()

router.post('/api/upload', uploadController.upload)

export default router