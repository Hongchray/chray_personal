const mysql = require('mysql');

var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "personal_blog",
});

con.connect(function(err) {
    if (err){
        console.log(err);
    } 
    console.log("db_Connected!");
});

module.exports = con;