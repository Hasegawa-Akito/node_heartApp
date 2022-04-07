import { useState, useEffect } from 'react';
// socket.io-clientをインポートする
import { io } from "socket.io-client";
//socket.ioで通信
const socket = io("/");



function Heart (){
    useEffect(() =>{
        //非同期通信
        fetch('/nowHeart')
          .then((res) => res.json())
          .then((data) => document.getElementById("heart").style.transform = "scale(" + data.heart + "," + data.heart + ")");
        
        //heartのsocket通信時
        socket.on("heart", (heart) => {
          console.log(heart)
          document.getElementById("heart").style.transform = "scale(" + heart + "," + heart + ")";
        });
    },[]);
    

    return (
        <div>
            <div class="pricing-header pb-md-2 mx-auto text-center">
                <h3 class="display-6 fw-normal text-white">charged happiness!!</h3>
            </div>
            <main>
                <div class="center">
                    <i class="Heart fas fa-heart" id="heart"></i>
                </div>
                
            </main>
        </div>
    );
}
export default Heart;