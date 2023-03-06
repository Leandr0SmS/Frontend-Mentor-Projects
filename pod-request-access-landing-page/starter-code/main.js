
function App() {

    const [formData, setFormData] = React.useState({email: ""});
    const [errors, setErrors] = React.useState({error: ""});

    function handleChange(event) {
        const {name, value} = event.target
        setFormData(prevFormData => {
            return {
                ...prevFormData,
                [name]: value
            }
        })
    }

    function handleSubmit(event) {
        event.preventDefault();
        const isEmail = (email) => /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email);
        if (!isEmail(formData.email)) {
            setErrors({error : "Oops! Please check your email"})
        }
    }

    console.log(errors);

    return (
        <div className="app">
            <img className="logo" alt="logo-pod" src="./assets/desktop/logo.svg"/>
            <img className="dots" alt="dots pattern" src="./assets/desktop/bg-pattern-dots.svg"/>
            <main className="main">
                <h1>
                    Publish your podcasts <span>everywhere.</span>
                </h1>
                <p>
                    Upload your audio to Pod with a single click. We'll then distribute your podcast to Spotify, 
                    Apple Podcasts, Google Podcasts, Pocket Casts and more!
                </p>
                <form 
                    className="form"
                    onSubmit={handleSubmit}
                >
                    <input 
                        className="email"
                        type="email"
                        name="email"
                        value={formData.email}
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