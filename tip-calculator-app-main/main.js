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
                            placeholder="0"
                            value={props.billValue}
                            onChange={props.onChange}
                        />
                    </div>
                </div>
                <div className="tip--div">
                    <p className="label label--tips">Select Tip %</p>
                    <div className="tips">
                        <div 
                            className="tip"
                            name="5"
                            value={5}
                            onClick={props.handleTipClick}
                        >5%</div>
                        <div 
                            className="tip"
                            name="10"
                            value={10}
                            onClick={props.handleTipClick}
                        >10%</div>
                        <div 
                            className="tip"
                            name="15"
                            value={15}
                            onClick={props.handleTipClick}
                        >15%</div>
                        <div 
                            className="tip"
                            name="25"
                            value={25}
                            onClick={props.handleTipClick}
                        >25%</div>
                        <div 
                            className="tip"
                            name="50"
                            value={50}
                            onClick={props.handleTipClick}
                        >50%</div>
                        <div className="custom">
                            <input
                                className="tip--input"
                                type="text"
                                name="tip--custom"
                                placeholder="Custom"
                                value={props.tipCustomValue}
                                onChange={props.onChange}
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
                            value={props.tipValue}
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
                            <h1>$0.00</h1>
                        </div>
                    </div>
                    <div className="result--numbers">
                        <div className="result--label">
                            <p className="result--label--text--01">Total</p>
                            <p className="result--label--text--02">/ person</p>
                        </div>
                        <div className="result">
                        <img/>
                            <h1>$0.00</h1>
                        </div>
                    </div>
                </div>
                <div className="reset">
                    RESET
                </div>
            </div>
        </div>
    )
}

const App = () => {

    const [data, setData] = React.useState({
        "bill": 0,
        "tip": 0,
        "people": 0,
        "amout": 0,
        "total": 0
    })

    return (
        <div className="app">
            <img
                className="logo"
                src="./images/logo.svg"
                alt="logo of splitter"
                aria-hidden="false"
                role="img"
            />
            <Calculator/>
        </div>
    )
}

const app = document.getElementById('root');
const root = ReactDOM.createRoot(app);
root.render(<App/>)