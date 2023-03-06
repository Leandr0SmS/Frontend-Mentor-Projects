
function App() {

    const [formData, setFormData] = React.useState(
        {
            email: ""
        }
    );

    function handleChange(event) {
        setFormData(prevFormData => {
            return {
                ...prevFormData,
                [event.target.name]: event.target.value
            }
        })
    }

    return (
        <div className="app">
            <img className="logo" alt="logo-pod" src="./assets/desktop/logo.svg"/>
            <img className="dots" alt="dots pattern" src="./assets/desktop/bg-pattern-dots.svg"/>
            <main className="main">
                <h1>
                    Publish your podcasts <span>everywhere.</span>
                </h1>
                <p>
                    Upload your audio to Pod with a single click. We’ll then distribute your podcast to Spotify, 
                    Apple Podcasts, Google Podcasts, Pocket Casts and more!
                </p>
                <form className="form">
                    <input 
                        className="email"
                        type="email"
                        name="email"
                        placeholder="Email address"
                        onChange={handleChange}
                    />
                    <button 
                        className="btn"
                    >
                        Request access
                    </button>
                </form>
                <div className="podcasts--apps">
                    <img 
                        src="./assets/desktop/spotify.svg"
                        alt="spotify logo"
                        className="podcasts--logos"
                    />
                    <img 
                        src="./assets/desktop/apple-podcast.svg"
                        alt="apple podcast logo"
                        className="podcasts--logos"
                    />
                    <img 
                        src="./assets/desktop/google-podcasts.svg"
                        alt="google podcast logo"
                        className="podcasts--logos"
                    />
                    <img 
                        src="./assets/desktop/pocket-casts.svg"
                        alt="pocket cast logo"
                        className="podcasts--logos"
                    />
                </div>
            </main>
        </div>
    )
}

// Render
const app = document.getElementById('root');
const root = ReactDOM.createRoot(app);
root.render(<App />)