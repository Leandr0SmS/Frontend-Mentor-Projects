
// Data

const data = [
    {
        heading: "Equilibrium #3429",
        text: "Our Equilibrium collection promotes balance and calm.",
        author: "Leandro Simões",
        price_time: {
            price: 0.041,
            time: 3
        },
        avatarName: "Jules Wyvern"
    }
]


//  Components

function Price_Time (props) {
    return (
        <div className="price-time">
            <div className="price-div">
                <img className="eth-icon" src="./images/icon-ethereum.svg" />
                <p className="price">{props.price}ETH</p>
            </div>
            <div className="time-div">
                <img className="time-icon" src="./images/icon-clock.svg" />
                <p className="time" >{props.time} days left</p>
            </div>
        </div>
    )
}

function Avatar (props) {
    return (
        <div className="avatar-div">
            <img className="avatar-img" src="./images/image-avatar.png" />
            <p className="avatar-text">Creation of {props.avatarName}</p>
        </div>
    )
}

function Main (props) {

    const priceTimeData = data.map((obj) => {
        return <Price_Time 
                    price={obj.price_time.price}
                    time={obj.price_time.time} />
    });

    const avatarData = data.map((obj) => {
        return <Avatar avatarName={obj.avatarName} />
    });


    return (
        <main>
            <div className="nft">
                <img/>
                <h1 className="heading">{props.heading}</h1>
                <p className="text">{props.text}</p>
                {priceTimeData}
                {avatarData}
            </div>
        </main>
    )
}

function Footer (props) {
    return (
        <div>
            Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>. 
            Coded by <a href="#">{props.name}</a>.
        </div>
    )
}


// App

function App () {
    const mainData = data.map((obj) => {
        return <Main
                    heading={obj.heading}
                    text={obj.text}/>
    });

    const footerData = data.map((obj) => {
        return <Footer name={obj.author}/>
    });
    
    return (
        <div>
            {mainData}
            {footerData}
        </div>
    )
}

// Render

const app = document.getElementById('root');
const root = ReactDOM.createRoot(app);
root.render(<App />);