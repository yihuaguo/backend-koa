import { loginValidate } from '../validate/loginValidate'
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

}

export default new loginController()