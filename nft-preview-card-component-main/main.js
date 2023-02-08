
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