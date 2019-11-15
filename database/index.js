const mysql = require('mysql');

// TODO: establish connection
var db = mysql.createConnection({ //establishes connection
    user: 'root',
    password: '',
    database: 'ReviewDB'
});

db.connect(function(err){ //test connection
    if(err) {
        console.error('error connecting: ' + err.stack);
        return
    }

    console.log('connected to DB')
});

module.exports = db; //exports this for use with anything else node.js related