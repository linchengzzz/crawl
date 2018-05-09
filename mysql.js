var mysql = require('mysql');
var connection = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'0103',
    database:'crawl'
})
//连接数据库
connection.connect();
exports.connection = connection;
/*
connection.query('select * from category',function(err,result){
    console.log(result);
});*/
