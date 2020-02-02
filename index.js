const express = require('express')
const app = express()
const moment = require('moment')
const cookieParser = require('cookie-parser')
const bodyParser = require('body-parser')
const dateMiddleware = require('./middleware/date')
const users = [
    {
        username: "aren",
        possword: "asdasd",
        gender: "male",
        agree: false
    },
    {
        username: "karen",
        possword: "fddfd",
        gender: "male",
        agree: true
    },
]


app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(cookieParser())


app.set('view engine', 'pug')
app.set("views", "./views")


app.get('/', dateMiddleware, (req, res) => {
    res.render('index', {
        time: req.cookies.time
    })
})

app.get('/api/users', (req, res) => {
    res.render('users', {
        users: users
    })
})

app.get('/api/add-users', (req, res) => {
    res.render('add-user', {
    })
})

app.get('/api/add-users', (req, res) => {
    res.render('add-user', {
    })
})


app.post('/api/users', (req, res) => {
    const newUser = {
        username: req.body.username,
        password: req.body.password,
        gender: req.body.gender,
        agree: Boolean(req.body.agree)
    }
    users.push(newUser)
    console.log(users);

})

app.listen(3000, () => {
    console.log("listen")
})