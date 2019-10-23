import React, { Component } from "react";
import StatusBar from "components/Statusbar/StatusBar";
import RoomMenu from "components/Menu/RoomMenu";
import PictureMenu from "components/Menu/PictureMenu";
import RoomSelected from "components/Room/RoomSelected";
import InputBar from "components/Inputbar/InputBar";
import * as inputAction from "store/modules/InputBar";
import { connect } from "react-redux";
import "./ChatRoomMain.css";
import { bindActionCreators } from "../../../../../../../../AppData/Local/Microsoft/TypeScript/3.6/node_modules/redux";

class ChatRoomMain extends Component {
  handleChange = (e) => {
    console.log(e.target.value);
    const { InputActions } = this.props;
    InputActions.updateMessage(e.target.value);
  }

  handleSubmit = e => {
    console.log(e.target.value);
    const { InputActions } = this.props;
    InputActions.sendMessage(e.target.value);
  };

  render() {
    return (
      <div>
        <div className="ChatRoomMain">
          <StatusBar />
          <RoomMenu />
        </div>
        <div>
          <InputBar onChange={this.handleChange} onSubmit={this.handleSubmit} />
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

export default connect(
  ({inputbar}) => ({
    msg: inputbar.sendMsg
  }),
  dispatch => ({
    InputActions: bindActionCreators(inputAction, dispatch)
  })
)(ChatRoomMain);

//export default ChatRoomMain;
