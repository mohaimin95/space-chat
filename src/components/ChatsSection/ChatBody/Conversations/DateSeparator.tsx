import React from "react";
const DateSeparator = (props: any) => {
    let {
        date,
        separator = true
    } = props;
    let separatorStyle: React.CSSProperties = {
        margin: ".5rem 0",
        width: "100%",
        borderBottom: "1px solid #ddd"
    }

    let timestampGroup: React.CSSProperties = {
        backgroundColor: "rgba(108, 205, 224, 1)",
        color: "black",
        textAlign: "center",
        maxWidth: "7rem",
        textTransform: "uppercase",
        borderRadius: "2px",
        margin: "0 auto",
    }
    return (
        <React.Fragment>
            {separator && <div style={separatorStyle}></div>}
            <span className="sticky-top" style={timestampGroup}>{date}</span>
        </React.Fragment>
    )
}

export default DateSeparator;