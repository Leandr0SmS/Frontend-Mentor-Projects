function App() {
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
        <form className="form">
          <input
            type="text"
            placeholder="First Name"
            name="firstName"
          />
          <input
            type="text"
            placeholder="Last Name"
            name="lastName"
          />
          <input
            type="text"
            placeholder="Email Address"
            name="email"
          />
          <input
            type="text"
            placeholder="Password"
            name="password"
          />
          <button>
            Claim your free trial 
          </button>
          <p> By clicking the button, you are agreeing to our<a>Terms and Services</a></p>
        </form>
      </div>
    </div>
  )
}

//render
const app = document.getElementById('root');
const root = ReactDOM.createRoot(app);
root.render(<App />)