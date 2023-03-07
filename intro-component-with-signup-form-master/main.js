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
      lastname: "",
      email: "",
      password: ""
    }
  );
  function handleChange(event) {
    const {name, value} = event.target;
    setFormData((prevFormState) =>({
      ...prevFormState,
      [name]: value
    }))
  }
  function formValidation() {
    emailValidation(formData.email)
      ? console.log("email ok")
      : console.log("email not");
    formData.firstName
      ? console.log("name ok")
      : console.log("name not");
    formData.lastName
    ? console.log("name ok")
    : console.log("name not");
    formData.password
    ? console.log("password ok")
    : console.log("password not")
  }

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