/*
  We're coming soon

  Hello fellow shoppers! We're currently building our new fashion store. 
  Add your email below to stay up-to-date with announcements and our launch deals.

  Email Address
 */

function Footer (props) {
    return (
        <footer className="attribution">
            Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>. 
            Coded by <a href="#">{props.name}</a>.
        </footer>
    )
}

function App () {
    <div className="app">
        <Footer
            name="Leandro Simões"
        />
    </div>
}

// Render
const app = document.getElementById('root');
const root = ReactDOM.createRoot(app);
root.render(<App />);