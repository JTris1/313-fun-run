const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('funrun', '', '', {
    dialect: 'sqlite',
    host: './funrun.sqlite'
});

module.exports = sequelize;