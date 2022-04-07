const mysql = require('mysql');

//mysqlに接続
const pool = mysql.createPool({
  //localでは.envファイルの値を使用,herokuではconfig setで設定
  host: process.env.MYSQL_HOST,
  user: process.env.MYSQL_USER,
  password: process.env.MYSQL_PASSWORD,
  database: process.env.MYSQL_DATABASE,
});

pool.getConnection(function(err, connection){
    if (err) throw err;
    console.log('Connected');

    //heart tableを作成
    connection.query('CREATE TABLE IF NOT EXISTS heart(id INT AUTO_INCREMENT PRIMARY KEY NOT NULL, heart_num INT NOT NULL)', function (err, result) {  
        if (err) throw err;  
        console.log('ok');  
    });

    //message tableを作成
    connection.query('CREATE TABLE IF NOT EXISTS message(id INT AUTO_INCREMENT PRIMARY KEY NOT NULL, roomId INT NOT NULL,  message VARCHAR(255) NOT NULL, createTime TIMESTAMP DEFAULT CURRENT_TIMESTAMP)', function (err, result) {  
        if (err) throw err;  
        console.log('ok');  
    });
    
});




// Export Connection
module.exports = pool;