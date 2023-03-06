
function App() {

    const [formData, setFormData] = React.useState(
        {
            email: "",
            error: false
        });

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
    }

    function emailValidation() {
        let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

        if ( re.test(formData.email) ) {
            console.log(formData.email)
        }
        else {
            setFormData(prevFormData => {
                console.log(formData.email)
                return{
                    ...prevFormData,
                    error: true
                }
            })
        }
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
                    Upload your audio to Pod with a single click. We'll then distribute your podcast to Spotify, 
                    Apple Podcasts, Google Podcasts, Pocket Casts and more!
                </p>
                <form 
                    className="form"
                    onSubmit={handleSubmit}
                >
                    <input 
                        className="email"
                        type="text"
                        name="email"
                        value={formData.email}
                        placeholder="Email address"
                        onChange={handleChange}
                    />
                    {formData.error && <p id="error--msg">Oops! Please check your email</p>}
                    <button 
                        className="btn"
                        onClick={emailValidation}
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