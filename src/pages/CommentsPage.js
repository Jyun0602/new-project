// MessageBoard.js
import React, { useState } from "react";
// import './MessageBoard.css';

function MessageBoard() {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleMessageChange = (e) => {
    setMessage(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name.trim() !== "" && message.trim() !== "") {
      const newMessage = {
        name: name,
        message: message,
        time: new Date().toLocaleString(),
        replies: [],
      };
      setMessages([...messages, newMessage]);
      setName("");
      setMessage("");
    }
  };

  const handleReply = (index, replyMessage) => {
    if (name.trim() !== "" && replyMessage.trim() !== "") {
      const reply = {
        name: name,
        message: replyMessage,
        time: new Date().toLocaleString(),
      };
      const updatedMessages = [...messages];
      updatedMessages[index].replies.push(reply);
      setMessages(updatedMessages);
    }
  };

  return (
    <div className="MessageBoard">
      <form onSubmit={handleSubmit}>
        <label>
          名字:
          <input type="text" value={name} onChange={handleNameChange} />
        </label>
        <br />
        <label>
          留言:
          <textarea value={message} onChange={handleMessageChange} />
        </label>
        <br />
        <button type="submit">留言</button>
      </form>
      <div className="messages">
        {messages.map((msg, index) => (
          <div key={index} className="message">
            <p>{msg.time}</p>
            <p>
              {msg.name}: {msg.message}
            </p>
            <div className="replies">
              {msg.replies.map((reply, idx) => (
                <div key={idx} className="reply">
                  <p>{reply.time}</p>
                  <p>
                    {reply.name}: {reply.message}
                  </p>
                </div>
              ))}
            </div>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleReply(index, e.target.reply.value);
                e.target.reply.value = "";
              }}
            >
              <input type="text" name="reply" placeholder="回复留言" />
              <button type="submit">回复</button>
            </form>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MessageBoard;
