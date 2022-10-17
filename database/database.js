const Sequelize = require('sequelize');

const connection = new Sequelize('pergunt','root','@9brum1#',{
    host:'localhost',
    dialect:'mysql'
});

module.exports = connection;