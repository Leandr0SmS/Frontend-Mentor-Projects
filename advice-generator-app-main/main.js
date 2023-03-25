function App() {
    const [data, setData] = React.useState({});
    const [get, setGet] = React.useState(1)
    React.useEffect(() => {
        fetch(`https://api.adviceslip.com/advice/${get}`)
            .then(res => res.json())
            .then(data => setData(data.slip))
    }, [get])
    return (
        <div>
            <h1>{data.advice}</h1>
            <button onClick={() => setGet(c => c + 1)}>New Advise: {`${get}`}</button>
        </div>
    )
}
//Render
const app = document.getElementById('root');
const root = ReactDOM.createRoot(app);
root.render(<App />)