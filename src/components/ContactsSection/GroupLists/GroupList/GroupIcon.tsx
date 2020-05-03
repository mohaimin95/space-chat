import React from "react";
const GroupIcon = (props: any) => {
    let {
        groupName,
        image
    } = props;
    let iconStyle: any = {
        backgroundColor: "#26d198",
        padding: ".27rem .45rem",
        borderRadius: ".2rem",
        fontWeight: "bold"
    }

    let imgParent: any = {
        height: "1rem",
        width: "1rem",
        fontWeight: "bold"
    }

    let imgStyle = {
        width: "1.5rem",
        height: "1.5rem",
        borderRadius: ".2rem",
    }
    return (
        <div className="contact-icon">
            {image ? (
                <span style={imgParent} title={groupName}>
                    <img src={image} style={imgStyle} alt={groupName} />
                </span>
            ) : (
                    <span title={groupName} style={iconStyle}>{String(groupName).substr(0, 1).toUpperCase()}</span>
                )
            }
        </div>
    )
}

export default GroupIcon;