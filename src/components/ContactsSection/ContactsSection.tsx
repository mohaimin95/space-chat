import React from "react";
import "./ContactsSection.css";
import ContactList from "./ContactLists/ContactList/ContactList";
import GroupList from "./GroupLists/GroupList/GroupList";
import MenuSection from "./MenuSection/MenuSection";
import ContactsHeader from "./ContactsHeader/ContactsHeader";
const ContactsSection = () => {
    return (
        <div className=" contacts-list d-none d-md-block">
            <div className="header-section">
            <ContactsHeader/>
                <div className="contacts-section">
                    <MenuSection title="Unread" count="1">
                        <ContactList status="online" username="Salim Malik" count="2" />
                        <ContactList username="Fawaz" count="10" />
                    </MenuSection>
                    <MenuSection title="Unread" count="1">
                        <GroupList count="2" groupName="Googlers" />
                        <GroupList count="2" groupName="MTCT" />
                        <GroupList count="0" groupName="PUbG Army" image="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSE_cao0o5fQpspadipFpLP4l3xM6IVpkGnFaiSZBWDOjY6zqkg&usqp=CAU" />
                    </MenuSection>
                    <MenuSection title="Unread" count="1"><ContactList status="online" username="Salim Malik" count="2" />
                        <ContactList username="Abdul Mohaimin" count="0" />
                        <ContactList username="Fawaz" count="10" />
                        <ContactList username="Safiya" image="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQVU81vVzcTd-iXZo4rfXXN_WSPncFr9vIo_wL3RO0uBeMGcvqF&usqp=CAU" count="10" />
                    </MenuSection>
                </div>
            </div>
        </div>
    )
}

export default ContactsSection;