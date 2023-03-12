/*adamkeyes

  Nice to meet you! I'm Adam Keyes.

  Based in the UK, I'm a front-end developer passionate about 
  building accessible web apps that users love.

  Contact me

  HTML
  4 Years Experience

  CSS
  4 Years Experience

  JavaScript
  4 Years Experience

  Accessibility
  4 Years Experience

  React
  3 Years Experience

  Sass
  3 Years Experience

  Projects

  Contact me

  Design portfolio
  HTML CSS
  View project
  View code

  E-learning landing page
  HTML CSS
  View project
  View code

  Todo web app
  HTML CSS JavaScript
  View project
  View code

  Entertainment web app
  HTML CSS JavaScript
  View project
  View code

  Memory Game
  HTML CSS JavaScript
  View project
  View code

  Art gallery showcase
  HTML CSS JavaScript
  View project
  View code

  Contact

  I would love to hear about your project and how I could help. Please 
  fill in the form, and I’ll get back to you as soon as possible.

  Name
  Email
  Message

  Send message

  adamkeyes */

function Header() {
    return (
        <header className="header">
            <div className="top--header">
                <h3>adamkeyes</h3>
                <div className="icon--div">
                    <a>
                        <img src="./assets/images/icon-frontend-mentor.svg" alt="Frontend Mentor icon"/>
                    </a>
                    <a>
                        <img src="./assets/images/icon-github.svg" alt="GitHub icon"/> 
                    </a>
                    <a>
                        <img src="./assets/images/icon-linkedin.svg" alt="Linkedin icon"/>
                    </a>
                    <a>
                        <img src="./assets/images/icon-twitter.svg" alt="Twitter icon"/>
                    </a>
                </div>
            </div>
            <div className="profile--div">
                <img className="profile-img" src="./assets/images/image-profile-desktop.webp"/>
                <img className="circle" src="./assets/images/pattern-circle.svg"/>
            </div>
        </header>
    )
}

function Page() {
  return (
    <div className="page">
        <Header />
    </div>
  )
}

//render
const page = document.getElementById('root');
const root = ReactDOM.createRoot(page);
root.render(<Page />)