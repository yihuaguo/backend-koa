import Router from 'koa-router'
import loginController from '../api/loginController'

const router = new Router()

router.post('/login', loginController.login)
router.get('/test', loginController.test)

export default router