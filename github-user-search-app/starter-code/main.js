function dateFormat(inputDate) {
    const date = new Date(inputDate);
    const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    const day = date.getUTCDate();
    const month = monthNames[date.getUTCMonth()];
    const year = date.getUTCFullYear();
    return `${day} ${month} ${year}`;
}

function App() {

    //State to dark mode
    const [colorMode, setColorMode] = React.useState(true);
    function handleColorMode() {
        setColorMode(p => !p)
    }
    // Looknig for color mode of the user
    React.useEffect(() => {
        const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
        mediaQuery.matches ? setColorMode(false) : setColorMode(true);
    }, []);

    //Form State
    const [formData, setFormData] = React.useState("");
    function handleChange(e) {
        setFormData(e.target.value)
    }
    //Data State
    const [data, setData] = React.useState("");
    // State to trigger fetch data from API
    const [get, setGet] = React.useState(0);
    function handleClick() {
        setGet(get => get + 1)
    };
    //Fetch data
    React.useEffect(() => {
        fetch(`https://api.github.com/users/${formData ? formData : "octocat"}`)
            .then(res => res.json())
            .then(data => setData(data))
    }, [get])

    return (
        <div className={colorMode ? "bg" : "bg-dark bg"}>
            <div className="app">
                <header className="header">
                    <h1 className="title">devfinder</h1>
                    {
                        colorMode
                        ? <div 
                            className="gray-light color-mode-div"
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
                            className="bg-dark color-mode-div"
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
                <form 
                    className="form"
                    onSubmit={(e) => e.preventDefault()}
                >
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
                        type="text"
                        name="username"
                        value={formData}
                        onChange={handleChange}
                    />
                    <button
                        className="btn"
                        onClick={handleClick}
                    >
                        Search
                    </button>
                </form>
                <main className="user">
                    <img
                        className="user-img"
                        src="./assets/icon-search.svg"
                        alt="magnifier icon to search"
                        aria-hidden="false"
                        role="img"
                    />
                    <div className="user--infos">
                        <div className="flex-div-name">
                            <h1 className="name">{data.name ? data.name : data.login}</h1>
                            <p className="user">@{data.login}</p>
                        </div>
                        <div className="created--date">Joined {dateFormat(data.created_at)}</div>
                    </div>
                    <p className="bio">{data.bio ? data.bio : "This profile has no bio"}</p>
                    <div className="user--numbers">
                        <div className="div--num">
                            <p>Repos</p>
                            <p>{data.public_repo}</p>
                        </div>
                        <div className="div--num">
                            <p>Followers</p>
                            <p>{data.followers}</p>
                        </div>
                        <div className="div--num">
                            <p>Following</p>
                            <p>{data.following}</p>
                        </div>
                    </div>
                    <div className="user--contacts">
                        <div className="contacts--divs">
                            <img
                                className="contacts--icon"
                                src="./assets/icon-location.svg"
                                alt="location spot icon"
                                aria-hidden="false"
                                role="img"
                            />
                            <p className="contact">{data.location ? data.location : "Not Available"}</p>
                        </div>
                        <div className="contacts--divs">
                            <img
                                className="contacts--icon"
                                src="./assets/icon-website.svg"
                                alt="link icon"
                                aria-hidden="false"
                                role="img"
                            />
                            <p className="contact">{data.blog ? data.blog : "Not Available"}</p>
                        </div>
                        <div className="contacts--divs">
                            <img
                                className="contacts--icon"
                                src="./assets/icon-twitter.svg"
                                alt="twitter icon"
                                aria-hidden="false"
                                role="img"
                            />
                            <p className="contact">{data.twitter_username ? data.twitter_username : "Not Available"}</p>
                        </div>
                        <div className="contacts--divs">
                            <img
                                className="contacts--icon"
                                src="./assets/icon-company.svg"
                                alt="build icon"
                                aria-hidden="false"
                                role="img"
                            />
                            <p className="contact">{data.company ? data.company : "Not Available"}</p>
                        </div>
                    </div>
                </main>
            </div>
        </div>
    )
}

//Render
const app = document.getElementById('root');
const root = ReactDOM.createRoot(app);
root.render(<App />)