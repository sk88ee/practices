import React, { Component } from "react";
import { Map, List } from 'immutable';

import "./RoomSelected.css";
import sendImage from "assets/img-send.svg";

const RoomSelected = ({msgList}) => {
    console.log(msgList);
    const receiveMsg = msgList.map(
        recvMsg => {
            const { id, data } = recvMsg.toJS();
            return(
                <div className="SendChatBox">
                    <div className="SendChatMessage">{data}</div>
                </div>
            )
        }
    )
    console.log(receiveMsg);
    return (
        <div>{receiveMsg}</div>
    );
};

RoomSelected.defaultProps = {
  msgList: List()
};

export default RoomSelected;
