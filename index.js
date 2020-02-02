const express = require('express')
const app = express()
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

//middleware
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(cookieParser())

//pug engine connection
app.set('view engine', 'pug')
app.set("views", "./views")

//routes
app.get('/', dateMiddleware, (req, res) => {
    res.render('index', {
        time: req.cookies.time
    })
})

//there is something not understable in task ,,
//maybe here is a mistake
app.get('/myroute/:param', (req, res) => {
    const myParam = req.params.param
    res.render('myroute', {
        myParam: myParam
    })
})

app.get('/form', (req, res) => {
    res.render('form', {
    })
})

app.post('/form', (req, res) => {
    const newUser = {
        username: req.body.username,
        password: req.body.password,
        gender: req.body.gender,
        agree: Boolean(req.body.agree)
    }
    users.push(newUser)
    res.redirect('/result')

})

app.get('/result', (req, res) => {
    res.render('result', {
        users: users
    })
})

app.get('/api/time', (req, res) => {
    res.status(200).json({ time: Date.now() });
})

app.post('/api/users', (req, res) => {
    const newUser = {
        username: req.body.username,
        password: req.body.password,
        gender: req.body.gender,
        agree: Boolean(req.body.agree)
    }
    users.push(newUser)
    res.status(200)
})

app.get('/api/users', (req, res) => {
    res.status(200).json(users)
})

app.listen(3000, () => {
    console.log("listen")
})