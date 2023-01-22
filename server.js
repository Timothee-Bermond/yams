const path = require('path')

const express = require('express')

const cookieParser = require('cookie-parser')

const db = require('./db')

const app = express()

const calcul = require('./back/calcul')
const { type } = require('os')

const hostname = '127.0.0.1'
const port = 3001

app.use("/static", express.static(path.join(__dirname, '/static')))

app.use(cookieParser())

app.use("/create", (req, res) => {
  db.Partie.create({
  }).then((partie) => {
    parametres = req.rawHeaders.toString().split("{")[1].split("}")[0]
    partie.nombreJoueurs = parametres.split(",")[0].split(":")[1]
    partie.nameJ1 = parametres.split(",")[1].split(":")[1]
    partie.nameJ2 = parametres.split(",")[2].split(":")[1]
    partie.nameJ3 = parametres.split(",")[3].split(":")[1]
    partie.nameJ4 = parametres.split(",")[4].split(":")[1]
    res.cookie("id", partie.id)
    partie.save()
    res.end()
  })
})

app.use('/initialisation', (req, res) => {
  id = req.cookies.id
  db.Partie.findByPk(id)
  .then((data) => {
    res.json(data)
  })
})

app.use('/changeJ1', (req, res) => {
  pts_J1 = req.rawHeaders.toString().split("{")[1].split("}")[0]
  id = req.cookies.id
  db.Partie.findByPk(id)
  .then((data) => {
    data.nombre1J1 = parseInt(pts_J1.split(",")[0].split(":")[1])
    data.nombre2J1 = parseInt(pts_J1.split(",")[1].split(":")[1])
    data.nombre3J1 = parseInt(pts_J1.split(",")[2].split(":")[1])
    data.nombre4J1 = parseInt(pts_J1.split(",")[3].split(":")[1])
    data.nombre5J1 = parseInt(pts_J1.split(",")[4].split(":")[1])
    data.nombre6J1 = parseInt(pts_J1.split(",")[5].split(":")[1])
    data.brelanJ1 = parseInt(pts_J1.split(",")[6].split(":")[1])
    data.carreJ1 = parseInt(pts_J1.split(",")[7].split(":")[1])
    data.fullJ1 = parseInt(pts_J1.split(",")[8].split(":")[1])
    data.psJ1 = parseInt(pts_J1.split(",")[9].split(":")[1])
    data.gsJ1 = parseInt(pts_J1.split(",")[10].split(":")[1])
    data.yamsJ1 = parseInt(pts_J1.split(",")[11].split(":")[1])
    data.yams2J1 = parseInt(pts_J1.split(",")[12].split(":")[1])
    data.yams3J1 = parseInt(pts_J1.split(",")[13].split(":")[1])
    data.chanceJ1 = parseInt(pts_J1.split(",")[14].split(":")[1])
    data.sommeJ1 = calcul.somme(data.nombre1J1, data.nombre2J1, data.nombre3J1, data.nombre4J1, data.nombre5J1, data.nombre6J1)
    data.totalJ1 = calcul.total(data.sommeJ1, data.brelanJ1, data. carreJ1, data.fullJ1, data.psJ1, data.gsJ1, data.yamsJ1, data.yams2J1, data.yams3J1, data.chanceJ1)
    data.save()
    res.json(data)
  })

})

app.use('/changeJ2', (req, res) => {
  pts_J2 = req.rawHeaders.toString().split("{")[1].split("}")[0]
  id = req.cookies.id
  db.Partie.findByPk(id)
  .then((data) => {
    data.nombre1J2 = parseInt(pts_J2.split(",")[0].split(":")[1])
    data.nombre2J2 = parseInt(pts_J2.split(",")[1].split(":")[1])
    data.nombre3J2 = parseInt(pts_J2.split(",")[2].split(":")[1])
    data.nombre4J2 = parseInt(pts_J2.split(",")[3].split(":")[1])
    data.nombre5J2 = parseInt(pts_J2.split(",")[4].split(":")[1])
    data.nombre6J2 = parseInt(pts_J2.split(",")[5].split(":")[1])
    data.brelanJ2 = parseInt(pts_J2.split(",")[6].split(":")[1])
    data.carreJ2 = parseInt(pts_J2.split(",")[7].split(":")[1])
    data.fullJ2 = parseInt(pts_J2.split(",")[8].split(":")[1])
    data.psJ2 = parseInt(pts_J2.split(",")[9].split(":")[1])
    data.gsJ2 = parseInt(pts_J2.split(",")[10].split(":")[1])
    data.yamsJ2 = parseInt(pts_J2.split(",")[11].split(":")[1])
    data.yams2J2 = parseInt(pts_J2.split(",")[12].split(":")[1])
    data.yams3J2 = parseInt(pts_J2.split(",")[13].split(":")[1])
    data.chanceJ2 = parseInt(pts_J2.split(",")[14].split(":")[1])
    data.sommeJ2 = calcul.somme(data.nombre1J2, data.nombre2J2, data.nombre3J2, data.nombre4J2, data.nombre5J2, data.nombre6J2)
    data.totalJ2 = calcul.total(data.sommeJ2, data.brelanJ2, data. carreJ2, data.fullJ2, data.psJ2, data.gsJ2, data.yamsJ2, data.yams2J2, data.yams3J2, data.chanceJ2)
    data.save()
    res.json(data)
  })

})

app.use('/changeJ3', (req, res) => {
  pts_J3 = req.rawHeaders.toString().split("{")[1].split("}")[0]
  id = req.cookies.id
  db.Partie.findByPk(id)
  .then((data) => {
    data.nombre1J3 = parseInt(pts_J3.split(",")[0].split(":")[1])
    data.nombre2J3 = parseInt(pts_J3.split(",")[1].split(":")[1])
    data.nombre3J3 = parseInt(pts_J3.split(",")[2].split(":")[1])
    data.nombre4J3 = parseInt(pts_J3.split(",")[3].split(":")[1])
    data.nombre5J3 = parseInt(pts_J3.split(",")[4].split(":")[1])
    data.nombre6J3 = parseInt(pts_J3.split(",")[5].split(":")[1])
    data.brelanJ3 = parseInt(pts_J3.split(",")[6].split(":")[1])
    data.carreJ3 = parseInt(pts_J3.split(",")[7].split(":")[1])
    data.fullJ3 = parseInt(pts_J3.split(",")[8].split(":")[1])
    data.psJ3 = parseInt(pts_J3.split(",")[9].split(":")[1])
    data.gsJ3 = parseInt(pts_J3.split(",")[10].split(":")[1])
    data.yamsJ3 = parseInt(pts_J3.split(",")[11].split(":")[1])
    data.yams2J3 = parseInt(pts_J3.split(",")[12].split(":")[1])
    data.yams3J3 = parseInt(pts_J3.split(",")[13].split(":")[1])
    data.chanceJ3 = parseInt(pts_J3.split(",")[14].split(":")[1])
    data.sommeJ3 = calcul.somme(data.nombre1J3, data.nombre2J3, data.nombre3J3, data.nombre4J3, data.nombre5J3, data.nombre6J3)
    data.totalJ3 = calcul.total(data.sommeJ3, data.brelanJ3, data. carreJ3, data.fullJ3, data.psJ3, data.gsJ3, data.yamsJ3, data.yams2J3, data.yams3J3, data.chanceJ3)
    data.save()
    res.json(data)
  })

})

app.use('/changeJ4', (req, res) => {
  pts_J4 = req.rawHeaders.toString().split("{")[1].split("}")[0]
  id = req.cookies.id
  db.Partie.findByPk(id)
  .then((data) => {
    data.nombre1J4 = parseInt(pts_J4.split(",")[0].split(":")[1])
    data.nombre2J4 = parseInt(pts_J4.split(",")[1].split(":")[1])
    data.nombre3J4 = parseInt(pts_J4.split(",")[2].split(":")[1])
    data.nombre4J4 = parseInt(pts_J4.split(",")[3].split(":")[1])
    data.nombre5J4 = parseInt(pts_J4.split(",")[4].split(":")[1])
    data.nombre6J4 = parseInt(pts_J4.split(",")[5].split(":")[1])
    data.brelanJ4 = parseInt(pts_J4.split(",")[6].split(":")[1])
    data.carreJ4 = parseInt(pts_J4.split(",")[7].split(":")[1])
    data.fullJ4 = parseInt(pts_J4.split(",")[8].split(":")[1])
    data.psJ4 = parseInt(pts_J4.split(",")[9].split(":")[1])
    data.gsJ4 = parseInt(pts_J4.split(",")[10].split(":")[1])
    data.yamsJ4 = parseInt(pts_J4.split(",")[11].split(":")[1])
    data.yams2J4 = parseInt(pts_J4.split(",")[12].split(":")[1])
    data.yams3J4 = parseInt(pts_J4.split(",")[13].split(":")[1])
    data.chanceJ4 = parseInt(pts_J4.split(",")[14].split(":")[1])
    data.sommeJ4 = calcul.somme(data.nombre1J4, data.nombre2J4, data.nombre3J4, data.nombre4J4, data.nombre5J4, data.nombre6J4)
    data.totalJ4 = calcul.total(data.sommeJ4, data.brelanJ4, data. carreJ4, data.fullJ4, data.psJ4, data.gsJ4, data.yamsJ4, data.yams2J4, data.yams3J4, data.chanceJ4)
    data.save()
    res.json(data)
  })

})

app.get('/', (req, res) => {
    res.redirect(301, '/static/index.html')
})


app.use(function (req, res) {
    console.log("et c'est le 404 : " + req.url);

    res.statusCode = 404;
    res.setHeader('Content-Type', 'text/html');

    res.end("<html><head><title>la quatre cent quatre</title></head><body><img  src=\"https://upload.wikimedia.org/wikipedia/commons/b/b4/Peugeot_404_Champs.jpg\" /></body></html>");

})

app.listen(port, hostname);
console.log(`Server running at http://${hostname}:${port}/`);