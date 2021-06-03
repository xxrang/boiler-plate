const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
    name: {
        type: String,
        maxlength: 50
    },
    email: {
        type: String,
        trim: true, //! 빈칸 없애주는 역할
        unique: 1
    },
    password : {
        type: String,
        minlength: 5
    },
    lastname: {
        type: String,
        maxlength: 50
    },
    role: {
        type: Number, //! number 1이면 관리자 0이면 유저 이런식으로 숫자 타입으로 권한 설정
        default: 0
    },
    image: String,
    token: {
        type: String //! 유효성 관리
    },
    tokenExp: {
        type: Number //! token 유효기간   
    }
})

const User = mongoose.model('User',userSchema)

module.exports = { User } //! 다른 페이지에서 User 페이지를 사용할 수 있게 exports