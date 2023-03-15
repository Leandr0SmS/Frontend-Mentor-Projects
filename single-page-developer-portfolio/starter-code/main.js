/*
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

const projectsData = [
    {
        title: "Design portfolio",
        tools: ["HTML", "CSS"],
        live: "",
        code: ""
    },
    {
        title: "E-learning landing page",
        tools: ["HTML", "CSS"],
        live: "",
        code: ""
    },
    {
        title: "Todo web app",
        tools: ["HTML", "CSS", "JavaScript"],
        live: "",
        code: ""
    },
    {
        title: "Entertainment web app",
        tools: ["HTML", "CSS", "JavaScript"],
        live: "",
        code: ""
    },
    {
        title: "Memory Game",
        tools: ["HTML", "CSS", "JavaScript"],
        live: "",
        code: ""
    },
    {
        title: "Art gallery showcase",
        tools: ["HTML", "CSS", "JavaScript"],
        live: "",
        code: ""
    }
]

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
                <div className="profile--div--inner">
                    <img className="profile-img" src="./assets/images/image-profile-desktop.webp"/>
                    <img className="circle" src="./assets/images/pattern-circle.svg"/>
                </div>
            </div>
            <div className="Heading--contact">
                <h1 className="heading">
                    Nice to meet you!<br/>I'm <span>Adam Keyes</span>.
                </h1>
                <p className="discription">
                    Based in the UK, I'm a front-end developer passionate about 
                    building accessible web apps that users love.
                </p>
                <a className="link-contactMe">
                    Contact me
                </a>
            </div>
        </header>
    )
}

function Experience() {
    return (
        <aside className="aside">
            <div className="grid--div">
                <div className="experience">
                    <h1>HTML</h1>
                    <p>4 Years Experience</p>
                </div>
                <div className="experience">
                    <h1>CSS</h1>
                    <p>4 Years Experience</p>
                </div>
                <div className="experience">
                    <h1>JavaScript</h1>
                    <p>4 Years Experience</p>
                </div>
                <div className="experience">
                    <h1>Accessibility</h1>
                    <p>4 Years Experience</p>
                </div>
                <div className="experience">
                    <h1>React</h1>
                    <p>3 Years Experience</p>
                </div>
                <div className="experience">
                    <h1>Sass</h1>
                    <p>3 Years Experience</p>
                </div>
            </div>
        </aside>
    )
}

function Projects(props) {

    return (
        <main className="projects">
            <div className="projects--header">
                <h1 className="projects--heading">
                    Projects
                </h1>
                <a className="link-contactMe">
                    Contact me
                </a>
            </div>
            <div className="project--div">
                <div className="project--img">
                    <img/>
                </div>                
                <h3></h3>
                <p></p>
            </div>
        </main>
    )
}

function Page() {
  return (
    <div className="page">
        <Header />
        <Experience />
    </div>
  )
}

//render
const page = document.getElementById('root');
const root = ReactDOM.createRoot(page);
root.render(<Page />)