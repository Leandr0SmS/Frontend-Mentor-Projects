const { useState, useEffect } = React;

function App() {
    const [data, setData] = useState(
        {
            id: 117,
            advice: "It is easy to sit up and take notice, what's difficult is getting up and taking action."
        }
    );
    const [get, setGet] = useState(0);
    function handleClick() {
        setGet(get => get ++)
    }
    useEffect(() => {
        fetch("https://api.adviceslip.com/advice")
            .then(res => res.json())
            .then(data => setData(data.slip))
    }, [get])
    console.log({get, data}) ///// Checkdata
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
            <div className="buttom" onClick={handleClick}>
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