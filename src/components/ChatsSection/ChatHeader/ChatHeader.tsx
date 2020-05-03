import React from 'react';
import "./ChatHeader.css";
const ChatHeader = (props:any) => {
    return (

        <div className="chat-header sticky-top">
        <div className="chat-title">
            <div className="chat-fav m-4">
                <i className="fa fa-heart active"></i>
            </div>
            <div className="chat-dp ml-1">
                    <span className="chat-header-dp">O</span>
            </div>
            <div className="chat-title-text ml-2">
                <div className="chat-title-name">Fawaz</div>
                <div className="chat-title-status small">
                    <i className="fa fa-circle contact-status online"></i>&nbsp;Online
                </div>
            </div>
        </div>
        
        <div className="chat-menu">
            
            <div className="chat-menu-item">
                <i className="fa fa-search"></i>
            </div>
            
            <div className="chat-menu-item">
                <i className="fa fa-info"></i>
            </div>
            <div className="chat-menu-item">
                <i className="fa fa-ellipsis-v"></i>
            </div>

        </div>

    </div>
    )
}

export default ChatHeader;