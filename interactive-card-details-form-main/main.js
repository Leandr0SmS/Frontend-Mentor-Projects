/*
  Thank you!
  We've added your card details
  Continue
*/
function Cards() {
    return (
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
    )
}

function Form(props) {
    return (
        <form 
            className="form"
            onSubmit={props.handleSubmit}
        >
            <label 
                className="label"
                htmlFor="name"
            >Cardholder Name</label>
            <input
                className="input"
                name="name"
                id="name"
                placeholder="e.g. Jane Appleseed"
                onChange={props.onchange}
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
                onChange={props.onchange}
            />
            <div className="form--expDate--cvc--div">
                <div className="form--expDate--label--div">
                    <label
                        className="label"
                    >Exp. Date (MM/YY)</label>
                    <div className="form--expDate--div">
                        <input
                            className="input"
                            name="mm"
                            id="mm"
                            placeholder="MM"
                            onChange={props.onchange}
                        />
                        <input
                            className="input"
                            name="yy"
                            id="yy"
                            placeholder="YY"
                            onChange={props.onchange}
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
                        name="cvc"
                        id="cvc"
                        placeholder="e.g. 123"
                        onChange={props.onchange}
                    />
                </div>
            </div>
            <button
                className="btn"
                id="btn"
                name="btn"
                onClick={props.onclick}
            >Confirm</button>
        </form>
    )
}

function App() {
    function handleSubmit(e) {
        e.preventDefault();
    }
    const [formData, setformData] = React.useState(
        {
            name: {
                value: "",
                error: false
            },
            number: {
                value: "",
                error: false
            },
            mm: {
                value: "",
                error: false
            },
            yy: {
                value: "",
                error: false
            },
            cvc: {
                value: "",
                error: false
            }
        }
    );
    function handleChange(event) {
        const {name, value} = event.target;
        setformData(prevFormState => ({
            ...prevFormState,
            [name]: {
                ...prevFormState[name],
                value: value,
            }
        })) 
    };
    function formValidation() {
        for (let prop in formData) {
            if (formData[prop].value) {
                setformData(prevFormState => ({
                    ...prevFormState,
                    [prop]: {
                        ...prevFormState[prop],
                        error: false,
                    }
                }))
            } else {
                setformData(prevFormState => ({
                    ...prevFormState,
                    [prop]: {
                        ...prevFormState[prop],
                        error: true,
                    }
                }))
            }
        }
    }
    console.log(formData); // delete!!
    return (
        <div className="app">
            <Cards />
            <Form
                handleSubmit={handleSubmit}
                onchange={handleChange}
                onclick={formValidation}
            />
        </div>
    )
}

//Render
const app = document.getElementById('root');
const root = ReactDOM.createRoot(app);
root.render(<App />);