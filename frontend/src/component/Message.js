import { useState, useEffect } from 'react';
// socket.io-clientをインポートする
import { io } from "socket.io-client";
//socket.ioで通信
const socket = io("/");



function Message() {
    const [messageList, setMessageList] = useState([]);
    const [message, setMessage] = useState("");

    useEffect(() =>{
        //非同期通信
        fetch('/showMessages')
          .then((res) => res.json())
          .then((data) => setMessageList(data));
    
        //showMessageのsocket通信時
        socket.on("showMessage", (message) => {
            //stateの配列に追加
            setMessageList((messageList) => [...messageList, { message: message }]);

            //画面下までスクロール
            window.scrollTo({
                top: 10000000000,
                behavior: "smooth"
            });
        });
        
    },[]);

    //メッセージが変更された時
    function changeMessage(e) {
        setMessage(e.target.value);
    }

    //メッセージが送信された時
    function onSubmit() {
        if(message !== ""){
            socket.emit("message", message);
            setMessage("");
        }
    }

    return (
        <div class="message">
            
            <main class="container"  className="scroll">
                <div className="msgContent">
                    <div class="my-1 p-3 bg-body rounded shadow-sm">
                        <h6 class="border-bottom pb-2 mb-0">メッセージ</h6>

                        {messageList.map((messageItem) => {
                            return (
                                <div class="text-muted pt-3">
                                    <p class="pb-3 mb-0 small lh-sm border-bottom">
                                        <h5 class="mt-2"><b> { messageItem.message } </b></h5>
                                    </p>
                                </div>
                            );
                        })}
                        
                    
                    </div>
                
                </div>

                <div className="space"></div>
                
            
            </main>
            <div class="panel-footer" className="send-box">
                <div class="input-group">
                    <input type="text" value={message} onChange={changeMessage} className="input-box" class="form-control input-sm chat_input" placeholder="感謝を伝えよう" />
                    <span class="input-group-btn">
                    <button class="btn btn-primary" onClick={onSubmit}>送信</button>
                    </span>
                </div>
            </div>
            
        </div>
      
    );
  }
export default Message;