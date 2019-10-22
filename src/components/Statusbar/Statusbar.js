import React, { Component } from "react"
import "./StatusBar.css"

class StatusBar extends Component {

    render() {
        return (
            <div className="StatusBar">
                <div className="Low-Bar"></div>
                <div className="Middle-Bar"></div>
                <div className="Top-Bar"></div>
                <div className="Empty-Bar"></div>
                <div className="Carrier" >Carrier</div>
                <time>1:20 PM</time>
                <div className="BatteryPercent">100%</div>
                <div className="Battery"></div>
                <div className="Battery-final"></div>
            </div>
        );
    }

}

export default StatusBar;