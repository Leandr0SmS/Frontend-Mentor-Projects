//Adjust data format
function dateFormat(inputDate) {
    const date = new Date(inputDate);
    const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    const day = date.getUTCDate();
    const month = monthNames[date.getUTCMonth()];
    const year = date.getUTCFullYear();
    return `${day} ${month} ${year}`;
};

function App() {

    //State to dark mode
    const [colorMode, setColorMode] = React.useState(true);
    function handleColorMode() {
        setColorMode(p => !p);
    };

    // Looknig for color mode of the user
    React.useEffect(() => {
        const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
        mediaQuery.matches ? setColorMode(false) : setColorMode(true);
    }, []);

    //Form State
    const [formData, setFormData] = React.useState("");
    //Data State
    const [data, setData] = React.useState("");
    //Error state
    const [error, setError] = React.useState(false);
    // State to trigger fetch data from API
    const [get, setGet] = React.useState(0);

    function handleClick() {
        setGet(get => get + 1);
    };

    function handleInputChange(e) {
        setFormData(e.target.value);
        setError(false);
    };

    //Fetch data
    React.useEffect(() => {
        fetch(`https://api.github.com/users/${formData ? formData : "octocat"}`)
            .then(res => res.json())
            .then(data => setData(data))
    }, [get]);
    //Handle error from fetch
    React.useEffect(() => {
        if (data.message === "Not Found") {
            setError(true);
            fetch(`https://api.github.com/users/octocat`)
                .then(res => res.json())
                .then(data => setData(data))
        }
    }, [data]);
    console.log(data)
    return (
        <div className={colorMode ? "bg bg-light" : "bg-dark bg"}>
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
                        onChange={handleInputChange}
                    />
                    {error && <p className="error--text">No results</p>}
                    <button
                        className="btn"
                        onClick={handleClick}
                    >
                        Search
                    </button>
                </form>
                <main className={colorMode ? "user-light user" : "div-dark user"}>
                    <div className="grid">
                        <img
                            className="user-img"
                            src={data.avatar_url}
                            alt="user image"
                            aria-hidden="false"
                            role="img"
                        />
                        <div className="user--infos">
                            <div className="flex-div-name">
                                <h1 className="name">{data.name ? data.name : data.login}</h1>
                                <p className="user-a">@{data.login}</p>
                            </div>
                            <div className="created--date--div">
                                <p 
                                    className={colorMode ? "created--date blue-gray-light" : "created--date"}
                                >
                                    Joined {dateFormat(data.created_at)}
                                </p>
                            </div>
                        </div>
                        <p className={colorMode ? "bio blue-gray-light" : "bio"}>{data.bio ? data.bio : "This profile has no bio"}</p>
                        <div className={colorMode ? "user--numbers bg-light" : "user--numbers bg-dark"}>
                            <div className="div--num">
                                <p className={colorMode ? "number--text blue-gray-light" : "number--text font-dark"}>Repos</p>
                                <p className="numbers">{data.public_repos}</p>
                            </div>
                            <div className="div--num">
                                <p className={colorMode ? "number--text blue-gray-light" : "number--text font-dark"}>Followers</p>
                                <p className="numbers">{data.followers}</p>
                            </div>
                            <div className="div--num">
                                <p className={colorMode ? "number--text blue-gray-light" : "number--text font-dark"}>Following</p>
                                <p className="numbers">{data.following}</p>
                            </div>
                        </div>
                        <div className={colorMode ? "user--contacts blue-gray-light" : "user--contacts font-dark"}>
                            <div 
                                className="contacts--divs"
                                style={data.location ? {opacity: 1} : {opacity: 0.5}}
                            >
                                <img
                                    className={colorMode ? "contacts--icon" : "icon--white"}
                                    src="./assets/icon-location.svg"
                                    alt="location spot icon"
                                    aria-hidden="false"
                                    role="img"
                                />
                                <p 
                                    className="contact"
                                >
                                    {data.location ? data.location : "Not Available"}
                                </p>
                            </div>
                            <div 
                                className="contacts--divs" 
                                style={data.twitter_username ? {opacity: 1} : {opacity: 0.5}}
                            >
                                <img
                                    className={colorMode ? "contacts--icon" : "icon--white"}
                                    src="./assets/icon-twitter.svg"
                                    alt="twitter icon"
                                    aria-hidden="false"
                                    role="img"
                                />
                                <a 
                                    className="contact"
                                    href={data.twitter_username ? data.twitter_username : ""}
                                >
                                    {data.twitter_username ? data.twitter_username : "Not Available"}
                                </a>
                            </div>
                            <div 
                                className="contacts--divs"
                                style={data.blog ? {opacity: 1} : {opacity: 0.5}}
                            >
                                <img
                                    className={colorMode ? "contacts--icon" : "icon--white"}
                                    src="./assets/icon-website.svg"
                                    alt="link icon"
                                    aria-hidden="false"
                                    role="img"
                                />
                                <a 
                                    className="contact"
                                    href={data.blog ? data.blog : ""}
                                >
                                    {data.blog ? data.blog : "Not Available"}
                                </a>
                            </div>
                            <div 
                                className="contacts--divs"
                                style={data.company ? {opacity: 1} : {opacity: 0.5}}
                            >
                                <img
                                    className={colorMode ? "contacts--icon" : "icon--white"}
                                    src="./assets/icon-company.svg"
                                    alt="build icon"
                                    aria-hidden="false"
                                    role="img"
                                />
                                <a 
                                    className="contact"
                                    href={data.company ? `https://github.com/${data.company.replace(/[@]/g, '')}` : ""}
                                >
                                    {data.company ? data.company : "Not Available"}
                                </a>
                            </div>
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