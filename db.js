const { Sequelize, DataTypes } = require('sequelize');
const path = require('path')

const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: path.join(__dirname, 'db.sqlite')
});

const Partie = sequelize.define('Partie',{
    nombreJoueurs: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue:1
    },
    nameJ1 : {
        type: DataTypes.STRING,
        allowNull: false,
        defaultValue:'Joueur 1'
    },
    nombre1J1: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue:0
    },
    nombre2J1: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue:0
    },
    nombre3J1: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue:0
    },
    nombre4J1: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue:0
    },
    nombre5J1: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue:0
    },
    nombre6J1: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue:0
    },
    sommeJ1: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue:0
    },
    brelanJ1: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue:0
    },
    carreJ1: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue:0
    },
    fullJ1: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue:0
    },
    psJ1: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue:0
    },
    gsJ1: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue:0
    },
    yamsJ1: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue:0
    },
    yams2J1: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue:0
    },
    yams3J1: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue:0
    },
    chanceJ1: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue:0
    },
    totalJ1: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue:0
    },
    nameJ2 : {
        type: DataTypes.STRING,
        allowNull: false,
        defaultValue:'Joueur 2'
    },
    nombre1J2: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue:0
    },
    nombre2J2: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue:0
    },
    nombre3J2: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue:0
    },
    nombre4J2: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue:0
    },
    nombre5J2: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue:0
    },
    nombre6J2: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue:0
    },
    sommeJ2: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue:0
    },
    brelanJ2: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue:0
    },
    carreJ2: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue:0
    },
    fullJ2: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue:0
    },
    psJ2: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue:0
    },
    gsJ2: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue:0
    },
    yamsJ2: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue:0
    },
    yams2J2: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue:0
    },
    yams3J2: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue:0
    },
    chanceJ2: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue:0
    },
    totalJ2: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue:0
    },
    nameJ3 : {
        type: DataTypes.STRING,
        allowNull: false,
        defaultValue:'Joueur 3'
    },
    nombre1J3: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue:0
    },
    nombre2J3: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue:0
    },
    nombre3J3: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue:0
    },
    nombre4J3: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue:0
    },
    nombre5J3: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue:0
    },
    nombre6J3: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue:0
    },
    sommeJ3: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue:0
    },
    brelanJ3: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue:0
    },
    carreJ3: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue:0
    },
    fullJ3: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue:0
    },
    psJ3: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue:0
    },
    gsJ3: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue:0
    },
    yamsJ3: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue:0
    },
    yams2J3: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue:0
    },
    yams3J3: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue:0
    },
    chanceJ3: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue:0
    },
    totalJ3: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue:0
    },
    nameJ4 : {
        type: DataTypes.STRING,
        allowNull: false,
        defaultValue:'Joueur 4'
    },
    nombre1J4: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue:0
    },
    nombre2J4: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue:0
    },
    nombre3J4: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue:0
    },
    nombre4J4: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue:0
    },
    nombre5J4: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue:0
    },
    nombre6J4: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue:0
    },
    sommeJ4: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue:0
    },
    brelanJ4: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue:0
    },
    carreJ4: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue:0
    },
    fullJ4: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue:0
    },
    psJ4: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue:0
    },
    gsJ4: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue:0
    },
    yamsJ4: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue:0
    },
    yams2J4: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue:0
    },
    yams3J4: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue:0
    },
    chanceJ4: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue:0
    },
    totalJ4: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue:0
    }

})

sequelize.sync()
    .then(() => {
        console.log("synchronisation terminée.")
    })

module.exports = {
    sequelize: sequelize,
    Partie: Partie
  }