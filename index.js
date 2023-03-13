const path = require('path')
const express = require('express')
const { unwatchFile } = require('fs')
const app = express()
const http = require("http").Server(app)
const io = require("socket.io")(http)

const calcul = require('./back/calcul_score')

const hostname = '127.0.0.1'
const port = 10436

app.use("/static", express.static(path.join(__dirname, '/static')))

app.get('/', (req, res) => {
    res.redirect(301, '/static/yams.html')
})

var points = {
    nombre1j1: null,
    nombre2j1: null,
    nombre3j1: null,
    nombre4j1: null,
    nombre5j1: null,
    nombre6j1: null,
    sommej1: 0,
    brelanj1: null,
    carrej1: null,
    fullj1: null,
    psj1: null,
    gsj1: null,
    yamsj1: null,
    yams2j1: null,
    yams3j1: null,
    chancej1: null,
    totalj1: 0,

    nombre1j2: null,
    nombre2j2: null,
    nombre3j2: null,
    nombre4j2: null,
    nombre5j2: null,
    nombre6j2: null,
    sommej2: 0,
    brelanj2: null,
    carrej2: null,
    fullj2: null,
    psj2: null,
    gsj2: null,
    yamsj2: null,
    yams2j2: null,
    yams3j2: null,
    chancej2: null,
    totalj2: 0,

    nombre1j3: null,
    nombre2j3: null,
    nombre3j3: null,
    nombre4j3: null,
    nombre5j3: null,
    nombre6j3: null,
    sommej3: 0,
    brelanj3: null,
    carrej3: null,
    fullj3: null,
    psj3: null,
    gsj3: null,
    yamsj3: null,
    yams2j3: null,
    yams3j3: null,
    chancej3: null,
    totalj3: 0,

    nombre1j4: null,
    nombre2j4: null,
    nombre3j4: null,
    nombre4j4: null,
    nombre5j4: null,
    nombre6j4: null,
    sommej4: 0,
    brelanj4: null,
    carrej4: null,
    fullj4: null,
    psj4: null,
    gsj4: null,
    yamsj4: null,
    yams2j4: null,
    yams3j4: null,
    chancej4: null,
    totalj4: 0
}

io.on("connection", function (socket) {
    console.log("Client connected")
    socket.on("score", function (data){
        points[data.id] = parseInt(data.value)
        calculated_points = calcul.calcul_score(points)
        io.emit("updateScore", calculated_points)
    })

    socket.on("barre", function(data) {
        points[data] = 'barre'
        calculated_points = calcul.calcul_score(points)
        io.emit("updateBarre", calculated_points)
    })

    socket.on("remet", function (data){
        points[data] = null
        io.emit("updateRemet", data)
    })
})


http.listen(port, function (){
    console.log(`Server running at http://${hostname}:${port}/`);
})
