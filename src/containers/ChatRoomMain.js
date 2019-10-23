import React, { Component } from "react";
import StatusBar from "components/Statusbar/StatusBar";
import RoomMenu from "components/Menu/RoomMenu";
import PictureMenu from "components/Menu/PictureMenu";
import RoomSelected from "components/Room/RoomSelected";
import InputBar from "components/Inputbar/InputBar";

import "./ChatRoomMain.css";

class ChatRoomMain extends Component {
  handleSubmit = msg => {

  };

  render() {
    return (
        <div>
        <div className="ChatRoomMain">
          <StatusBar />
          <RoomMenu />
        </div>
        <div>
          <InputBar onSubmit={this.handleSubmit} />
        </div>
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
