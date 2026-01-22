const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const User = sequelize.define('User', {
    id: {
        type: DataTypes.STRING,
        primaryKey: true,
        allowNull: false,
    },
    username: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
    },
    location: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    role: {
        type: DataTypes.ENUM('super_admin', 'regional_hr', 'recruiter', 'payroll_person', 'user',),
        defaultValue: 'recruiter',
        allowNull: false,
    },
    designation: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    experience_level: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    department: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    reporting_manager: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    company: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    candidates: {
        type: DataTypes.JSON,
        allowNull: true,
        defaultValue: [], // Default to empty array
    },
}, {
    timestamps: true,
});

module.exports = User;