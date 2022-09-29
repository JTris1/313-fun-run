const { Model, DataTypes, Sequelize } = require('sequelize');
const sequelize = require('services/database');

class Registration extends Model {}

// Initialize the table connected to the attributes
Runs.init({
    user_id: {
        type: DataTypes.INTEGER,
        primaryKey: true
    },
    race_id: {
        type: DataTypes.INTEGER,
        primaryKey: true
    },
    registration_date: {
        type: DataTypes.DATE
    }
}, {
    sequelize,
    modelName: 'registration', // THIS IS THE NAME OF THE TABLE IN THE DATABASE
    tableName: 'registration',
    timestamps: false       // Ignores CREATEDAT/UPDATEDAT
});

module.exports = Registration;