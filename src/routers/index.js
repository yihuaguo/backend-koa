import combineRoutes from 'koa-combine-routers'
import miningMachineRouter from './miningMachineRouter'
import messageRouter from './messageRouter'
import helpRouter from './helpRouter'
import otherRouter from './otherRouter'
import uploadRouter from './uploadRouter'
import loginRouter from './loginRouter'
import webRouter from './webRouter'

export default combineRoutes(
    miningMachineRouter,
    messageRouter,
    helpRouter,
    otherRouter,
    uploadRouter,
    loginRouter,
    webRouter
)