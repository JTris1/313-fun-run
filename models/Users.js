const { Model, DataTypes, Sequelize } = require('sequelize');
const sequelize = require('services/database');

class Users extends Model {}

// Initialize the table connected to the attributes
Users.init({
    first_name: {
        type: DataTypes.STRING
    },
    last_name: {
        type: DataTypes.STRING
    },
    email: {
        type: DataTypes.STRING
    },
    gender: {
        type: DataTypes.STRING
    }
}, {
    sequelize,
    modelName: 'users', // THIS IS THE NAME OF THE TABLE IN THE DATABASE
    tableName: 'users',
    timestamps: false       // Ignores CREATEDAT/UPDATEDAT
});

module.exports = Users;