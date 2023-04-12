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
    return (
        <div className="app">
            <header className="header">
                <h1 className="title">devfinder</h1>
                
            </header>
            <div className="search"></div>
        </div>
    )
}

//Render
const app = document.getElementById('root');
const root = ReactDOM.createRoot(app);
root.render(<App />)