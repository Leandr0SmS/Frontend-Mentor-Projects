const Calculator = (props) => {
    return (
        <div className="calculator">
            <div className="form">
                <div className="bill--div">
                    <p className="label">Bill</p>
                    <div className="input--div">
                        <img
                            className="input-icon"
                            src="./images/icon-dollar.svg"
                            alt="dollar icon"
                            aria-hidden="false"
                            role="img"
                        />
                        <input
                            className="inputs"
                            type="text"
                            placeholder="0.00"
                            name="bill"
                            value={props.billValue}
                            onChange={props.onChange}
                        />
                    </div>
                </div>
                <div className="tip--div">
                    <p className="label label--tips">Select Tip %</p>
                    <div className="tips">
                        <div 
                            className={props.selected[5] ? "tip-selected tip" : "tip"}
                            name="5"
                            value={5}
                            onClick={props.handleTipClick}
                        >5%</div>
                        <div 
                            className={props.selected[10] ? "tip-selected tip" : "tip"}
                            name="10"
                            value={10}
                            onClick={props.handleTipClick}
                        >10%</div>
                        <div 
                            className={props.selected[15] ? "tip-selected tip" : "tip"}
                            name="15"
                            value={15}
                            onClick={props.handleTipClick}
                        >15%</div>
                        <div 
                            className={props.selected[25] ? "tip-selected tip" : "tip"}
                            name="25"
                            value={25}
                            onClick={props.handleTipClick}
                        >25%</div>
                        <div 
                            className={props.selected[50] ? "tip-selected tip" : "tip"}
                            name="50"
                            value={50}
                            onClick={props.handleTipClick}
                        >50%</div>
                        <div 
                            className="custom"
                            onClick={props.handleTipClick}
                        >
                            <input
                                className="tip--input"
                                type="text"
                                name="custom"
                                placeholder="Custom"
                                value={props.tipCustomValue}
                                onChange={props.ontipCustomChange}
                            />
                        </div>
                    </div>
                </div>
                <div className="people--div">
                    <p className="label">Number of People</p>
                    <div className="input--div">
                        <img
                            className="input-icon"
                            src="./images/icon-person.svg"
                            alt="person icon"
                            aria-hidden="false"
                            role="img"
                        />
                        <input
                            className="inputs"
                            type="text"
                            placeholder="0"
                            name="people"
                            value={props.peopleValue}
                            onChange={props.onChange}
                        />
                    </div>
                </div>
            </div>
            <div className="results">
                <div className="result--numbers--div">
                    <div className="result--numbers">
                        <div className="result--label">
                            <p className="result--label--text--01">Tip Amount</p>
                            <p className="result--label--text--02">/ person</p>
                        </div>
                        <div className="result">
                            <h1>${props.tipAmount}</h1>
                        </div>
                    </div>
                    <div className="result--numbers">
                        <div className="result--label">
                            <p className="result--label--text--01">Total</p>
                            <p className="result--label--text--02">/ person</p>
                        </div>
                        <div className="result">
                        <img/>
                            <h1>${props.total}</h1>
                        </div>
                    </div>
                </div>
                <div className="buttons">
                    <div className="btn" onClick={props.c}>
                        C
                    </div>
                    <div className="btn" onClick={props.reset}>
                        RESET
                    </div>
                </div>
            </div>
        </div>
    )
}

const App = () => {

    const [tipSelected, setTipSelected] = React.useState({
        "5": false,
        "10": false,
        "15": false,
        "25": false,
        "50": false,
        "custom": false,
        "tipSelected": 0
    })

    const [data, setData] = React.useState({
        "bill": "",
        "tip": 0,
        "people": "",
        "amout": 0.00,
        "total": 0.00
    })
    const handleChange = (e) => {
        const {name, value} = e.target;
        setData(p => ({
            ...p,
            [name]: value
        }))
    }
    //const ontipCustomChange = () => {
    //    const {value} = e.target;
    //    setTipSelected(p => ({
    //        ...p,
    //        "tipSelected": value
    //    }))
    //}
    const handleTipClick = (e) => {
        const value = e.target.getAttribute('value');
        const name = e.target.getAttribute('name');
        setData(p => ({
            ...p,
            tip: value
        }));
        setTipSelected(prevState => ({
            ...Object.fromEntries(
                Object.entries(prevState).map(
                    ([key, value]) => [key, key === name ? !value : false]
                ))
        }));
    }

    const calculation = (bill, tip, people) => {
        const billFloat = parseFloat(bill);
        let tipAmount = (billFloat/100) * parseFloat(tip);
        let totalPerson = (billFloat + tipAmount) / people;
        let tipAmountPerson = (tipAmount / people);
        setData((p) => ({
            ...p, 
            "amout": tipAmountPerson, 
            "total": totalPerson
        }))
    }

    const reset = () => {
        setData({
            "bill": "",
            "tip": 0.00,
            "people": "",
            "amout": 0.00,
            "total": 0.00
        })
    }
    console.log(tipSelected)//------------------------>Delete
    console.log(data)//------------------------>Delete

    return (
        <div className="app">
            <img
                className="logo"
                src="./images/logo.svg"
                alt="logo of splitter"
                aria-hidden="false"
                role="img"
            />
            <Calculator
                //inputs
                billValue={data.bill}
                onChange={handleChange}
                selected={tipSelected}
                handleTipClick={handleTipClick}
                peopleValue={data.people}
                //tipCustomValue={tipSelected.tipSelected}
                //ontipCustomChange={ontipCustomChange}
                //resultes
                tipAmount={data.amout.toFixed(2)}
                total={data.total.toFixed(2)}
                //buttons
                c={() => calculation(data.bill, data.tip, data.people)}
                reset={reset}
            />
        </div>
    )
}

const app = document.getElementById('root');
const root = ReactDOM.createRoot(app);
root.render(<App/>)