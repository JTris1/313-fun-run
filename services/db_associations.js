const Run = require('models/Run');
const User = require('models/User');
const Registration = require('models/Registration');

const setAssociations = function() {
    // Define many to many relationship through Registration model
    //  No need to import Sequelize as it is being imported through the model imports
    Run.belongsToMany(User, {
        through: Registration,
        foreignKey: 'user_id', // The table field that relates to the User model
        otherKey: 'race_id' // The table field that relates to the Run model
    });

    // If I need the inverse, just reverse the relationship
    // Example:
    User.belongsToMany(Run, {
        through: Registration,
        foreignKey: 'race_id', // The table field that relates to the Run model
        otherKey: 'user_id' // The table field that relates to the User model
    });
}

module.exports = setAssociations;