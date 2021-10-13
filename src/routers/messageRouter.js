import Router from 'koa-router'
import messageTypeController from '../api/messageTypeController'
import messageController from '../api/messageController'

const router = new Router()

// 资讯
router.prefix('/message')

// 资讯分类
router.get('/getMessageTypeList', messageTypeController.getMessageTypeList)
router.get('/getMessageTypeDetail', messageTypeController.getMessageTypeDetail)
router.post('/addMessageType', messageTypeController.addMessageType)
router.delete('/deleteMessageType', messageTypeController.deleteMessageType)
router.put('/editMessageType', messageTypeController.editMessageType)

// 资讯信息
router.get('/getMessageList', messageController.getMessageList)
router.get('/getMessageDetail', messageController.getMessageDetail)
router.post('/addMessage', messageController.addMessage)
router.delete('/deleteMessage', messageController.deleteMessage)
router.put('/editMessage', messageController.editMessage)

export default router