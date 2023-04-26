/*
Bill
Select Tip %
5%
10%
15%
25%
50%
Custom
Number of People
Tip Amount
/ person
Total
/ person
Reset
*/

const Calculator = () => {
    return (
        <div className="calculator">
            <div className="form">
                <input/>
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