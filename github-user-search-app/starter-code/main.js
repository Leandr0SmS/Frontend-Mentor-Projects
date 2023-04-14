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

    console.log(colorMode)
    return (
        <div className={colorMode ? "app" : "app dark-mode"}>
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
            <div className="search">
            </div>
        </div>
    )
}

//Render
const app = document.getElementById('root');
const root = ReactDOM.createRoot(app);
root.render(<App />)