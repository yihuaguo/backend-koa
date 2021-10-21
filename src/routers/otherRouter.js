import Router from 'koa-router'
import recruitController from '../api/recruitController'
import configController from '../api/configController'

const router = new Router()

// 接口前缀
router.prefix('/api/other')

// 招聘信息
router.get('/getRecruitList', recruitController.getRecruitList)
router.get('/getRecruitDetail', recruitController.getRecruitDetail)
router.post('/addRecruit', recruitController.addRecruit)
router.delete('/deleteRecruit', recruitController.deleteRecruit)
router.put('/editRecruit', recruitController.editRecruit)

// 官网设置
router.get('/getConfig', configController.getConfig)
router.put('/editConfig', configController.editConfig)

export default router