import Router from 'koa-router'
import helpTypeController from '../api/helpTypeController'
import helpController from '../api/helpController'
import messageTypeController from '../api/messageTypeController'
import messageController from '../api/messageController'
import miningMachineController from '../api/miningMachineController'
import recruitController from '../api/recruitController'
import configController from '../api/configController'

// 该文件所有接口用于官网端调用，不需要jwt校验
const router = new Router()

router.prefix('/web')

// 帮助分类
router.get('/help/getHelpTypeList', helpTypeController.getHelpTypeList)
// 帮助信息
router.get('/help/getHelpList', helpController.getHelpList)

// 资讯分类
router.get('/message/getMessageTypeList', messageTypeController.getMessageTypeList)
// 资讯信息
router.get('/message/getMessageList', messageController.getMessageList)
router.get('/message/getMessageDetail', messageController.getMessageDetail)

// 矿机信息
router.get('/miningMachine/getMiningMachineList', miningMachineController.getMiningMachineList)
router.get('/miningMachine/getMiningMachineDetail', miningMachineController.getMiningMachineDetail)

// 招聘信息
router.get('/other/getRecruitList', recruitController.getRecruitList)
// 官网设置
router.get('/other/getConfig', configController.getConfig)
router.put('/other/editConfig', configController.editConfig)

export default router