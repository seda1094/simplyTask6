const express = require('express')
const app = express()

app.set('view engine', 'pug')
app.set("views", "./views")

app.get('/',(req,res)=>{
    res.render('index',{})
})

app.listen(3000,()=>{
    console.log("listen")
})