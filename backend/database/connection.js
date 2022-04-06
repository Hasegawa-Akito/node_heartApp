const mysql = require('mysql');

//mysqlに接続
const connection = mysql.createConnection({
  //localでは.envファイルの値を使用,herokuではconfig setで設定
  host: process.env.MYSQL_HOST,
  user: process.env.MYSQL_USER,
  password: process.env.MYSQL_PASSWORD,
  database: process.env.MYSQL_DATABASE
});

connection.connect(function(err) {
    if (err) throw err;
    console.log('Connected');
    //tableを作成
    connection.query('CREATE TABLE IF NOT EXISTS heart(id INT AUTO_INCREMENT PRIMARY KEY NOT NULL, heart_num INT NOT NULL)', function (err, result) {  
        if (err) throw err;  
        console.log('ok');  
    });

});

// Export Connection
module.exports = connection;