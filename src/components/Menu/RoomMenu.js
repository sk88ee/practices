import React, { Component } from "react";
import { Link } from "react-router-dom";
import PictureMenu from "./PictureMenu";

import "./RoomMenu.css";
import backImage from "assets/img-back.svg";
import uploadImage from "assets/img-upload.svg";
import searchImage from "assets/img-search.svg";

class RoomMenu extends Component {

    render() {
        return (
            <div>
                <div className="ChatRoomMenu">
                    <Link to="/">
                        <img src={backImage} className="img_back" alt="img-back" />
                    </Link>
                    <div className="ChatSender">{this.props.sender}</div>
                    <Link to={{
                        pathname: "/chatRoom/" + this.props.id,
                        state: {
                            sender: this.props.sender,
                            chatLog: this.props.chatLog,
                            toggle: this.props.toggle ? false : true
                        }
                    }}>
                        <img src={uploadImage} className="img_upload" alt="img-upload" />
                    </Link>
                    <img src={searchImage} className="img_search" alt="img-search" />
                </div>
                {this.props.toggle ?
                    <PictureMenu />
                    : null}
            </div>
        );
    }

}

export default RoomMenu;