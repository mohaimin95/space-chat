import React, { useState, useEffect } from "react";
import "./ChatBody.css";
import Conversations from "./Conversations/Conversations";
declare const $:any;
const ChatBody = (props:any) => {
    const scrollToBottom = () => {
        $('#chatBody').scrollTop($('#chatBody')[0].scrollHeight);
    }
    useEffect(()=>{
        scrollToBottom();
    })
    return (
        <div className="chat-body" id="chatBody">
            <Conversations/>
        </div>
    )
}

export default ChatBody