/*Join our community

  30-day, hassle-free money back guarantee

  Gain access to our full library of tutorials along with expert code reviews. 
  Perfect for any developers who are serious about honing their skills.

  Monthly Subscription

  &dollar;29 per month

  Full access for less than &dollar;1 a day

  Sign Up

  Why Us

  Tutorials by industry experts
  Peer &amp; expert code review
  Coding exercises
  Access to our GitHub repos
  Community forum
  Flashcard decks
  New videos every week
   */

  function Header() {
    return (
      <header className="header">
        <h1 className="header--heading">Join our community</h1>
        <h2 className="header--subtitle">30-day, hassle-free money back guarantee</h2> 
        <p className="header--text">
          Gain access to our full library of tutorials along with expert code reviews. 
          Perfect for any developers who are serious about honing their skills.
        </p>
      </header>
    )
  }

  function Price() {
    return (
      <main className="main">
        <h2 className="main--heading">Monthly Subscription</h2>
        <h1 className="main--price">
          &dollar;29
          <span className="main--price--span">per month</span>
        </h1>
        <h2 className="main--subtitle">Full access for less than &dollar;1 a day</h2>
        <button className="main--btn">Sign Up</button>
      </main>
    )
  }

  function Aside() {
    return (
      <side className="aside">
        <h2>Why Us</h2>
        <ul className="aside--list">
          <li className="aside-itens">Tutorials by industry experts</li>
          <li className="aside-itens">Peer &amp; expert code review</li>
          <li className="aside-itens">Coding exercises</li>
          <li className="aside-itens">Access to our GitHub repos</li>
          <li className="aside-itens">Community forum</li>
          <li className="aside-itens">Flashcard decks</li>
          <li className="aside-itens">New videos every week</li>
        </ul>
      </side>
    )
  }

  function App() {
    return (
        <div className="grid">
            < Header/>
            < Price/>
            < Aside/>
        </div>
    )
  }

  // Render
const app = document.getElementById('root');
const root = ReactDOM.createRoot(app);
root.render(<App />);

  