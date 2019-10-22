import React, { Component } from "react";
import StatusBar from "components/Statusbar/StatusBar";

import "./ChatRoomMain.css";

class ChatRoomMain extends Component {
  render() {
    return (
        <div className="ChatRoomMain">
          <StatusBar />
        </div>
    );
  }
  /*
    <div className="ChatRoomMain">
          <TopBar />
          <ChatRoomMenu
            sender={this.props.location.state.sender}
            chatLog={this.props.location.state.chatLog}
            id={this.props.location.state.id}
            toggle={this.props.location.state.toggle}
          />
          <ChatRoomReceiveMessage chatLog={this.props.location.state.chatLog} />
          <ChatRoomMessageBox />
        </div>
        */
}

export default ChatRoomMain;
