//email validation function
function emailValidation(email) {
  let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(email) && true; 
}
function handleSubmit(e) {
  e.preventDefault();
}

//App component
function App() {
  const [formData, setFormData] = React.useState(
    {
      firstName: "",
      lastName: "",
      email: "",
      password: ""
    }
  );
  const [validationData, setValidationData] = React.useState(
    {
      firstName: false,
      lastName: false,
      email: false,
      password: false
    }
  ); 
  function handleChange(event) {
    const {name, value} = event.target;
    setFormData(prevFormState => ({
      ...prevFormState,
      [name]: value
    }))
    setValidationData(prevValidState => ({
      ...prevValidState,
      [name]: false
    }))
  }
  function formValidation() {
    // loop to active error for empty input
    for (let prop in formData) {
      if (formData[prop]) {
        if (prop === "email") {
          //check email valid
          emailValidation(formData.email)
            ? console.log("email ok")
            : setValidationData(prevSate => ({...prevSate, email: true}))
        } 
        console.log(`${prop} ok`)
      } else {
        setValidationData(prevSate => (
            {
              ...prevSate, 
              [prop]: true
            }
          )
        );
      }
    }
  }
  console.log(validationData);
  console.log(emailValidation(formData.email))
  return (
    <div className="app">
      <div className="Heading">
        <h1>
          Learn to code by watching others
        </h1>
        <p>  
          See how experienced developers solve problems in real-time. Watching scripted tutorials is great, 
          but understanding how developers think is invaluable.
        </p>
      </div>
      <div className="main">
        <div className="try-free">
          <p>
            <span>Try it free 7 days</span> then $20/mo. thereafter
          </p>
        </div>
        <form 
          className="form"
          onSubmit={handleSubmit}
        >
          <div className="input--div">
            <input
              type="text"
              placeholder="First Name"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
            />
            {
              validationData.firstName
              &&
              <p className="error">First Name cannot be empty</p>
            }
          </div>
          <div className="input--div">
            <input
              type="text"
              placeholder="Last Name"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
            />
            {
              validationData.lastName
              &&
              <p className="error">Last Name cannot be empty</p>
            }
          </div>
          <div className="input--div">
            <input
              type="text"
              placeholder="Email Address"
              name="email"
              value={formData.email}
              onChange={handleChange}
            />
            {
              validationData.email
              &&
              <p className="error">Looks like this is not an email</p>
            }
          </div>
          <div className="input--div">
            <input
              type="password"
              placeholder="Password"
              name="password"
              value={formData.password}
              onChange={handleChange}
            />
            {
              validationData.password
              &&
              <p className="error">Password cannot be empty</p>
            }
          </div>
          <button
            className="submit--btn"
            onClick={formValidation}
          >
            Claim your free trial 
          </button>
          <p> By clicking the button, you are agreeing to our<a>Terms and Services</a></p>
        </form>
      </div>
    </div>
  )
}

// Render
const app = document.getElementById('root');
const root = ReactDOM.createRoot(app);
root.render(<App />)