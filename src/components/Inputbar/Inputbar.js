import React, { Component } from "react";
//import ChatRoomSendMessage from "./ChatRoomSendMessage";

import "./InputBar.css";
import sendImage from "assets/img-send.svg";

class InputBar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      msg: []
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit = e => {
    var msgArray = this.state.msg;

    if (this._inputElement.value != "") {
      msgArray.push({
        text: this._inputElement.value,
        key: Date.now()
      });

      this.setState({
        msg: msgArray
      });
      this._inputElement.value = "";
    }

    e.preventDefault();
  };

  render() {
    return (
      <div>
        <form onSubmit={this.props.handleSubmit} className="InputChatBox">
          <input
            placeHolder="메세지를 입력하세요.."
            className="InputChatMessage"
            ref={a => (this._inputElement = a)}
          />
        </form>
        <form onSubmit={this.props.handleSubmit} className="MailBox">
          <input
            type="image"
            className="img_send"
            src={sendImage}
            alt="Submit"
            onClick={this.handleSubmit}
          />
        </form>
      </div>
    );
  }
}

export default InputBar;
