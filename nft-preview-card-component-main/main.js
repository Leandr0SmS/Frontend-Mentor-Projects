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

function Price_Time ({ price, time }) {
    return (
        <div className="price-time">
            <div className="price-div">
                <img 
                    src="./images/icon-ethereum.svg"
                    aria-hidden="false"
                    role="img"
                />
                <p>{price} ETH</p>
            </div>
            <div className="time-div">
                <img 
                    src="./images/icon-clock.svg"
                    aria-hidden="false"
                    role="img"
                />
                <p>{time} days left</p>
            </div>
        </div>
    )
}

function Avatar ({ avatarName }) {
    return (
        <div className="avatar-div">
            <img 
                className="avatar-img" 
                src="./images/image-avatar.png"
                aria-hidden="false"
                role="img"
            />
            <p className="avatar-text">
                Creation of     
                <span>{` ${avatarName}`}</span>
            </p>
        </div>
    )
}

function Main ({ item }) {
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
                    <img 
                        className="nft-img" 
                        src=".\images\image-equilibrium.jpg"
                        aria-hidden="false"
                        role="img"
                    />
                    <img 
                        className="nft-icon" 
                        src=".\images\icon-view.svg"
                        aria-hidden="false"
                        role="img"
                    />
                </div>
                <h1 className="heading">{item.main.heading}</h1>
                <p className="text">{item.main.text}</p>
                {priceTimeData}
                {avatarData}
            </div>
        </main>
    )
};

function Footer ({ name }) {
    return (
        <footer className="attribution">
            Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>. 
            Coded by <a href="#">{name}</a>.
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