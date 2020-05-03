import React from "react";
const ContactIcon = (props: any) => {
    let {
        username,
        image
    } = props;
    let iconStyle: any = {
        width: "1.5rem",
        height: "1.5rem",
        backgroundColor: "#26d198",
        padding: ".27rem .45rem",
        borderRadius: "50%",
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
        borderRadius: "50%",
    }
    return (
        <div className="contact-icon">
            {image ? (
                <span style={imgParent} title={username}>
                    <img src={image} style={imgStyle} alt={username} />
                </span>
            ) : (
                    <span title={username} style={iconStyle}>{String(username).substr(0, 1).toUpperCase()}</span>
                )
            }
        </div>
    )
}

export default ContactIcon;