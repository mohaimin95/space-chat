import React from "react";
import ContactsSection from "../ContactsSection/ContactsSection";
import ChatsSection from "../ChatsSection/ChatsSection";
import "./Homepage.css";
const Homepage = (props: any) => {
    return (
        <div className="main">
            <ContactsSection />
            <ChatsSection />
        </div>
    )
}

export default Homepage;