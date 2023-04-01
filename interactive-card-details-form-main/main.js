/*
  Thank you!
  We've added your card details
  Continue
*/
function Cards(props) {
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
                <h2 className="card--number">{props.numberValue ? props.numberValue : "0000 0000 0000 0000"}</h2>
                <div className="card--name--date--div">
                    <p className="card--name">{props.nameValue ? props.nameValue : "JANE APPLESEED"}</p>
                    <p className="card--expDate">{props.mmValue ? props.mmValue : "00"}/{props.yyValue ? props.yyValue : "00"}</p>
                </div>
            </div>
            <div className="card--back--div">
                <p className="card--CVC">{props.cvcValue ? props.cvcValue : "000"}</p>
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
            <div className="input--div">
                <label 
                    className="label"
                    htmlFor="name"
                >Cardholder Name</label>
                <input
                    className="input"
                    name="name"
                    id="name"
                    value={props.nameValue}
                    placeholder="e.g. Jane Appleseed"
                    onChange={props.onchange}
                />
                {props.nameError && <p className="blank--error error">Can't be blank</p>}
            </div>
            <div className="input--div">
                <label 
                    htmlFor="number"
                    className="label"
                >Card Number</label>
                <input
                    className="input"
                    name="number"
                    id="number"
                    value={props.numberValue}
                    placeholder="e.g. 1234 5678 9123 0000"
                    onChange={props.onchange}
                />
            </div>
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
                            value={props.mmValue}
                            placeholder="MM"
                            onChange={props.onchange}
                        />
                        <input
                            className="input"
                            name="yy"
                            id="yy"
                            value={props.yyValue}
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
                        value={props.cvcValue}
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
    function numberValidation(number) {
        let re = /^\d+$/;
        return re.test(number) && true; 
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
                value: value,
                error: false
            }
        })) 
    };
    function formValidation() {
        for (let prop in formData) {
            if (formData[prop].value.trim().length !== 0) {
                if (prop !== "name") {
                    if (numberValidation(formData[prop].value)) {
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
    return (
        <div className="app">
            <Cards
                nameValue={formData.name.value}
                numberValue={formData.number.value}
                mmValue={formData.mm.value}
                yyValue={formData.yy.value}
                cvcValue={formData.cvc.value}
            />
            <Form
                nameValue={formData.name.value}
                numberValue={formData.number.value}
                mmValue={formData.mm.value}
                yyValue={formData.yy.value}
                cvcValue={formData.cvc.value}
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