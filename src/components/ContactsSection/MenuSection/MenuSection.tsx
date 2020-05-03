import React from "react";
import "./MenuSection.css";
import ContactList from "../ContactLists/ContactList/ContactList";
const MenuSection = (props: any) => {
    let {
        count = 0,
        children,
        title
    } = props;
    return (
        <div className="menu-section">
            <div className="menu-section-title">
                <span className="menu-title-text">{title}</span>
                <span className="menu-title-count">
                    {count > 0 && <span className="badge-count badge badge-primary badge-pill">{count}</span>}
                </span>
            </div>
            {children}
        </div>
    )
}

export default MenuSection;