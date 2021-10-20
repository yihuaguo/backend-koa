import Router from 'koa-router'
import loginController from '../api/loginController'

const router = new Router()

router.post('/api/login', loginController.login)

export default router