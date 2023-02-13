// Data

const data = [
    {
        main: {
            id: "01",
            heading: "Equilibrium #3429",
            text: "Our Equilibrium collection promotes balance and calm.",
        },
        footer: {
            id: "02",
            author: "Leandro Simões"
        },
        price_time: {
            id: "03",
            price: 0.041,
            time: 3
        },
        avatar: {
            id: "04",
            avatarName: "Jules Wyvern"
        }
    }
]

//  Components

function Price_Time (props) {
    return (
        <div className="price-time">
            <div className="price-div">
                <img src="./images/icon-ethereum.svg" />
                <p>{props.price} ETH</p>
            </div>
            <div className="time-div">
                <img src="./images/icon-clock.svg" />
                <p>{props.time} days left</p>
            </div>
        </div>
    )
}

function Avatar (props) {
    return (
        <div className="avatar-div">
            <img className="avatar-img" src="./images/image-avatar.png" />
            <p className="avatar-text">
                Creation of     
                <span>{` ${props.avatarName}`}</span>
            </p>
        </div>
    )
}

function Main (props) {
    //extract data creating jsx Price_Time element
    const priceTimeData = data.map((obj) => {
        return <Price_Time 
                    key={obj.price_time.id}
                    price={obj.price_time.price}
                    time={obj.price_time.time}    
                />
    });
    //extract data creating jsx Avatar element
    const avatarData = data.map((obj) => {
        return <Avatar 
                    key={obj.avatar.id}
                    avatarName={obj.avatar.avatarName} 
                />
    });
    return (
        <main>
            <div className="nft">
                <div className="images-container">
                    <img className="nft-img" src=".\images\image-equilibrium.jpg"/>
                    <img className="nft-icon" src=".\images\icon-view.svg"/>
                </div>
                <h1 className="heading">{props.item.main.heading}</h1>
                <p className="text">{props.item.main.text}</p>
                {priceTimeData}
                {avatarData}
            </div>
        </main>
    )
};

function Footer (props) {
    return (
        <footer>
            Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>. 
            Coded by <a href="#">{props.name}</a>.
        </footer>
    )
}


// App
function App () {
    //extract data creating jsx Main element using {obj}
    const mainData = data.map((obj) => {
        return <Main
                    key={obj.main.id}
                    item={obj}/>
    });
    //extract data creating jsx Footer element
    const footerData = data.map((obj) => {
        return <Footer
                    key={obj.footer.id} 
                    name={obj.footer.author}/>
    });
    return (
        <div className="app">
            <div className="nft-div">
                {mainData}
            </div>
            <div className="footer-div">
            {footerData}
            </div>
        </div>
    )
}

// Render
const app = document.getElementById('root');
const root = ReactDOM.createRoot(app);
root.render(<App />);