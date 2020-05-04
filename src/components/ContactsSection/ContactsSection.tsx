import React from "react";
import "./ContactsSection.css";
import ContactList from "./ContactLists/ContactList/ContactList";
import GroupList from "./GroupLists/GroupList/GroupList";
import MenuSection from "./MenuSection/MenuSection";
import ContactsHeader from "./ContactsHeader/ContactsHeader";
import { connect } from "react-redux";
const ContactsSection = (props:any) => {
    const sum = (arr:any[],key:string) => {
        return arr.reduce((acc:any,curr:any)=>(acc + +(curr[key] || 0)),0)
    }
    return (
        <div className=" contacts-list d-none d-md-block">
            <div className="header-section">
            <ContactsHeader/>
                <div className="contacts-section">
                    <MenuSection title="Unread" count="1">
                        <ContactList status="online" username="Salim Malik" count="2" />
                        <ContactList username="Fawaz" count="10" />
                    </MenuSection>
                    <MenuSection title="Unread" count={sum(props.groups,'count')}>
                        {
                            props.groups.map((group:any,i:number)=>(
                                <GroupList key={i} {...group} />
                            ))
                        }
                    </MenuSection>
                    <MenuSection title="Unread" count={sum(props.contacts,'count')}>
                        {
                            props.contacts.map((contact:any,i:number)=>(
                                <ContactList key={i} {...contact} />
                            ))
                        }
                    </MenuSection>
                </div>
            </div>
        </div>
    )
}
const mapStateToProps = (state:any) => {
    return {
        contacts:state.app.contacts,
        groups:state.app.groups
    }
}
export default connect(mapStateToProps)(ContactsSection);