import React, { Component } from "react";
import StatusBar from "components/Statusbar/StatusBar";
import RoomMenu from "components/Menu/RoomMenu";
import PictureMenu from "components/Menu/PictureMenu";
import RoomSelected from "components/Room/RoomSelected";
import InputBar from "components/Inputbar/InputBar";
import * as inputAction from "store/modules/inputbar";
import { connect } from "react-redux";
import { bindActionCreators } from 'redux';
import "./ChatRoomMain.css";


class ChatRoomMain extends Component {
  handleChange = (e) => {
    console.log(e.target.value)
    const { InputActions } = this.props;
    InputActions.updateMessage(e.target.value);
  }

  handleSubmit = (e) => {
    e.preventDefault();
    console.log("submit =" + e.target.submit.value)
    const { InputActions } = this.props;
    InputActions.sendMessage(e.target.submit.value);
    InputActions.updateMessage('');
  };

  render() {
    const { handleChange, handleSubmit } = this;
    const { sendMsg, msgList } = this.props;
  
    return (
      <div>
        <div className="ChatRoomMain">
          <StatusBar />
          <RoomMenu />
          <RoomSelected msgList={msgList}/>
        </div>
        <div>
          <InputBar input={sendMsg} onChange={handleChange} onSubmit={handleSubmit} />
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
  (state) => ({
    sendMsg: state.inputbar.get('sendMsg'),
    msgList: state.inputbar.get('msgList')
  }),
  dispatch => ({
    InputActions: bindActionCreators(inputAction, dispatch)
  })
)(ChatRoomMain);

//export default ChatRoomMain;
