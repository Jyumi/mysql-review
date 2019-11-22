const db = require('./index.js');

module.exports = {
    getAllTasks: () => {
        db.query('SELECT * FROM notebook;', (err, results) => {
            if (err) {
                callback(err);
            } else {
                callback(null,  results)
            }
        })
    },

    postOneTask: ({name, task}, callback) => {
        db.query(`INSERT INTO notebook (person_name, task) VALUES ("${name}, "${task}");`, (err,result) => {
            if(err){
                callback(err)
            } else {
                callback(null, result)
            }
        })
    }
}

