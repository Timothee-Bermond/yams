const path = require('path')

const express = require('express')

const cookieParser = require('cookie-parser')

const bodyParser = require('body-parser')

const db = require('./db')

const app = express()

const calcul = require('./back/calcul')
const { type } = require('os')

const hostname = '127.0.0.1'
const port = 10436

app.use("/static", express.static(path.join(__dirname, '/static')))

app.use(cookieParser())

app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())


app.post("/create", (req, res) => {
  db.Partie.create({
  }).then((partie) => {
    res.clearCookie('id')
    db.Partie.findByPk(partie.id)
    .then((partiebis) => {
      res.cookie("id", partiebis.id).send('ok')
      db.Partie.findByPk(partiebis.id)
      .then((partieter)=> {
        partieter.nombreJoueurs = req.body.nbrPlayers
        partieter.nameJ1 = req.body.player1
        partieter.nameJ2 = req.body.player2
        partieter.nameJ3 = req.body.player3
        partieter.nameJ4 = req.body.player4
        partieter.save()
      })
    })
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
  id = req.cookies.id
  db.Partie.findByPk(id)
  .then((data) => {
    data.nombre1J1 = req.body.nombre1J1
    data.nombre2J1 = req.body.nombre2J1
    data.nombre3J1 = req.body.nombre3J1
    data.nombre4J1 = req.body.nombre4J1
    data.nombre5J1 = req.body.nombre5J1
    data.nombre6J1 = req.body.nombre6J1
    data.brelanJ1 = req.body.brelanJ1
    data.carreJ1 = req.body.carreJ1
    data.fullJ1 = req.body.fullJ1
    data.psJ1 = req.body.psJ1
    data.gsJ1 = req.body.gsJ1
    data.yamsJ1 = req.body.yamsJ1
    data.yams2J1 = req.body.yams2J1
    data.yams3J1 = req.body.yams3J1
    data.chanceJ1 = req.body.chanceJ1
    data.sommeJ1 = calcul.somme(data.nombre1J1, data.nombre2J1, data.nombre3J1, data.nombre4J1, data.nombre5J1, data.nombre6J1)
    data.totalJ1 = calcul.total(data.sommeJ1, data.brelanJ1, data. carreJ1, data.fullJ1, data.psJ1, data.gsJ1, data.yamsJ1, data.yams2J1, data.yams3J1, data.chanceJ1)
    data.save()
    res.json(data)
  })

})

app.use('/changeJ2', (req, res) => {
  id = req.cookies.id
  db.Partie.findByPk(id)
  .then((data) => {
    data.nombre1J2 = req.body.nombre1J2
    data.nombre2J2 = req.body.nombre2J2
    data.nombre3J2 = req.body.nombre3J2
    data.nombre4J2 = req.body.nombre4J2
    data.nombre5J2 = req.body.nombre5J2
    data.nombre6J2 = req.body.nombre6J2
    data.brelanJ2 = req.body.brelanJ2
    data.carreJ2 = req.body.carreJ2
    data.fullJ2 = req.body.fullJ2
    data.psJ2 = req.body.psJ2
    data.gsJ2 = req.body.gsJ2
    data.yamsJ2 = req.body.yamsJ2
    data.yams2J2 = req.body.yams2J2
    data.yams3J2 = req.body.yams3J2
    data.chanceJ2 = req.body.chanceJ2
    data.sommeJ2 = calcul.somme(data.nombre1J2, data.nombre2J2, data.nombre3J2, data.nombre4J2, data.nombre5J2, data.nombre6J2)
    data.totalJ2 = calcul.total(data.sommeJ2, data.brelanJ2, data. carreJ2, data.fullJ2, data.psJ2, data.gsJ2, data.yamsJ2, data.yams2J2, data.yams3J2, data.chanceJ2)
    data.save()
    res.json(data)
  })

})

app.use('/changeJ3', (req, res) => {
  id = req.cookies.id
  db.Partie.findByPk(id)
  .then((data) => {
    data.nombre1J3 = req.body.nombre1J3
    data.nombre2J3 = req.body.nombre2J3
    data.nombre3J3 = req.body.nombre3J3
    data.nombre4J3 = req.body.nombre4J3
    data.nombre5J3 = req.body.nombre5J3
    data.nombre6J3 = req.body.nombre6J3
    data.brelanJ3 = req.body.brelanJ3
    data.carreJ3 = req.body.carreJ3
    data.fullJ3 = req.body.fullJ3
    data.psJ3 = req.body.psJ3
    data.gsJ3 = req.body.gsJ3
    data.yamsJ3 = req.body.yamsJ3
    data.yams2J3 = req.body.yams2J3
    data.yams3J3 = req.body.yams3J3
    data.chanceJ3 = req.body.chanceJ3
    data.sommeJ3 = calcul.somme(data.nombre1J3, data.nombre2J3, data.nombre3J3, data.nombre4J3, data.nombre5J3, data.nombre6J3)
    data.totalJ3 = calcul.total(data.sommeJ3, data.brelanJ3, data. carreJ3, data.fullJ3, data.psJ3, data.gsJ3, data.yamsJ3, data.yams2J3, data.yams3J3, data.chanceJ3)
    data.save()
    res.json(data)
  })

})

app.use('/changeJ4', (req, res) => {
  id = req.cookies.id
  db.Partie.findByPk(id)
  .then((data) => {
    data.nombre1J4 = req.body.nombre1J4
    data.nombre2J4 = req.body.nombre2J4
    data.nombre3J4 = req.body.nombre3J4
    data.nombre4J4 = req.body.nombre4J4
    data.nombre5J4 = req.body.nombre5J4
    data.nombre6J4 = req.body.nombre6J4
    data.brelanJ4 = req.body.brelanJ4
    data.carreJ4 = req.body.carreJ4
    data.fullJ4 = req.body.fullJ4
    data.psJ4 = req.body.psJ4
    data.gsJ4 = req.body.gsJ4
    data.yamsJ4 = req.body.yamsJ4
    data.yams2J4 = req.body.yams2J4
    data.yams3J4 = req.body.yams3J4
    data.chanceJ4 = req.body.chanceJ4
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