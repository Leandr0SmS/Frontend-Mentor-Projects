const octocat = {
    "login": "octocat",
    "id": 583231,
    "node_id": "MDQ6VXNlcjU4MzIzMQ==",
    "avatar_url": "https://avatars.githubusercontent.com/u/583231?v=4",
    "gravatar_id": "",
    "url": "https://api.github.com/users/octocat",
    "html_url": "https://github.com/octocat",
    "followers_url": "https://api.github.com/users/octocat/followers",
    "following_url": "https://api.github.com/users/octocat/following{/other_user}",
    "gists_url": "https://api.github.com/users/octocat/gists{/gist_id}",
    "starred_url": "https://api.github.com/users/octocat/starred{/owner}{/repo}",
    "subscriptions_url": "https://api.github.com/users/octocat/subscriptions",
    "organizations_url": "https://api.github.com/users/octocat/orgs",
    "repos_url": "https://api.github.com/users/octocat/repos",
    "events_url": "https://api.github.com/users/octocat/events{/privacy}",
    "received_events_url": "https://api.github.com/users/octocat/received_events",
    "type": "User",
    "site_admin": false,
    "name": "The Octocat",
    "company": "@github",
    "blog": "https://github.blog",
    "location": "San Francisco",
    "email": null,
    "hireable": null,
    "bio": null,
    "twitter_username": null,
    "public_repos": 8,
    "public_gists": 8,
    "followers": 8936,
    "following": 9,
    "created_at": "2011-01-25T18:44:36Z",
    "updated_at": "2023-03-22T11:21:35Z"
  }

function dateFormat(inputDate) {
    const date = new Date(inputDate);
    const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    const day = date.getUTCDate();
    const month = monthNames[date.getUTCMonth()];
    const year = date.getUTCFullYear();
    return `${day} ${month} ${year}`;
}
console.log(dateFormat(octocat.created_at));

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


    const [formData, setFormData] = React.useState("octocat");

    const [data, setData] = React.useState(octocat);
    const [get, setGet] = React.useState(0)
    React.useEffect(() => {
        fetch(`https://api.github.com/users/${formData}`)
            .then(res => res.json())
            .then(data => setData(data))
    }, [get])
    function handleClick() {
        setGet(get => get + 1)
    }

    console.log(data)
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