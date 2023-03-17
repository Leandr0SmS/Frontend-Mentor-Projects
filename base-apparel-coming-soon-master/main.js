
function Header () {
    return (
        <header className="header">
            <img 
                className="header--img"
                src=".\images\logo.svg"
                alt="logo Base Apparel" 
            />
        </header>
    )
}

function Image () {
    return (
        <picture className="hero--image-div">
            <source media="(max-width:840px)" srcSet=".\images\hero-mobile.jpg" />
            <img className="hero--image" src=".\images\hero-desktop.jpg" alt="model of Base Apparel" />
        </picture>
    )
}

function Form() {
    
    return (
        <form className="form" name="form" action="#">
            <input 
                className="email--input"
                name='text'
                type="email"
                placeholder="Email Address"
                required
            >
            </input>
            <button 
                className="form--button"
                type="submit"
                name="submit"
                value="Submit"
                >
                <img 
                    className="form--button--icon"
                    src=".\images\icon-arrow.svg"
                    alt="Arrow icon"
                />
            </button>
        </form>
    )
}

function Main () {
    return (
        <main className="main">
            <h1 className="main--heading">
                WE'RE <br/>
                <span> COMING SOON</span> 
            </h1>
            <p className="main--text">
                Hello fellow shoppers! We're currently building our new fashion store. 
                Add your email below to stay up-to-date with announcements and our launch deals.
            </p>
            <Form />
        </main>
    )
}

function App () {
    return (
        <div className="app">
            <Header />
            <Image />
            <Main />
        </div>
    )
}

// Render
const app = document.getElementById('root');
const root = ReactDOM.createRoot(app);
root.render(<App />);