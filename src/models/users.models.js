import { Sequelize, DataTypes } from 'sequelize';

const sequelize = new Sequelize('sqlite::memory:');

const Users = sequelize.define("users", {
    user_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true, // Assuming you want auto-increment for user_id
    },
    user_name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    user_email: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            isEmail: true, // Ensures valid email format
        },
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    u_password: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    user_status: {
        type: DataTypes.ENUM('active', 'deactive', 'deleted'),
        allowNull: false,
    },
    reporting_to: {
        type: DataTypes.INTEGER,
        allowNull: true, // If it can be null when there's no reporting manager
        comment: 'If reporting to someone, add user_id of reporting manager',
    },
    added_date: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: DataTypes.NOW, 
    },
}, {
    timestamps: false, 
    tableName: 'users', 
});

export default Users;
