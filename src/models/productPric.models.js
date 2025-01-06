import { Sequelize, DataTypes } from 'sequelize';
import sequelize from '../db/connection.js';



const ProductPrice = sequelize.define("ov_product_price", {
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
}
);

export default ProductPrice;
