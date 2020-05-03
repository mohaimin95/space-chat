import React from "react";
import "./Conversation.css";
import { getStandardTime, getStandardDate } from "../../../../../utilities/DateHelper";
const Conversation = (props:any) => {
    let {
        direction="sent",
        username,
        message,
        time,
        status="sending"
    } = props;
    time = new Date(time);
    const isReceived = direction.toLowerCase()==="received";
    return (
        <div className="chat-conversations">
            <div className={"chat-conversation " + ((isReceived && " received"))}>
            <div className="chat-conversation-box">
                <div className="sender-name">{username}</div>
                <div className="sender-msg">{message}</div>
                <div className="sender-footer">
                    <div className="sender-footer-time mr-1" title={getStandardDate(time)}>{getStandardTime(time)}</div>
                    {!isReceived && <div className="sender-footer-status">{status.toLowerCase()}</div>}
                </div>

            </div>
            </div>
        </div>
    )
}

export default Conversation;