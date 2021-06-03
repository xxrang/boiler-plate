const express = require('express') //express 
const app = express() //express app 생성
const port = 3000

const mongoose = require('mongoose')
mongoose.connect('mongodb+srv://jaerang:Rhkdguddl2@2@cluster0.8axu5.mongodb.net/myFirstDatabase?retryWrites=true&w=majority',
    {useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true, useFindAndModify: false
    }).then(()=> console.log('MongoDB connected'))
      .catch(err => console.log(err))


app.get('/', (req, res) => res.send('Hello World!'))

app.listen(port, () => console.log(`Example app listensing on port ${port}!`))
//해당 포트를 listen 하고 있다면 콘솔 로그 찍어주기