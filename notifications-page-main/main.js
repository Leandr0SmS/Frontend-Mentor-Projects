const notificationData = [
    {
        id: "01",
        user: "Mark Webber",
        img: "./assets/images/avatar-mark-webber.webp",
        action_id: "01",
        action: "reacted to your recent post",
        element: "My first tournament today!",
        time: "1m ago",
        unread: true
    },
    {
        id: "02",
        user: "Angela Gray",
        img: "./assets/images/avatar-angela-gray.webp",
        action_id: "02",
        action: "followed you",
        element: "",
        time: "5m ago",
        unread: true
    },
    {
        id: "03",
        user: "Jacob Thompson",
        img: "./assets/images/avatar-jacob-thompson.webp",
        action_id: "03",
        action: "has joined your group",
        element: "Chess Club",
        time: "1 day ago",
        unread: true
    },
    {
        id: "04",
        user: "Rizky Hasanuddin",
        img: "./assets/images/avatar-rizky-hasanuddin.webp",
        action_id: "04",
        action: "sent you a private message",
        element: "Hello, thanks for setting up the Chess Club. I've been a member for a few weeks now and I'm already having lots of fun and improving my game.",
        time: "5 days ago",
        unread: false
    },
    {
        id: "05",
        user: "Kimberly Smith",
        img: "./assets/images/avatar-kimberly-smith.webp",
        action_id: "05",
        action: "commented on your picture",
        element: ["./assets/images/image-chess.webp", "playing chess"],
        time: "1 week ago",
        unread: false
    },
    {
        id: "06",
        user: "Nathan Peterson",
        img: "./assets/images/avatar-nathan-peterson.webp",
        action_id: "01",
        action: "reacted to your recent post",
        element: "5 end-game strategies to increase your win rate",
        time: "2 weeks ago",
        unread: false
    },
    {
        id: "07",
        user: "Anna Kim",
        img: "./assets/images/avatar-anna-kim.webp",
        action_id: "03",
        action: "left the group",
        element: "Chess Club",
        time: "2 weeks ago",
        unread: false
    },
]

const Header = ({counter, onAllReadClick}) => {
    return (
        <div className="header">
            <div className="notifications--count">
                <h1>Notifications</h1>
                <div className="count">{counter}</div>
            </div>
            <div 
                className="all-read--div"
                onClick={onAllReadClick}
            >Mark all as read</div>
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

const Notification = ({id, name, src, action, action_id, element, time, unread, onNotificationClick}) => {

    let actionsStatus = false, 
        actionClass = "action", 
        plusContent = false,
        message = false,
        picture = false

    switch (action_id) {
        case "01":
            actionsStatus = true;
            actionClass = "action post"
            break;
        case "02":
            actionsStatus = false;
            break;
        case "03":
            actionsStatus = true;
            actionClass = "action group"
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
        <div 
            className={unread ? "notification unread" : "notification"}
            id={id}
            onClick={onNotificationClick}
        >
            <img
                className="avatar--img"
                src={src}
                alt={`${name} image`}
                aria-hidden="false"
                role="img"
            />
            <div className="notification--content" id={id}>
                <div className="content">
                    <p>
                        <a 
                            className="user--name"
                            href=""
                            target="_blank"
                        >{name} </a>
                        {action}
                        {(actionsStatus && !plusContent) && <a className={actionClass} href=""> {element}</a>}
                        {unread && <span className="unread--icon"></span>}
                    </p>
                </div>
                <p className="notification--time">{time}</p>
                {
                    message
                    &&
                    <a className="message" href="">
                        {element}
                    </a>
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

    const [notifications, setNotification] = React.useState(notificationData);

    const handleAllReadClick = () => {
        setNotification((n) => {
            return n.map(ntf => ({
                ...ntf,
                unread: false
            }))
        })
    };

    const handleNotificationClick = (e) => {
        const {id} = e.target;
        const nextNotifications = notifications.map(ntf => {
            if (ntf.id === id) {
                return {
                    ...ntf,
                    unread: false
                }
            } else {
                return {
                    ...ntf
                }
            }
        });
        setNotification(nextNotifications)
    }

    let counter = 0;
    notifications.map(ntf => {
        ntf.unread && counter ++
    });

    const notificationsMaped = notifications.map(ntf => {
        return (
            <Notification
                key={ntf.id}
                id={ntf.id}
                name={ntf.user}
                src={ntf.img}
                action={ntf.action}
                action_id={ntf.action_id}
                element={ntf.element}
                time={ntf.time}
                unread={ntf.unread}
                onNotificationClick={handleNotificationClick}
            />
        )
    });

    return (
        <React.Fragment>
            <Header
                counter={counter}
                onAllReadClick={handleAllReadClick}
            />
            <List>
                {notificationsMaped}
            </List>
        </React.Fragment>
    )
};

//Render
const app = document.getElementById('root');
const root = ReactDOM.createRoot(app);
root.render(<App/>);