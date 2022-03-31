import './App.css';
import { useState,useEffect } from 'react'
// socket.io-clientをインポートする
import { io } from "socket.io-client";
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  const [message, setMessage] = useState('');
  useEffect(() =>{
    fetch('/api')
      .then((res) => res.json())
      .then((data) => setMessage(data.message));
  },[]);

  function onClickButton(){
    //socket.ioで通信
    const socket = io("http://localhost:8000");
    // サーバに接続できた場合のイベント処理を定義する
    socket.on("connect", () => {
      console.log(`socket.connectを出力`);
      console.log(socket.connect()); // サーバに接続できたかどうかを表示
    });
  }

  

  return (
    <BrowserRouter>
      <div className="App">
        <h1>フロントエンドnnnn</h1>
        <p>{ message }</p>
        <button type="button" onClick={onClickButton} >close</button>
      </div>
      <Routes>
        <Route path="/contact" element={<Contact />} />
        
      </Routes>
    </BrowserRouter>
    
  );
}

function Contact() {
  return <h2>Contact</h2>;
}

export default App;