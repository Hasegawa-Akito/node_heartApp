import { useState, useEffect } from 'react';
// socket.io-clientをインポートする
import { io } from "socket.io-client";
//socket.ioで通信
const socket = io("/");

// サーバに接続できた場合のイベント処理を定義する
socket.on("connect", () => {
  console.log(`socket.connectを出力`);
  console.log(socket.connect()); // サーバに接続できたかどうかを表示
});

function Heart (){
    useEffect(() =>{
        fetch('/nowHeart')
          .then((res) => res.json())
          .then((data) => document.getElementById("heart").style.transform = "scale(" + data.heart + "," + data.heart + ")");
        
        socket.on("heart", (heart) => {
          console.log(heart)
          document.getElementById("heart").style.transform = "scale(" + heart + "," + heart + ")";
        });
    },[]);
    
      
      
    
    function onClickButton(){
        socket.emit("heartNum", 1);

    // setHeartSize(heartSize+1);
    // document.getElementById("heart").style.transform = "scale(" + heartSize + "," + heartSize + ")";
    }
    
    return (
        <div>
            <main>
                <div class="center">
                    <i class="Heart fas fa-heart" id="heart"></i>
                </div>
            </main>
            <button type="button" onClick={onClickButton} >close</button>
        </div>
    );
}
export default Heart;