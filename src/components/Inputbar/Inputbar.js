import React, { Component } from "react";
//import ChatRoomSendMessage from "./ChatRoomSendMessage";

import "./InputBar.css";
import sendImage from "assets/img-send.svg";

const InputBar = ({handleChange, handleSubmit}) => {
    return (
      <div>
        <form onSubmit={handleSubmit} className="InputChatBox">
          <input onChange={handleChange}
            placeHolder="메세지를 입력하세요.."
            className="InputChatMessage"
            //ref={a => (this._inputElement = a)}
          />
        </form>
        <form onSubmit={handleSubmit} className="MailBox">
          <input
            type="image"
            className="img_send"
            src={sendImage}
            alt="Submit"
            onClick={handleSubmit}
          />
        </form>
      </div>
    );
}

export default InputBar;
