import React from "react";
import "./ChatFooter.css";
const ChatFooter = (props: any) => {
    return (
        <div className="chat-footer">
            <div className="input-group">
                <input type="text" className="form-control chat-input" placeholder="Message" aria-label="Recipient's username" aria-describedby="basic-addon2" />
                <div className="input-group-append">
                    <button className="btn input-btn1" type="button"><i className="fa fa-microphone"></i></button>
                    <button className="btn input-btn2" type="button"><i className="fa fa-file-o"></i></button>
                </div>
            </div>
        </div>
    )
}

export default ChatFooter;