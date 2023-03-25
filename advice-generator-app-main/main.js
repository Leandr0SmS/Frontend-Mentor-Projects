
function App() {
    const [data, setData] = React.useState({});
    const [get, setGet] = React.useState(1)
    React.useEffect(() => {
        fetch("https://api.adviceslip.com/advice")
            .then(res => res.json())
            .then(data => setData(data.slip))
    }, [get])
    console.log({get, data})
    return (
        <div className="container">
            <p className="advice--id">ADVICE #{data.id}</p>
            <h2 className="advice">"{data.advice}"</h2>
            <picture className="divider">
                <source 
                    media="(max-width:770px)" 
                    srcSet="./images/pattern-divider-mobile.svg"
                    alt="A line under the advice"
                    aria-hidden="false"
                    role="img"
                />
                <img
                    src="./images/pattern-divider-desktop.svg"
                    alt="A line under the advice"
                    aria-hidden="false"
                    role="img"
                />
            </picture>
            <div className="buttom" onClick={() => setGet(c => c + 1)}>
                <img
                    className="dice--icon"
                    src="./images/icon-dice.svg"
                    alt="Small dice"
                    aria-hidden="false"
                    role="icon"
                />
            </div>
        </div>
    )
}
//Render
const app = document.getElementById('root');
const root = ReactDOM.createRoot(app);
root.render(<App />)