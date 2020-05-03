import React from "react";
import "./ContactsHeader.css";
import ContactsHeaderProfile from "./ContactsHeaderProfile/ContactsHeaderProfile";

const ContactsHeader = () => {
    return (
        <div className="header-menu sticky-top">
            <div className="header-menu-list">
                <div className="header-menu-item">
                    <ContactsHeaderProfile/>
                    <div className="menu-quick">
                        <button className="header-menu-btn btn-outline-primary btn btn-sm">
                            <i className="fa fa-search"></i>
                        </button>
                        <button className="header-menu-btn btn-outline-primary btn btn-sm">
                            <i className="fa fa-ellipsis-v"></i>
                        </button>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default ContactsHeader;