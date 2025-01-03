import { Sequelize, DataTypes } from 'sequelize';

const sequelize = new Sequelize('sqlite::memory:');

const ProductPrice = sequelize.define("product_price", {
    price_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true, // Assuming auto-increment for primary key
    },
    product_id: {
        type: DataTypes.INTEGER,
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
    start_date: {
        type: DataTypes.DATEONLY,
        allowNull: false,
    },
    end_date: {
        type: DataTypes.DATEONLY,
        allowNull: false,
    },
    asf_amount: {
        type: DataTypes.FLOAT,
        allowNull: false,
    },
    asf_remarks: {
        type: DataTypes.STRING,
        allowNull: false,
    },
}, {
    timestamps: false, // Disabling Sequelize's default `createdAt` and `updatedAt`
    tableName: 'product_price', // Explicit table name
});

export default ProductPrice;
