import { timeStamp } from "console"
import { useState } from "react"


type User = {
    name: string;
    avatarUrl: string;
    isCurrentUser: boolean;
}

type MessageProps = {
    timeStamp: number;
    messageText: string;
    user: User;
}

type MessageThreadProps = {
    messages: Array<MessageProps>    
}

const avatarUrlA = "https://upload.wikimedia.org/wikipedia/commons/7/7e/Claudia_Sheinbaum_2022_%28cropped%29.jpg"
const avatarUrlB = "https://upload.wikimedia.org/wikipedia/commons/7/7e/Claudia_Sheinbaum_2022_%28cropped%29.jpg"

const userMe = {
    name: "Ava",
    avatarUrl: avatarUrlA,
    isCurrentUser: true
}

const userB = {
    name: "Bebhinn",
    avatarUrl: avatarUrlB,
    isCurrentUser: false
}


export const defaultMessageThreadProps = [
    {
        timeStamp : 1000,
        messageText : `I just completed my first 10k run this morning, and I feel amazing! It was a bit of a struggle towards the end, but pushing through the last kilometer was so rewarding. Now, I'm enjoying a big breakfast to refuel. If anyone wants to join me for a run next week, let me know!`,
        user: userMe
    },
    {
        timeStamp : 1001,
        messageText : `I'm planning a weekend getaway to the mountains and can't wait to disconnect from the hustle and bustle of city life. I've booked a cozy cabin with a fireplace, and I'm looking forward to some hiking, stargazing, and simply enjoying the peace and quiet.`,
        user: userMe
    },
    {
        timeStamp : 1002,
        messageText : `I've decided to take up a new hobby and start learning how to play the piano. It's something I've always wanted to do, and I finally signed up for lessons. The first few sessions have been challenging, but I love the feeling of progress with each practice.`,
        user: userB
    },
    {
        timeStamp : 1003,
        messageText : `I just completed my first 10k run this morning, and I feel amazing! It was a bit of a struggle towards the end, but pushing through the last kilometer was so rewarding. Now, I'm enjoying a big breakfast to refuel. If anyone wants to join me for a run next week, let me know!`,
        user: userMe
    },
]

const Message = (props: MessageProps) => {
    return(
        <p>{props.messageText} </p>
    )
}

export const MessageThread = (props: MessageThreadProps = {messages: defaultMessageThreadProps}) => {
    console.log("component loaded")
    const [messageThreadState, setMessageThreadState] = useState<MessageProps[]>(props.messages ? [...props.messages].sort() : [])

    return(
        <>
            <div>Start of messages</div>
            <br />
            {messageThreadState.map((singleMessageObject, index) => {
                return(
                    <Message {...singleMessageObject} />
                )
            })}
            <br />
            <div>End of messages</div>
        </>
    )
}
