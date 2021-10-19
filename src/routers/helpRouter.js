import Router from 'koa-router'
import helpTypeController from '../api/helpTypeController'
import helpController from '../api/helpController'

const router = new Router()

// 帮助
router.prefix('/api/help')

// 帮助分类
router.get('/getHelpTypeList', helpTypeController.getHelpTypeList)
router.get('/getHelpTypeDetail', helpTypeController.getHelpTypeDetail)
router.post('/addHelpType', helpTypeController.addHelpType)
router.delete('/deleteHelpType', helpTypeController.deleteHelpType)
router.put('/editHelpType', helpTypeController.editHelpType)

// 帮助信息
router.get('/getHelpList', helpController.getHelpList)
router.get('/getHelpDetail', helpController.getHelpDetail)
router.post('/addHelp', helpController.addHelp)
router.delete('/deleteHelp', helpController.deleteHelp)
router.put('/editHelp', helpController.editHelp)

export default router