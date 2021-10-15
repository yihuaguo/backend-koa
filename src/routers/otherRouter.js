import Router from 'koa-router'
import recruitController from '../api/recruitController'

const router = new Router()

// 接口前缀
router.prefix('/other')

// 招聘信息
router.get('/getRecruitList', recruitController.getRecruitList)
router.get('/getRecruitDetail', recruitController.getRecruitDetail)
router.post('/addRecruit', recruitController.addRecruit)
router.delete('/deleteRecruit', recruitController.deleteRecruit)
router.put('/editRecruit', recruitController.editRecruit)


export default router