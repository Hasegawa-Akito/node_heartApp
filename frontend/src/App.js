import './App.css';
import { useState,useEffect } from 'react'
// socket.io-clientをインポートする
import { io } from "socket.io-client";

function App() {
  const [message, setMessage] = useState('');
  useEffect(() =>{
    fetch('/api')
      .then((res) => res.json())
      .then((data) => setMessage(data.message));
  },[]);

  //socket.ioで通信
  const socket = io("http://localhost:8000");
  // サーバに接続できた場合のイベント処理を定義する
  socket.on("connect", () => {
    console.log(`socket.connectを出力`);
    console.log(socket.connect()); // サーバに接続できたかどうかを表示
  });

  return (
    <div className="App">
      <h1>フロントエンドnnnn</h1>
      <p>{ message }</p>
    </div>
  );
}

export default App;