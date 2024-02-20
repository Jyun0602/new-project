// 留言板
import React, { Component, useState } from "react";
import "./MessageBoard.css";

const MessageBoard = () => {
  // 定義留言資料的狀態
  const [messages, setMessages] = useState([]);
  // 定義使用者輸入的留言作者的狀態
  const [author, setAuthor] = useState("");
  // 定義使用者輸入的留言內容的狀態
  const [inputMessage, setInputMessage] = useState("");
  // 定義使用者輸入的回覆作者的狀態
  const [replyAuthor, setReplyAuthor] = useState("");
  // 定義使用者輸入的回覆內容的狀態
  const [replyMessage, setReplyMessage] = useState("");
  // 定義使用者選擇的圖片檔的狀態
  const [selectedImage, setSelectedImage] = useState(null);

  // 處理使用者提交留言的函數
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(e.target);

    // 驗證是否填寫留言內容
    if (!inputMessage.trim() && !selectedImage) {
      alert("Please enter a message or select an image file");
      return;
    }
    // 驗證是否選擇了圖片檔
    if (selectedImage) {
      // 驗證圖片檔案類型
      const allowedTypes = ["image/jpeg", "image/png"];
      if (!allowedTypes.includes(selectedImage.type)) {
        alert("Please select a valid image file (jpg or png)");
        return;
      }
    }
    // 創建新的留言物件
    const newMessage = {
      id: new Date().getTime(), // 使用當前時間戳記作為留言的唯一識別碼
      content: inputMessage,
      author: author || "Anonymous", // 如果作者為空，則默認為匿名
      timestamp: new Date().toLocaleString(), // 記錄留言的時間戳記
      likes: 0, // 初始化點讚數為0
      replies: [], // 初始化回覆列表為空
      image: selectedImage, // 保存使用者選擇的圖片
    };
    // 更新留言狀態，將新的留言添加到留言列表中
    setMessages([...messages, newMessage]);
    // 清空輸入框和選擇的圖片
    setInputMessage("");
    setAuthor("");
    setSelectedImage(null);
    setUrl(""); // 清除已選擇的圖片
  };
  // const input = document.querySelector("#newMessage");
  // const list = document.querySelector("#new Date().getTime(), ");
  // form.addEventListener("submit", function (e) {
  //   e.preventDefault();
  //   const newMessage = input.value;
  //   const newLI = document.createElement("LI");
  //   newLI.innerText = newMessage;
  //   list.append(newLI);
  // });

  // 處理使用者提交回覆的函數
  const handleReply = (e, messageId) => {
    e.preventDefault();

    // 在留言清單中找到對應的留言對象
    const messageIndex = messages.findIndex(
      (message) => message.id === messageId
    );
    // 創建新的回覆物件
    const newReply = {
      id: new Date().getTime(), // 使用當前時間戳記作為回覆的唯一識別碼
      content: replyMessage,
      author: replyAuthor || "Anonymous", // 如果回覆作者為空，則默認為匿名
      timestamp: new Date().toLocaleString(), // 記錄回覆的時間戳記
      likes: 0, // 初始化回覆點讚數為0
    };
    // 更新留言狀態，將新的回覆添加到對應留言的回覆列表中
    const updatedMessages = [...messages];
    updatedMessages[messageIndex].replies.push(newReply);
    setMessages(updatedMessages);
    // 清空回覆輸入框和回覆作者輸入框
    setReplyMessage("");
    setReplyAuthor("");

    return (
      // <Component />
      <div>
        <h3 className="replytime">{newReply.timestamp}</h3>
        <h3 className="replyname">{newReply.author}</h3>
        <h3 className="replycontent">{newReply.content}</h3>
        <h3 className="replylike">{newReply.like}</h3>
      </div>
      // <ul id="new Date().getTime(), ">
    );
  };

  // 處理使用者選擇圖片的函數
  // const handleImageChange = (e) => {
  //   const file = e.target.files[0];
  //   resizeImage(file, 500, 350, (resizedImage) => {
  //     setSelectedImage(resizedImage);
  //   });
  // };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    resizeImage(file, 800, 200, (resizedImage) => {
      setSelectedImage(resizedImage);
      const objectUrl = URL.createObjectURL(resizedImage); // 创建 Object URL
      setUrl(objectUrl); // 更新 url 状态
    });
  };

  // 圖片尺寸調整函數
  const resizeImage = (file, maxWidth, maxHeight, callback) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = function (event) {
      const img = new Image();
      img.src = event.target.result;
      img.onload = function () {
        let width = img.width;
        let height = img.height;

        // 如果圖片尺寸小於目標尺寸，直接返回原圖
        if (width <= maxWidth && height <= maxHeight) {
          callback(file);
          return;
        }

        let newWidth, newHeight;
        if (width > height) {
          newWidth = maxWidth;
          newHeight = Math.floor(height * (maxWidth / width));
        } else {
          newHeight = maxHeight;
          newWidth = Math.floor(width * (maxHeight / height));
        }

        const canvas = document.createElement("canvas");
        canvas.width = newWidth;
        canvas.height = newHeight;
        const ctx = canvas.getContext("2d");
        ctx.drawImage(this, 0, 0, newWidth, newHeight);

        canvas.toBlob((blob) => {
          const resizedFile = new File([blob], file.name, {
            type: "image/jpeg", // 這裡可以根據需要修改圖片類型
            lastModified: Date.now(),
          });
          callback(resizedFile);
        }, "image/jpeg");
      };
    };
  };

  // 處理使用者點讚留言的函數
  const handleLikeMessage = (messageId) => {
    const updatedMessages = messages.map((message) => {
      if (message.id === messageId) {
        return { ...message, likes: message.likes + 1 };
      }
      return message;
    });
    setMessages(updatedMessages);
  };

  // 處理使用者點讚回覆的函數
  const handleLikeReply = (messageId, replyId) => {
    const updatedMessages = messages.map((message) => {
      if (message.id === messageId) {
        const updatedReplies = message.replies.map((reply) => {
          if (reply.id === replyId) {
            return { ...reply, likes: reply.likes + 1 };
          }
          return reply;
        });
        return { ...message, replies: updatedReplies };
      }
      return message;
    });
    setMessages(updatedMessages);
  };
  const [url, setUrl] = useState("");
  return (
    <div className="message-board">
      <h1>Message Board</h1>
      {/* 提交留言的表單 */}
      <form onSubmit={handleSubmit} className="comment-form">
        <input
          type="text"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
          placeholder="Your Name"
          className="comment-name"
        />
        <br />
        <textarea
          className="textarea-size"
          value={inputMessage}
          onChange={(e) => setInputMessage(e.target.value)}
          placeholder="Enter your message"
          required
        ></textarea>
        <br />
        {/* 上傳圖片的表單 */}

        {/* <input
          type="file"
          onChange={handleImageChange}
          accept="image/jpeg, image/png"

        /> */}

        <label className="wrapper" htmlFor="input">
          {url ? (
            <img
              src={url}
              alt=""
              // width="400"
              // height="200"
              className="uploaded-image"
            />
          ) : (
            <div className="description">上傳圖片</div>
          )}
          <input
            type="file"
            accept="image/jpeg, image/png"
            style={{ display: "none" }}
            id="input"
            onChange={(e) => {
              const file = e.target.files[0];
              if (file) {
                resizeImage(file, 500, 200, (resizedImage) => {
                  setSelectedImage(resizedImage);
                  const objectUrl = URL.createObjectURL(resizedImage);
                  setUrl(objectUrl); // 更新 url 状态
                });
              }
            }}
          />

          {/* 顯示上傳的圖像 */}
          {/* {url && <img src={url} alt="Uploaded" className="showimage" />} */}
        </label>

        <br />
        {/* 提交按鈕 */}

        <button type="submit" className="submit">
          Submit
        </button>
      </form>
      {/* 顯示留言清單 */}
      <ul className="newreply">
        {messages.map((message) => (
          <li key={message.id}>
            <strong className="newreply-text">{message.author}</strong>:{" "}
            {message.content} ({message.timestamp}){/* 顯示圖片 */}
            {message.image && (
              <img
                src={URL.createObjectURL(message.image)}
                alt="Uploaded"
                className="showimage"
              />
            )}
            {/* 顯示點讚數 */}
            <button
              onClick={() => handleLikeMessage(message.id)}
              className="submit-like1"
            >
              Like ({message.likes})
            </button>
            {/* 顯示回覆清單 */}
            <ul className="reply-mesbox">
              {message.replies.map((reply) => (
                <li key={reply.id} style={{ marginBottom: "10px" }}>
                  <strong className="reply-mes">
                    {reply.author}:{reply.content}{" "}
                  </strong>
                  ({reply.timestamp}){/* 顯示回覆點讚數 */}
                  <button
                    onClick={() => handleLikeReply(message.id, reply.id)}
                    className="submit"
                  >
                    Like ({reply.likes})
                  </button>
                </li>
              ))}
            </ul>
            {/* function myFunction() {
                const element = document.getElementById("myDIV");
                element.classList.add("reply-mes");
            } */}
            {/* const newMessageElement = document.getElementById(newMessage.id); if
            (newMessageElement){" "}
            {
              newMessageElement.classList.add("reply-mes") // 替换 "yourClassName" 为您想要添加的类名
            } */}
            {/* 回覆留言的表單 */}
            <form
              onSubmit={(e) => handleReply(e, message.id)}
              className="comment-reply"
            >
              <input
                type="text"
                value={replyAuthor}
                onChange={(e) => setReplyAuthor(e.target.value)}
                placeholder="Your Name (Optional)"
              />
              <br />
              <input
                type="text"
                value={replyMessage}
                onChange={(e) => setReplyMessage(e.target.value)}
                placeholder="Reply to this message"
                required
              />
              <button
                style={{ width: "84px", margin: "auto" }}
                type="submit"
                className="submit"
              >
                Reply
              </button>
            </form>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MessageBoard;
