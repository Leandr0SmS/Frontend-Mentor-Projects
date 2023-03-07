//email validation function
function emailValidation(email) {
  let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(email) && true; 
}
function handleSubmit(e) {
  e.preventDefault();
}

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
      firstNameCheck: true,
      lastNameCheck: true,
      emailCheck: true,
      passwordCheck: true
    }
  ); 
  function handleChange(event) {
    const {name, value} = event.target;
    setFormData(prevFormState => ({
      ...prevFormState,
      [name]: value
    }))
  }
  function formValidation() {
    formData.firstName
      ? console.log("name ok")
      : setValidationData(prevSate => ({...prevSate, firstNameCheck: false}));
    formData.lastName
      ? console.log("name ok")
      : setValidationData(prevSate => ({...prevSate, lastNameCheck: false}));
    emailValidation(formData.email)
      ? console.log("email ok")
      : setValidationData(prevSate => ({...prevSate, emailCheck: false}));
    formData.password
      ? console.log("password ok")
      : setValidationData(prevSate => ({...prevSate, passwordCheck: false}));
  }
  console.log(validationData)
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
          <input
            type="text"
            placeholder="First Name"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
          />
          <input
            type="text"
            placeholder="Last Name"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
          />
          <input
            type="text"
            placeholder="Email Address"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
          <input
            type="text"
            placeholder="Password"
            name="password"
            value={formData.password}
            onChange={handleChange}
          />
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