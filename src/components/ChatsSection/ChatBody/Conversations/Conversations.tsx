import React from "react";
import * as _ from "lodash"
import DateSeparator from "./DateSeparator";
import Conversation from "./Conversation/Conversation";

const Conversations = (props: any) => {
    let conversations = [
        {
            username: "mohaimin95",
            direction: "received",
            message: "Hi",
            time: "21 march 2020",
            status: "read",
        },

        {
            username: "fawaz",
            direction: "sent",
            message: "Hello",
            time: "21 march 2020",
            status: "read",
        },
        {
            username: "mohaimin95",
            direction: "received",
            message: "How are you da",
            time: "22 march 2020",
            status: "read",
        },
        {
            username: "fawaz",
            direction: "sent",
            message: "Im Fine",
            time: "21 march 2020",
            status: "read",
        },
        {
            username: "fawaz",
            direction: "sent",
            message: "How about you ?",
            time: "21 march 2020",
            status: "read",
        },
        {
            username: "mohaimin95",
            direction: "received",
            message: "Iam great !",
            time: "24 march 2020",
            status: "read",
        },
        {
            username: "fawaz",
            direction: "sent",
            message: "Cool",
            time: "25 march 2020",
            status: "read"
        },
        {
            username: "mohaimin95",
            direction: "received",
            message: "Have you gone through documentation ???????????",
            time: "27 march 2020",
            status: "read",
        },
        {
            username: "fawaz",
            direction: "sent",
            message: "Yeah! that was awesome",
            time: "27 march 2020",
            status: "read",
        },
        {
            username: "fawaz",
            direction: "sent",
            message: "How about you ?",
            time: "21 march 2020",
            status: "read",
        },
        {
            username: "mohaimin95",
            direction: "received",
            message: "Iam great !",
            time: "24 march 2020",
            status: "read",
        },
        {
            username: "fawaz",
            direction: "sent",
            message: "Cool",
            time: "25 march 2020",
            status: "read"
        },
        {
            username: "mohaimin95",
            direction: "received",
            message: "Have you gone through documentation ???????????",
            time: "27 march 2020",
            status: "read",
        },
        {
            username: "fawaz",
            direction: "sent",
            message: "Yeah! that was awesome",
            time: "27 march 2020",
            status: "read",
        },
        {
            username: "fawaz",
            direction: "sent",
            message: "How about you ?",
            time: "21 march 2020",
            status: "read",
        },
        {
            username: "mohaimin95",
            direction: "received",
            message: "Iam great !",
            time: "24 march 2020",
            status: "read",
        },
        {
            username: "fawaz",
            direction: "sent",
            message: "Cool",
            time: "25 march 2020",
            status: "read"
        },
        {
            username: "mohaimin95",
            direction: "received",
            message: "Have you gone through documentation ???????????",
            time: "27 march 2020",
            status: "read",
        },
        {
            username: "fawaz",
            direction: "sent",
            message: "Yeah! that was awesome",
            time: "27 march 2020",
            status: "read",
        },
        {
            username: "fawaz",
            direction: "sent",
            message: "How about you ?",
            time: "21 march 2020",
            status: "read",
        },
        {
            username: "mohaimin95",
            direction: "received",
            message: "Iam great !",
            time: "24 march 2020",
            status: "read",
        },
        {
            username: "fawaz",
            direction: "sent",
            message: "Cool",
            time: "25 march 2020",
            status: "read"
        },
        {
            username: "mohaimin95",
            direction: "received",
            message: "Have you gone through documentation ???????????",
            time: "27 march 2020",
            status: "read",
        },
        {
            username: "fawaz",
            direction: "sent",
            message: "Yeah! that was awesome",
            time: "27 march 2020",
            status: "read",
        },
        {
            username: "fawaz",
            direction: "sent",
            message: "How about you ?",
            time: "21 march 2020",
            status: "read",
        },
        {
            username: "mohaimin95",
            direction: "received",
            message: "Iam great !",
            time: "24 march 2020",
            status: "read",
        },
        {
            username: "fawaz",
            direction: "sent",
            message: "Cool",
            time: "25 march 2020",
            status: "read"
        },
        {
            username: "mohaimin95",
            direction: "received",
            message: "Have you gone through documentation ???????????",
            time: "27 march 2020",
            status: "read",
        },
        {
            username: "fawaz",
            direction: "sent",
            message: "Yeah! that was awesome",
            time: "27 march 2020",
            status: "read",
        },
        {
            username: "fawaz",
            direction: "sent",
            message: "How about you ?",
            time: "21 march 2020",
            status: "read",
        },
        {
            username: "mohaimin95",
            direction: "received",
            message: "Iam great !",
            time: "24 march 2020",
            status: "read",
        },
        {
            username: "fawaz",
            direction: "sent",
            message: "Cool",
            time: "25 march 2020",
            status: "read"
        },
        {
            username: "mohaimin95",
            direction: "received",
            message: "Have you gone through documentation ???????????",
            time: "27 march 2020",
            status: "read",
        },
        {
            username: "fawaz",
            direction: "sent",
            message: "Yeah! that was awesome",
            time: "27 march 2020",
            status: "read",
        },
        {
            username: "fawaz",
            direction: "sent",
            message: "How about you ?",
            time: "21 march 2020",
            status: "read",
        },
        {
            username: "mohaimin95",
            direction: "received",
            message: "Iam great !",
            time: "24 march 2020",
            status: "read",
        },
        {
            username: "fawaz",
            direction: "sent",
            message: "Cool",
            time: "25 march 2020",
            status: "read"
        },
        {
            username: "mohaimin95",
            direction: "received",
            message: "Have you gone through documentation ???????????",
            time: "27 march 2020",
            status: "read",
        },
        {
            username: "fawaz",
            direction: "sent",
            message: "Yeah! that was awesome",
            time: "27 march 2020",
            status: "read",
        },
        {
            username: "fawaz",
            direction: "sent",
            message: "How about you ?",
            time: "21 march 2020",
            status: "read",
        },
        {
            username: "mohaimin95",
            direction: "received",
            message: "Iam great !",
            time: "24 march 2020",
            status: "read",
        },
        {
            username: "fawaz",
            direction: "sent",
            message: "Cool",
            time: "25 march 2020",
            status: "read"
        },
        {
            username: "mohaimin95",
            direction: "received",
            message: "Have you gone through documentation ???????????",
            time: "27 march 2020",
            status: "read",
        },
        {
            username: "fawaz",
            direction: "sent",
            message: "Yeah! that was awesome",
            time: "27 march 2020",
            status: "read",
        },
        {
            username: "fawaz",
            direction: "sent",
            message: "How about you ?",
            time: "21 march 2020",
            status: "read",
        },
        {
            username: "mohaimin95",
            direction: "received",
            message: "Iam great !",
            time: "24 march 2020",
            status: "read",
        },
        {
            username: "fawaz",
            direction: "sent",
            message: "Cool",
            time: "25 march 2020",
            status: "read"
        },
        {
            username: "mohaimin95",
            direction: "received",
            message: "Have you gone through documentation ???????????",
            time: "27 march 2020",
            status: "read",
        },
        {
            username: "fawaz",
            direction: "sent",
            message: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
            time: "27 march 2020",
            status: "read",
        },

    ]
    let grouped = _.groupBy(conversations, 'time');
    return (
        <React.Fragment>
            {
                Object.keys(grouped).map((obj, i) => (
                    <React.Fragment key={i}>
                        <DateSeparator date={obj} separator={i > 0} />
                        {grouped[obj].map((conv, i) => (
                            <Conversation {...conv} key={i} />
                        ))}
                    </React.Fragment>
                ))
            }
        </React.Fragment>
    )
}

export default Conversations;