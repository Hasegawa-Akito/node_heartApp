import { useState, useEffect } from 'react';

function Message() {
    let [messageList, setMessages] = useState([]);
    useEffect(() =>{
        //非同期通信
        fetch('/showMessages')
          .then((res) => res.json())
          .then((data) => setMessages(data))
        
        
    },[]);

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

                
            
            </main>
            <div class="panel-footer" className="send-box">
                <div class="input-group">
                    <input type="text" className="input-box" class="form-control input-sm chat_input" placeholder="感謝を伝えよう" />
                    <span class="input-group-btn">
                    <button class="btn btn-primary">送信</button>
                    </span>
                </div>
            </div>
        </div>
      
    );
  }
export default Message;