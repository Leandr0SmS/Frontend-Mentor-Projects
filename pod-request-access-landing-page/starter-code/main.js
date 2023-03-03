/*  
Publish your podcasts everywhere.

Upload your audio to Pod with a single click. We’ll then distribute your podcast to Spotify, 
Apple Podcasts, Google Podcasts, Pocket Casts and more!

Request access 
*/

function App() {
    return (
        <div className="app">
            <header>
                <img alt="logo-pod" src=".\assets\desktop\logo.svg"/>
            </header>
            <main className="main">
                <h1>
                    Publish your podcasts <span>everywhere.</span>
                </h1>
                <p>
                    Upload your audio to Pod with a single click. We’ll then distribute your podcast to Spotify, 
                    Apple Podcasts, Google Podcasts, Pocket Casts and more!
                </p>
                <button/>
                <div className="podcasts--apps">
                    <img src="./assets/desktop/spotify.svg"/>
                    <img src="./assets/desktop/apple-podcast.svg"/>
                    <img src="./assets/desktop/google-podcasts.svg"/>
                    <img src="./assets/desktop/pocket-casts.svg"/>
                </div>
            </main>
        </div>
    )
}

// Render
const app = document.getElementById('root');
const root = ReactDOM.createRoot(app);
root.render(<App />)