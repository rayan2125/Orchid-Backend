import { Sequelize, DataTypes } from 'sequelize';

const sequelize = new Sequelize('sqlite::memory:');

const MembersDetails = sequelize.define("members_details", {
    member_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true, // Assuming primary key auto-increment
    },
    membership_id: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    application_id: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    application_date: {
        type: DataTypes.DATEONLY,
        allowNull: false,
    },
    login_date: {
        type: DataTypes.DATEONLY,
        allowNull: false,
    },
    member_name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    member_dob: {
        type: DataTypes.DATEONLY,
        allowNull: false,
    },
    mobile_no: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    email_id: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    member_address: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    state: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    country: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    coapplicant_name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    coa_dob: {
        type: DataTypes.DATEONLY,
        allowNull: false,
    },
    coa_mobile: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    coa_email_id: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    product_name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    offer_given: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    membership_status: {
        type: DataTypes.ENUM('active', 'deactive', 'cancelled', 'refunded'),
        allowNull: false,
    },
}, {
    timestamps: false, // Disabling Sequelize's default `createdAt` and `updatedAt`
    tableName: 'members_details', // Explicit table name
});

export default MembersDetails;
