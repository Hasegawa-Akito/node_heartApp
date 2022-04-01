import './App.css';
import { useState,useEffect } from 'react'
// socket.io-clientをインポートする
import { io } from "socket.io-client";
import { BrowserRouter, Routes, Route } from 'react-router-dom';

//socket.ioで通信
const socket = io("http://localhost:8000");
// サーバに接続できた場合のイベント処理を定義する
socket.on("connect", () => {
  console.log(`socket.connectを出力`);
  console.log(socket.connect()); // サーバに接続できたかどうかを表示
});

function App() {
  const [message, setMessage] = useState('');
  const [heartSize, setHeartSize] = useState(1);

  useEffect(() =>{
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
    <div className="App">
      <BrowserRouter>
        <header>
        
          <div class="navbar navbar-dark bg-dark shadow-sm">
            <div class="container">
              <a href="#" class="navbar-brand d-flex align-items-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" aria-hidden="true" class="me-2" viewBox="0 0 24 24"><path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"></path><circle cx="12" cy="13" r="4"></circle></svg>
                <strong>thanksApp</strong>
              </a>
              <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarHeader" aria-controls="navbarHeader" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
              </button>
            </div>
          </div>

          <div class="pricing-header p-3 pb-md-4 mx-auto text-center">
            <h1 class="display-4 fw-normal text-white">charged happiness!!</h1>
          </div>
        </header>
        <main>
          <div class="center">
            <i class="Heart fas fa-heart" id="heart"></i>
          </div>
          
        </main>
        <p>{ message }</p>
        <button type="button" onClick={onClickButton} >close</button>
        <Routes>
          <Route path="/contact" element={<Contact />} />
          
        </Routes>
      </BrowserRouter>
    </div>
    
  );
}

function Contact() {
  return <h2>Contact</h2>;
}

export default App;