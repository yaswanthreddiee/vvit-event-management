const { DataTypes } = require('sequelize');
const sequelize = require('./db'); // Ensure correct path

const Events = sequelize.define('Event',  {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    name: { type: DataTypes.STRING, allowNull: false },
    date: { type: DataTypes.DATE, allowNull: false },
    location: { type: DataTypes.STRING, allowNull: false }
});

module.exports = Events; // Ensure it is exported
