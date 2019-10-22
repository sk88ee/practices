import React, { Component } from "react";
import { CSSTransitionGroup } from "react-transition-group";
import StatusBar from "components/Statusbar/StatusBar";
import ChatListMenu from "ChatListMenu";
import LoadChatLog from "LoadChatLog";

import "./ChatListMain.css";

class ChatListMain extends Component {
  render() {
    return (
      <CSSTransitionGroup
        transitionName="SliderRight"
        transitionAppearTimeout={500}
        transitionAppear={true}
      >
        <div className="ChatMain">
          <StatusBar />
        </div>
      </CSSTransitionGroup>
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
