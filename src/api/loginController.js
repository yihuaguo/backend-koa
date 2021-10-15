import { testValidate, loginValidate } from '../validate/loginValidate'
import { loginModal } from '../modal/loginModal'

class loginController {
    constructor() { }

    // 登录
    async login(ctx) {
        const params = ctx.request.body
        const filiterParams = loginValidate(params)
        const result = await loginModal(filiterParams)
        ctx.body = result
    }

    async test(ctx) {
        testValidate(ctx.request.query)
        ctx.body = {
            code: 200
        }
    }

}

export default new loginController()