import React, { Component } from "react";
import StatusBar from "components/Statusbar/StatusBar";
import ListMenu from "components/Menu/ListMenu";
import RoomList from "components/Room/RoomList";

import "./ChatListMain.css";

class ChatListMain extends Component {
  
  render() {
    return (
        <div className="ChatMain">
          <StatusBar />
          <ListMenu />
          <RoomList />
        </div>
    );
  
  }

  /*
  <div className="ChatMain">
  <TopBar />
  <ChatListMenu />
  <LoadChatLog />
  </div>
  */
}

export default ChatListMain;
