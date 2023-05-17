const notificationData = [
    {
        id: 01,
        user: "Mark Webber",
        img: "./assets/images/avatar-mark-webber.webp",
        action: "reacted to your recent post",
        element: "My first tournament today!",
        time: "1m ago"
    },
    {
        id: 02,
        user: "Angela Gray",
        img: "./assets/images/avatar-angela-gray.webp",
        action: "followed you",
        element: "",
        time: "5m ago"
    },
    {
        id: 03,
        user: "Jacob Thompson",
        img: "./assets/images/avatar-jacob-thompson.webp",
        action: "has joined your group",
        element: "Chess Club",
        time: "1 day ago"
    },
    {
        id: 04,
        user: "Rizky Hasanuddin",
        img: "./assets/images/avatar-rizky-hasanuddin.webp",
        action: "sent you a private message",
        element: "Hello, thanks for setting up the Chess Club. I've been a member for a few weeks now and I'm already having lots of fun and improving my game.",
        time: "5 days ago"
    },
    {
        id: 05,
        user: "Kimberly Smith",
        img: "./assets/images/avatar-kimberly-smith.webp",
        action: "commented on your picture",
        element: "",
        time: "1 week ago"
    },
    {
        id: 06,
        user: "Nathan Peterson",
        img: "./assets/images/avatar-nathan-peterson.webp",
        action: "reacted to your recent post",
        element: "5 end-game strategies to increase your win rate",
        time: "2 weeks ago"
    },
    {
        id: 07,
        user: "Anna Kim",
        img: "./assets/images/avatar-anna-kim.webp",
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

const Notification = () => {
    return (
        <div className="notification">
        </div>
    )
}

const App = () => {
    return (
        <React.Fragment>
            <Header/>
        </React.Fragment>
    )
};

//Render
const app = document.getElementById('root');
const root = ReactDOM.createRoot(app);
root.render(<App/>)