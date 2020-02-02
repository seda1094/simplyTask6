const express = require('express')
const app = express()
const moment = require('moment')
const cookieParser = require('cookie-parser')

app.use(cookieParser())

app.use('/', (req, res, next) => {
    console.log(req.cookie);

    const cookie = req.cookies.time;
    if (cookie === undefined) {
        const time = moment()
        res.cookie('time', time, { });
        console.log('cookie created successfully');
    }
    else {
        console.log('cookie exists', cookie);
    }
    next();
});


app.set('view engine', 'pug')
app.set("views", "./views")

app.get('/', (req, res) => {
    res.render('index', {
        time: req.cookies.time
    })
})

app.listen(3000, () => {
    console.log("listen")
})