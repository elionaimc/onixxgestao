/*
* @author Elionai Moura Cordeiro
* @version 1.0.0
* @description Global configurations
*/

//instatiate environment variables
require('dotenv').config();
//Make this global to use all over the application
let CONFIG = {}

//App level configurations
CONFIG.app = process.env.APP   || 'dev';
CONFIG.port = process.env.PORT  || '3000';
CONFIG.targetUrl = process.env.URL || 'http://localhost:3000/';

//Database level configurations
CONFIG.db_dialect = process.env.DB_DIALECT || 'mysql';
CONFIG.db_host = process.env.DB_HOST || 'localhost';
CONFIG.db_port = process.env.DB_PORT || '3306';
CONFIG.db_name = process.env.DB_NAME || 'name';
CONFIG.db_user = process.env.DB_USER || 'root';
CONFIG.db_password = process.env.DB_PASSWORD || 'db-password';

//Token level configurations
CONFIG.jwt_encryption = process.env.JWT_ENCRYPTION || 'What Are You Looking For?';
CONFIG.jwt_expiration = process.env.JWT_EXPIRATION || '10000';

//Exports config as a module
module.exports = CONFIG;
