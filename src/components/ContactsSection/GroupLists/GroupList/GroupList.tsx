import React from "react";
import "./GroupList.css";
import GroupIcon from "./GroupIcon";
const GroupList = (props:any) => {
    let {
        groupName,
        count = 0,
    } = props;
    return (
        <div className={"group-list-view " + ((count>0 && "active"))}>
        <div className="group-list-details">
            <div className="group-dp-section mr-2">
               <GroupIcon {...props}/>
            </div>
            <div className="group-name-section">
                {groupName}
            </div>
        </div>
        <div className="group-count-section">
            <span className="badge-count badge badge-light badge-pill">{((count>0 && count))}</span>
        </div>
    </div>
    )
}

export default GroupList;