const Calculator = () => {
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
                        />
                    </div>
                </div>
                <div className="tip--div">
                    <p className="label label--tips">Select Tip %</p>
                    <div className="tips">
                        <div className="tip">5%</div>
                        <div className="tip">10%</div>
                        <div className="tip">15%</div>
                        <div className="tip">25%</div>
                        <div className="tip">50%</div>
                        <div className="custom">
                            <input
                                className="tip--input"
                                type="text"
                                name="tip--custom"
                                placeholder="Custom"
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
                            <img
                                className="result-icon"
                                src="./images/icon-dollar.svg"
                                alt="dollar icon"
                                aria-hidden="false"
                                role="img"
                            />
                            <h1>0.00</h1>
                        </div>
                    </div>
                    <div className="result--numbers">
                        <div className="result--label">
                            <p className="result--label--text--01">Total</p>
                            <p className="result--label--text--02">/ person</p>
                        </div>
                        <div className="result">
                        <img/>
                            <img
                                className="result-icon"
                                src="./images/icon-dollar.svg"
                                alt="dollar icon"
                                aria-hidden="false"
                                role="img"
                            />
                            <h1>0.00</h1>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

const App = () => {
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