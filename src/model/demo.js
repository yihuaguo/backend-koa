import User from './test'

const user = {
    name: 'brin',
    age: 300,
    email: '123@qq.cn'
}

const run = async() => {
    const data = new User(user)
    const result = await data.save()
    console.log('result', result)
}

// run()