import React from "react";
import "./ContactList.css"
import ContactIcon from "./ContactIcon";
const ContactList = (props: any) => {
    let {
        count = 0,
        username,
        status = 'offline'
    } = props;
    const getStatus = () => {
        switch (status.toLowerCase()) {
            case "online":
                return "online";
                break
        }
        return status;
    }
    return (
        <div className={"contact-list-view " + ((count > 0) && " active")}>
            <div className="contact-list-details">
                <div className="mr-2">
                    <ContactIcon {...props}/>
                </div>

                <div className="contact-status-section">
                    <i className={"fa fa-circle contact-status " + (getStatus())}></i>
                </div>
                <div className="contact-name-section ml-2">
                    {username}
                </div>
            </div>
            <div className="contact-count-section">
                <span className="badge-count badge badge-light badge-pill">{count > 0 && count}</span>
            </div>
        </div>
    )
}

export default ContactList;