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
CONFIG.port = process.env.PORT  || '1982';
CONFIG.targetUrl = process.env.URL || 'http://localhost:1982/';

//Database level configurations
CONFIG.db_dialect = process.env.DB_DIALECT || 'mysql';
CONFIG.db_host = process.env.DB_HOST || 'localhost';
CONFIG.db_port = process.env.DB_PORT || '3306';
CONFIG.db_name = process.env.DB_NAME || 'dbname';
CONFIG.db_user = process.env.DB_USER || 'root';
CONFIG.db_password = process.env.DB_PASSWORD || 'pass';

//Token level configurations
CONFIG.jwt_encryption = process.env.JWT_ENCRYPTION || 'What are you looking for?';
CONFIG.jwt_expiration = process.env.JWT_EXPIRATION || '10000';

//App level rules and default values
CONFIG.allow_null_status = false;// if true, users dont will need a defined status
CONFIG.user_default_status = 'ativo';
CONFIG.user_status = ['ativo', 'inativo', 'suspenso'];
CONFIG.user_role = ['admin', 'analista', 'gestor', 'god'];
CONFIG.user_default_role = 'analista';
CONFIG.expense_status = ['nova', 'autorizada', 'recusada'];
CONFIG.expense_status_default = 'nova';

//Exports config as a module
module.exports = CONFIG;
