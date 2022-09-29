const { Model, DataTypes, Sequelize } = require('sequelize');
const sequelize = require('services/database');

class Run extends Model {}

// Initialize the table connected to the attributes
Run.init({
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
    tableName: 'runs',
    timestamps: false       // Ignores CREATEDAT/UPDATEDAT
});

module.exports = Run;