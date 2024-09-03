const express = require('express')
const path = require('path')
const db = require('./config/mongoose-connection')
const cookieParser = require('cookie-parser')
const ownerRoutes = require('./routes/ownerRoutes')
const usersRouters = require('./routes/usersRouters')
const productsRoutes = require('./routes/productsRoutes')


const app = express()
app.use(express.static(path.join(__dirname, 'public')))
app.use(express.urlencoded({extended : true}))
app.use(express.json())
app.use(cookieParser())
app.set("view engine", "ejs")


app.get('/', (req, res)=>{
    res.send("Hello")
})

app.use('/owners', ownerRoutes)
app.use('/users', usersRouters)
app.use('/products', productsRoutes)


app.listen(3000)