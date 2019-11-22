const mysql = require('mysql');

const connection = mysql.createconnection({
    user: 'root',
    password: '',
    database: 'ReviewDB'
})
// TODO: establish connection
module.exports = connection