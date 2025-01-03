import { Sequelize, DataTypes } from 'sequelize';

const sequelize = new Sequelize('sqlite::memory:');

const ProductMaster = sequelize.define("product_master", {
    product_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true, // Assuming auto-increment for primary key
    },
    product_name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    tenure_yrs: {
        type: DataTypes.INTEGER,
        allowNull: false,
        comment: 'Tenure in years',
    },
    days: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    nights: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    applied_for: {
        type: DataTypes.ENUM('domestic', 'international', 'both'),
        allowNull: false,
    },
    specific_reason: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    asf_applicable: {
        type: DataTypes.ENUM('yes', 'no'),
        allowNull: false,
    },
    status: {
        type: DataTypes.ENUM('active', 'deactive', 'deleted'),
        allowNull: false,
    },
    added_by: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    added_date: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: DataTypes.NOW, // Default to the current timestamp
    },
    modified_by: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    modified_date: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: DataTypes.NOW, // Default to the current timestamp
        onUpdate: DataTypes.NOW, // Automatically updates on modification
    },
}, {
    timestamps: false, // Disabling Sequelize's default `createdAt` and `updatedAt`
    tableName: 'product_master', // Explicit table name
});

export default ProductMaster;
