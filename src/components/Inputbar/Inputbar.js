import React from "react";

import "./InputBar.css";
import sendImage from "assets/img-send.svg";

const InputBar = ({input, onChange, onSubmit}) => {
    return (
      <div>
        <form onSubmit={onSubmit} className="InputChatBox">
          <input onChange={onChange}
            placeHolder="메세지를 입력하세요.."
            className="InputChatMessage"
            name="submit"
            value={input}
          />
        </form>
        <form onSubmit={onSubmit} className="MailBox">
          <input
            type="image"
            className="img_send"
            src={sendImage}
            alt="Submit"
            onClick={onSubmit}
            name="submit"
            value={input}
          />
        </form>
      </div>
    );
}

export default InputBar;
