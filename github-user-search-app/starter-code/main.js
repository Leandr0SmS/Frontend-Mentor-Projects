/*
  devfinder

  Light
  Dark

  Search GitHub username...
  Search

  Joined

  Repos
  Followers
  Following
*/

function App() {
    const [colorMode, setColorMode] = React.useState(true);
    function handleColorMode() {
        setColorMode(p => !p)
    }

    React.useEffect(() => {
        const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
        console.log(mediaQuery)
        mediaQuery.matches ? setColorMode(false) : setColorMode(true);
    }, []);
    

    console.log(colorMode)
    return (
        <div className={colorMode ? "bg" : "bg-dark bg"}>
            <div className="app">
                <header className="header">
                    <h1 className="title">devfinder</h1>
                    {
                        colorMode
                        ? <div 
                            className="color-mode-div"
                            onClick={handleColorMode}
                          >
                            <p className="color-mode-text">Dark</p>
                            <img
                                className="moon-icon"
                                src="./assets/icon-moon.svg"
                                alt="moon icon to dark colors mode"
                                aria-hidden="false"
                                role="img"
                            />
                          </div>
                        : <div 
                            className="color-mode-div"
                            onClick={handleColorMode}
                          >
                            <p className="color-mode-text">Light</p>
                            <img
                                className="sun-icon"
                                src="./assets/icon-sun.svg"
                                alt="sun icon to dark colors mode"
                                aria-hidden="false"
                                role="img"
                            />
                          </div>
                    }
                </header>
                <form className="form">
                    <img
                        className="magnifier-icon"
                        src="./assets/icon-search.svg"
                        alt="magnifier icon to search"
                        aria-hidden="false"
                        role="img"
                    />
                    <input
                        className={colorMode ? "input ph-light" : "ph-dark div-dark input"}
                        placeholder="Search GitHub username…"
                    />
                    <button
                        className="btn"
                    >
                        Search
                    </button>
                </form>
            </div>
        </div>
    )
}

//Render
const app = document.getElementById('root');
const root = ReactDOM.createRoot(app);
root.render(<App />)