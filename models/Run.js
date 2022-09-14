const { Model, DataTypes, Sequelize } = require('sequelize');
const sequelize = require('services/database');

class Runs extends Model {}

// Initialize the table connected to the attributes
Runs.init({
    date: {
        type: DataTypes.STRING
    },
    name: {
        type: DataTypes.STRING
    },
    run_type: {
        type: DataTypes.STRING
    },
    url: {
        type: DataTypes.STRING
    },
    city: {
        type: DataTypes.STRING
    },
    state: {
        type: DataTypes.STRING
    }
}, {
    sequelize,
    modelName: 'runs', // THIS IS THE NAME OF THE TABLE IN THE DATABASE
    timestamps: false       // Ignores CREATEDAT/UPDATEDAT
});

module.exports = Runs;