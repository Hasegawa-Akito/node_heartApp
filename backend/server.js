const express = require("express");
const app = express();
const path = require('path');
const http = require("http");
const server = http.createServer(app);

require('dotenv').config();

//本番環境はサーバーの環境変数process.env.PORT、ローカルは8000
const port = process.env.PORT || 8000;


//'./database/connection'でmysqlと接続を行う
const pool = require('./database/connection');



//react(frontend)のbuildの中のhtmlファイルを表示するため
app.use(express.static(path.join(__dirname, '../frontend/build')));

// 別オリジンからのアクセスを許可する（CORSモジュール利用）
const cors = require("cors");
app.use(cors());


app.get("/nowHeart", (req, res) => {
    
    pool.getConnection(function(err, connection){

        connection.query("select * from heart", function (err, results, fields) {  
            if (err) throw err;
            
            res.json({ heart: results[0].heart_num });
            
        });

    });

});

app.get("/showMessages", (req, res) => {
    
    pool.getConnection(function(err, connection){

        connection.query("select * from message", function (err, results, fields) {  
            if (err) throw err;
            
            res.send(results);
            
        });

    });
});

//react(frontend)のindex.htmlが表示されるようにする
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname,'../frontend/build/index.html'));
});


// サーバーオブジェクトsocketioを作成する
const { Server } = require("socket.io");
const io = new Server(server, {
    cors: {                      
        origin: "*",
        methods: ["GET", "POST"],
    },
});

// ブラウザから接続されたときの処理を定義する
io.on("connection", (socket) => { // ブラウザから接続されたときの処理
    
    console.log("a user connected");

    socket.on("disconnect", () => { // ブラウザが切断したときの処理
        console.log("user disconnected");
    });

    socket.on("heartNum", (heartNum) => {
        connection.query("select * from heart", function (err, results, fields) {  
            if (err) throw err;
            const heart_num = results[0].heart_num + heartNum;
            
            connection.query(
                'UPDATE heart SET heart_num = ? WHERE id = 1', [heart_num], function(err, results) {
                    if (err) throw err;
                    io.emit("heart", heart_num);
    
                }
            );
        });
        
        
        
    });
});

server.listen(port, () => {
    console.log("listen on 8000");
});