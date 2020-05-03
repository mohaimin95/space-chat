import React from "react";
import ChatHeader from "./ChatHeader/ChatHeader";
import ChatBody from "./ChatBody/ChatBody";
import ChatFooter from "./ChatFooter/ChatFooter";
const ChatsSection = () => {
    return (
        <div className="chat-section">
            <ChatHeader />
            <ChatBody />
            <ChatFooter />
        </div>
    )
}

export default ChatsSection;