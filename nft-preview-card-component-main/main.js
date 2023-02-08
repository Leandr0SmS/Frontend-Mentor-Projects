function Main (props) {
    return (
        <main>
            <div clasName="nft">
                <img/>
                <h1 className="heading">{props.heading}</h1>
                <p clasName="text">{props.text}</p>
            </div>
        </main>
    )
}

function Footer (props) {
    return (
        <div>
            Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>. 
            Coded by <a href="#">{props.name}</a>.
        </div>
    )
}

function App () {
    return (
        <Footer name="Leandro Simões" />
    )
}

const app = document.getElementById('root');
const root = ReactDOM.createRoot(app);
root.render(<App />);