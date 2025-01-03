import { Sequelize, DataTypes } from 'sequelize';

const sequelize = new Sequelize('sqlite::memory:');

const MemberPaymentDetails = sequelize.define("member_payment_details", {
    payment_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true, // Assuming auto-increment for primary key
    },
    mp_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    membership_id: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    product_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    payment_mode: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    payment_status: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    payment_type: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    amount: {
        type: DataTypes.FLOAT,
        allowNull: false,
    },
    cheque_date: {
        type: DataTypes.DATEONLY,
        allowNull: false,
    },
    cheque_number: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    swipe_date: {
        type: DataTypes.DATEONLY,
        allowNull: false,
    },
    card_number_4digit: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    authorization_number: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    payment_date: {
        type: DataTypes.DATEONLY,
        allowNull: false,
    },
    receipt_number: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    reference_number: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    asf_applicable: {
        type: DataTypes.ENUM('yes', 'no'),
        allowNull: false,
        defaultValue: 'no',
    },
    asf_remarks: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    asf_year: {
        type: DataTypes.INTEGER, // Sequelize uses INTEGER for year fields
        allowNull: false,
    },
    referral_benefit: {
        type: DataTypes.STRING,
        allowNull: false,
    },
}, {
    timestamps: false, // Disabling Sequelize's default `createdAt` and `updatedAt`
    tableName: 'member_payment_details', // Explicit table name
});

export default MemberPaymentDetails;
