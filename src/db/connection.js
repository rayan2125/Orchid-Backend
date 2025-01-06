
import dotenv from 'dotenv';
import { Sequelize } from "sequelize";
dotenv.config()
// const { DATABASE_HOST, DATABASE_USER, DATABASE_PASSWORD, DATABASE } = process.env;
const sequelize = new Sequelize('admin_click2bite', 'click2bitedb', '1j6tSb61%', {
    dialect: 'mysql',
    host:'89.116.121.75',
   // host: '13.235.24.143',
    port:'3306',
    deprecationWarning: false,
    logging: false,

})

try {
    await sequelize.authenticate();
    console.log('Connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error.message);
  }

export default sequelize