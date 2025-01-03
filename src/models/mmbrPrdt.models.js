import { Sequelize, DataTypes } from 'sequelize';

const sequelize = new Sequelize('sqlite::memory:');

const MembershipProduct = sequelize.define("membership_product", {
    mp_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true, // Assuming primary key auto-increment
    },
    member_id: {
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
    product_name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    product_tenure: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    product_price: {
        type: DataTypes.FLOAT,
        allowNull: false,
    },
    net_price: {
        type: DataTypes.FLOAT,
        allowNull: false,
    },
    dp_amount_paid: {
        type: DataTypes.FLOAT,
        allowNull: false,
    },
    net_dp_amount_paid: {
        type: DataTypes.FLOAT,
        allowNull: false,
    },
    dp_percentage: {
        type: DataTypes.FLOAT(5, 2),
        allowNull: false,
    },
    excess_payment_pp: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    offer_applicable: {
        type: DataTypes.ENUM('yes', 'no'),
        allowNull: false,
    },
    offer_details: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    offer_remarks: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    is_bonus_night: {
        type: DataTypes.ENUM('yes', 'no'),
        allowNull: false,
    },
    bonus_night: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    welcome_start_date: {
        type: DataTypes.DATEONLY,
        allowNull: false,
    },
    welcome_end_date: {
        type: DataTypes.DATEONLY,
        allowNull: false,
    },
    welcome_status: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    welcome_remark: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    welcome_kit_shared: {
        type: DataTypes.ENUM('yes', 'no'),
        allowNull: false,
    },
    kit_shared_date: {
        type: DataTypes.DATEONLY,
        allowNull: false,
    },
    maf_soft_copy_received: {
        type: DataTypes.ENUM('yes', 'no'),
        allowNull: false,
    },
    maf_hard_copy_received: {
        type: DataTypes.ENUM('yes', 'no'),
        allowNull: false,
    },
    maf_number: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    is_kyc: {
        type: DataTypes.ENUM('yes', 'no'),
        allowNull: false,
    },
    kyc_doc_type: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    kyc_doc_upload: {
        type: DataTypes.STRING,
        allowNull: false,
    },
}, {
    timestamps: false, // Disabling Sequelize's default `createdAt` and `updatedAt`
    tableName: 'membership_product', // Explicit table name
});

export default MembershipProduct;
