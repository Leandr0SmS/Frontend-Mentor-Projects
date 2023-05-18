const notificationData = [
    {
        id: "01",
        user: "Mark Webber",
        img: "./assets/images/avatar-mark-webber.webp",
        action_id: "01",
        action: "reacted to your recent post",
        element: "My first tournament today!",
        time: "1m ago"
    },
    {
        id: "02",
        user: "Angela Gray",
        img: "./assets/images/avatar-angela-gray.webp",
        action_id: "02",
        action: "followed you",
        element: "",
        time: "5m ago"
    },
    {
        id: "03",
        user: "Jacob Thompson",
        img: "./assets/images/avatar-jacob-thompson.webp",
        action_id: "03",
        action: "has joined your group",
        element: "Chess Club",
        time: "1 day ago"
    },
    {
        id: "04",
        user: "Rizky Hasanuddin",
        img: "./assets/images/avatar-rizky-hasanuddin.webp",
        action_id: "04",
        action: "sent you a private message",
        element: "Hello, thanks for setting up the Chess Club. I've been a member for a few weeks now and I'm already having lots of fun and improving my game.",
        time: "5 days ago"
    },
    {
        id: "05",
        user: "Kimberly Smith",
        img: "./assets/images/avatar-kimberly-smith.webp",
        action_id: "05",
        action: "commented on your picture",
        element: ["./assets/images/image-chess.webp", "playing chess"],
        time: "1 week ago"
    },
    {
        id: "06",
        user: "Nathan Peterson",
        img: "./assets/images/avatar-nathan-peterson.webp",
        action_id: "01",
        action: "reacted to your recent post",
        element: "5 end-game strategies to increase your win rate",
        time: "2 weeks ago"
    },
    {
        id: "07",
        user: "Anna Kim",
        img: "./assets/images/avatar-anna-kim.webp",
        action_id: "03",
        action: "left the group",
        element: "Chess Club",
        time: "2 weeks ago"
    },
]

const Header = () => {
    return (
        <div className="header">
            <div className="notifications--count">
                <h1>Notifications</h1>
                <div className="count">3</div>
            </div>
            <div className="all-read--div">Mark all as read</div>
        </div>
    )
}

const List = ({children}) => {
    return (
        <div className="notification--list">
            {children}
        </div>
    )
}

const Notification = ({name, src, action, action_id, element, time}) => {

    let actionsStatus = false, 
        actionClass = "", 
        plusContent = false,
        message = false,
        picture = false;

    switch (action_id) {
        case "01":
            actionsStatus = true;
            actionClass = "post"
            break;
        case "02":
            actionsStatus = false;
            break;
        case "03":
            actionsStatus = true;
            actionClass = "group"
            break;
        case "04":
            actionsStatus = true;
            plusContent = true;
            message = true;
            break;
        case "05":
            actionsStatus = true;
            plusContent = true;
            picture = true;
            break;
        default:
            console.log(`data error`);
    }

    return (
        <div className="notification">
            <img
                className="avatar--img"
                src={src}
                alt={`${name} image`}
                aria-hidden="false"
                role="img"
            />
            <div className="notification--content">
                <div className="content">
                    <p>
                        <span className="user--name">{name} </span>
                        {action}
                        {(actionsStatus && !plusContent) && <span className={actionClass}> {element}</span>}
                    </p>
                    <div className="unread"></div>
                </div>
                <p className="notification--time">{time}</p>
                {
                    message
                    &&
                    <div className="message">
                        <p>{element}</p>
                    </div>
                }
            </div>
            {
                picture
                &&
                <img
                    className="picture"
                    src={element[0]}
                    alt={`${element[1]}`}
                    aria-hidden="false"
                    role="img"
                />
            }
        </div>
    )
}

const App = () => {

    const notificationsMaped = notificationData.map(ntf => {
        return (
            <Notification
                key={ntf.id}
                name={ntf.user}
                src={ntf.img}
                action={ntf.action}
                action_id={ntf.action_id}
                element={ntf.element}
                time={ntf.time}
            />
        )
    })

    return (
        <React.Fragment>
            <Header/>
            <List>
                {notificationsMaped}
            </List>
        </React.Fragment>
    )
};

//Render
const app = document.getElementById('root');
const root = ReactDOM.createRoot(app);
root.render(<App/>)