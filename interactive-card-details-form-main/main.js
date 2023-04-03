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
    function NumberOrBlankError(props) {
        if (props.typeOfError === "format") {
            return <p className="error">Wrong format, numbers only</p>
        } else if (props.typeOfError === "blank") {
            return <p className="error">Can't be blank</p>
        }
    }
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
                    className={props.nameError ? "error--border input" : "normal--border input"}
                    type="text"
                    name="name"
                    id="name"
                    value={props.nameValue}
                    placeholder="e.g. Jane Appleseed"
                    onChange={props.onchange}
                />
                {props.nameError === "blank" && <p className="error">Can't be blank</p>}
            </div>
            <div className="input--div">
                <label 
                    htmlFor="number"
                    className="label"
                >Card Number</label>
                <input
                    className={props.numberError ? "error--border input" : "normal--border input"}
                    type="text"
                    name="number"
                    id="number"
                    value={props.numberValue}
                    placeholder="e.g. 1234 5678 9123 0000"
                    maxLength="16"
                    onChange={props.onchange}
                />
                {props.numberError && <NumberOrBlankError typeOfError={props.numberError} />}
            </div>
            <div className="form--expDate--cvc--div">
                <div className="form--expDate--label--div">
                    <label
                        className="label"
                    >Exp. Date (MM/YY)</label>
                    <div className="form--expDate--div">
                        <input
                            className={props.mmError ? "error--border input" : "normal--border input"}
                            type="text"
                            name="mm"
                            id="mm"
                            value={props.mmValue}
                            placeholder="MM"
                            maxLength="2"
                            onChange={props.onchange}
                        />
                        <input
                            className={props.yyError ? "error--border input" : "normal--border input"}
                            type="text"
                            name="yy"
                            id="yy"
                            value={props.yyValue}
                            placeholder="YY"
                            maxLength="2"
                            onChange={props.onchange}
                        />
                    </div>
                    {(props.mmError || props.yyError) && <NumberOrBlankError typeOfError={props.mmError || props.yyError} />}
                </div>
                <div className="form--CVC--div">
                    <label
                        className="label" 
                        htmlFor="e.g."
                    >CVC</label>
                    <input
                        className={props.cvcError ? "error--border input" : "normal--border input"}
                        type="text"
                        name="cvc"
                        id="cvc"
                        value={props.cvcValue}
                        placeholder="e.g. 123"
                        maxLength="3"
                        onChange={props.onchange}
                    />
                    {props.cvcError && <NumberOrBlankError typeOfError={props.cvcError} />}
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
function Thankyou(props) {
    return (
        <div className="thankyou--div">
            <img
                className="check--icon"
                src="./images/icon-complete.svg"
                alt="checked icon"
                aria-hidden="false"
                role="img"
            />
            <h1 className="thankyou--title">THANK YOU!</h1>
            <p className="thankyou--text">We've added your card details</p>
            <button 
                className="btn"
            >Continue</button>
        </div>
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
    const [check, setCheck] = React.useState(false);
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
        let isError = false;
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
                                error: "format",
                            }
                        }))
                        isError = true;
                    }
                } 
            } else {
                setformData(prevFormState => ({
                    ...prevFormState,
                    [prop]: {
                        ...prevFormState[prop],
                        error: "blank",
                    }
                }))
                isError = true;
            }
        }
        console.log(isError)
        if (!isError) return setCheck(p => !p);
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
            {
                check
                ?<Thankyou />
                :<Form
                    nameValue={formData.name.value}
                    nameError={formData.name.error}
                    numberValue={formData.number.value}
                    numberError={formData.number.error}
                    mmValue={formData.mm.value}
                    mmError={formData.mm.error}
                    yyValue={formData.yy.value}
                    yyError={formData.yy.error}
                    cvcValue={formData.cvc.value}
                    cvcError={formData.cvc.error}
                    handleSubmit={handleSubmit}
                    onchange={handleChange}
                    onclick={formValidation}
                />
            }
        </div>
    )
}
//Render
const app = document.getElementById('root');
const root = ReactDOM.createRoot(app);
root.render(<App />);