import Router from 'koa-router'
import publicController from '../api/publicController'

const router = new Router()

router.prefix('/public')
router.get('/getCaptcha', publicController.getCaptcha)

// 测试表格接口
router.get('/list', publicController.list)

export default router