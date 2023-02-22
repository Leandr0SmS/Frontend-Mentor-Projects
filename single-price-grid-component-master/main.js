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
      <header className="header">Header</header>
    )
  }

  function Price() {
    return (
      <main className="main">Price</main>
    )
  }

  function Side() {
    return (
      <side className="side">Side</side>
    )
  }

  function App() {
    return (
        <div className="grid">
            < Header/>
            < Price/>
            < Side/>
        </div>
    )
  }

  // Render
const app = document.getElementById('root');
const root = ReactDOM.createRoot(app);
root.render(<App />);

  