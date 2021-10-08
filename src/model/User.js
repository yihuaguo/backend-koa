import mongoose from '../config/DBHelpler'

const Scaema = mongoose.Schema

const UserScaema = new Scaema({
    'name': { type: String }, 
    'username': { type: String },
    'password': { type: String }
})

const UserModel = mongoose.model('users', UserScaema)

export default UserModel