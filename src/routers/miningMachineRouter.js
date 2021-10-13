import Router from 'koa-router'
import miningMachineController from '../api/miningMachineController'

const router = new Router()

// 矿机管理
router.prefix('/miningMachine')

// 矿机信息
router.get('/getMiningMachineList', miningMachineController.getMiningMachineList)
router.get('/getMiningMachineDetail', miningMachineController.getMiningMachineDetail)
router.post('/addMiningMachine', miningMachineController.addMiningMachine)
router.delete('/deleteMiningMachine', miningMachineController.deleteMiningMachine)
router.put('/editMiningMachine', miningMachineController.editMiningMachine)

export default router