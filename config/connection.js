const Sequelize = require('sequelize');
require('dotenv').config();
let sequelize;

//this if statement will check the environment in which the server is about to run. if heroku then it wont try to run on localhost otherwise go down ))
if (process.env.JAWSDB_URL) {
  sequelize = new Sequelize(process.env.JAWSDB_URL);
} else {
  sequelize = new Sequelize(
    process.env.DB_NAME,
    'root',
    process.env.DB_PASSWORD,
    
    {
      host: 'localhost',
      dialect: 'mysql',
      port: 3306
    }
    
  );
}console.log(process.env.DB_PASSWORD)

module.exports = sequelize;