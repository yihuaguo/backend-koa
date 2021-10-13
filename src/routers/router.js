import combineRoutes from 'koa-combine-routers'
import miningMachineRouter from './miningMachineRouter'
import messageRouter from './messageRouter'
import uploadRouter from './uploadRouter'
import loginRouter from './loginRouter'

export default combineRoutes(
    // publicRouter,
    // loginRouter
    miningMachineRouter,
    messageRouter,
    uploadRouter,
    loginRouter
)