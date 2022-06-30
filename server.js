const express = require('express')
const mysql = require('mysql')
const ejs = require('ejs')

const app = express()
const port = 3000

const db = mysql.createPool({
    host: "localhost",
    user: "root",
    password: "",
    database: "blog"
})

app.use(express.static('public'))
app.use('/css', express.static(__dirname + 'public/css'))
app.use('/js', express.static(__dirname + 'public/js'))
app.set('view engine', 'ejs')



app.get('/', (req, res)=>{
    let q = "select count(id) from users"
    db.query(q, (er, re)=>{
        if (er) throw er
        res.send(re)
    })
})

app.get('/login', (req, res)=>{
    res.render('login')
})

app.get('/signin', (req, res)=>{
    res.render('signin')
})


app.listen(port, () => console.log('listening...'))