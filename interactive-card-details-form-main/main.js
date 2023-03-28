/*
  0000 0000 0000 0000
  Jane Appleseed
  00/00

  000

  Cardholder Name
  e.g. Jane Appleseed

  Card Number
  e.g. 1234 5678 9123 0000

  Exp. Date (MM/YY)
  MM
  YY

  CVC
  e.g. 123

  Confirm

  <!-- Completed state start -->

  Thank you!
  We've added your card details
  Continue
*/

function App() {
    return (
        <div className="app">
            <div className="cards--div">
                <div className="card--front--div">
                    <img
                        className="card--logo"
                        src="./images/card-logo.svg"
                        alt="card logo"
                        aria-hidden="false"
                        role="img"
                    />
                    <h2 className="card--number">0000 0000 0000 0000</h2>
                    <div className="card--name--date--div">
                        <p className="card--name">Jane Appleseed</p>
                        <p className="card--expDate">00/00</p>
                    </div>
                </div>
                <div className="card--back--div">
                    <p className="card--CVC">000</p>
                </div>
            </div>
            <form className="form">
                <label 
                    className="label"
                    htmlFor="name"
                >Cardholder Name</label>
                <input
                    className="input"
                    name="name"
                    id="name"
                    placeholder="e.g. Jane Appleseed"
                />
                <label 
                    htmlFor="number"
                    className="label"
                >Card Number</label>
                <input
                    className="input"
                    name="number"
                    id="number"
                    placeholder="e.g. 1234 5678 9123 0000"
                />
                <div className="form--expDate--cvc--div">
                    <div className="form--expDate--label--div">
                        <label
                            className="label"
                        >Exp. Date (MM/YY)</label>
                        <div className="form--expDate--div">
                            <input
                                className="input"
                                name="MM"
                                id="MM"
                                placeholder="MM"
                            />
                            <input
                                className="input"
                                name="YY"
                                id="YY"
                                placeholder="YY"
                            />
                        </div>
                    </div>
                    <div className="form--CVC--div">
                        <label
                            className="label" 
                            htmlFor="e.g."
                        >CVC</label>
                        <input
                            className="input"
                            name="eg"
                            id="eg"
                            placeholder="e.g. 123"
                        />
                    </div>
                </div>
                <button
                    className="btn"
                    id="btn"
                    name="btn"
                >Confirm</button>
            </form>
        </div>
    )
}

//Render
const app = document.getElementById('root');
const root = ReactDOM.createRoot(app);
root.render(<App />);