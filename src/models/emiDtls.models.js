import { Sequelize, DataTypes } from 'sequelize';

const sequelize = new Sequelize('sqlite::memory:');

const EmiDetails = sequelize.define("emi_details", {
    emi_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true, // Assuming this is auto-increment
    },
    mp_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    membership_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    emi_amount: {
        type: DataTypes.FLOAT,
        allowNull: false,
    },
    emi_tenure: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    emi_start_date: {
        type: DataTypes.DATEONLY,
        allowNull: false,
    },
    emi_end_date: {
        type: DataTypes.DATEONLY,
        allowNull: false,
    },
    emi_mode: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    cheque_cc_number_from_to: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    expiry_date: {
        type: DataTypes.DATEONLY,
        allowNull: false,
    },
}, {
    timestamps: false, // Disabling Sequelize's default `createdAt` and `updatedAt`
    tableName: 'emi_details', // Explicit table name
});

export default EmiDetails;
