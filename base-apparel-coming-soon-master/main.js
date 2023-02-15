/*
  We're coming soon

  Hello fellow shoppers! We're currently building our new fashion store. 
  Add your email below to stay up-to-date with announcements and our launch deals.

  Email Address
 */

function Header () {
    return (
        <img
            src=".\images\logo.svg"
            alt="logo Base Apparel" 
        />
    )
}

function Main () {
    return (
        <main>
            <h1>
                WE'RE
                <span> COMING SOON</span> 
            </h1>
            <p></p>
        </main>
    )
}

function App () {
    return (
        <Header />
    )
}

// Render
const app = document.getElementById('root');
const root = ReactDOM.createRoot(app);
root.render(<App />);