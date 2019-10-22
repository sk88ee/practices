import React, { Component } from "react";
import ChatRoomMenu from "components/ChatRoom/ChatRoomMenu";
import TopBar from "components/Statusbar/TopBar";
import ChatRoomMessageBox from "components/ChatRoom/ChatRoomMessageBox";
import { CSSTransitionGroup } from "react-transition-group";
import ChatRoomReceiveMessage from "components/ChatRoom/ChatRoomReceiveMessage";

import "./ChatRoomMain.css";

class ChatRoomMain extends Component {
  render() {
    return (
      <CSSTransitionGroup
        transitionName="SliderLeft"
        transitionAppearTimeout={500}
        transitionAppear={true}
      >
        <div className="ChatRoomMain">
          <TopBar />
        </div>
      </CSSTransitionGroup>
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
