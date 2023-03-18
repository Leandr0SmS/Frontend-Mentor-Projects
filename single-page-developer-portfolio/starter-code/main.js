

const projectsData = [
    {
        title: "Design portfolio",
        tools: ["HTML", "CSS"],
        image:  "thumbnail-project-1-large.webp",
        live: "",
        code: ""
    },
    {
        title: "E-learning landing page",
        tools: ["HTML", "CSS"],
        image:  "thumbnail-project-2-large.webp",
        live: "",
        code: ""
    },
    {
        title: "Todo web app",
        tools: ["HTML", "CSS", "JavaScript"],
        image:  "thumbnail-project-3-large.webp",
        live: "",
        code: ""
    },
    {
        title: "Entertainment web app",
        tools: ["HTML", "CSS", "JavaScript"],
        image:  "thumbnail-project-4-large.webp",
        live: "",
        code: ""
    },
    {
        title: "Memory Game",
        tools: ["HTML", "CSS", "JavaScript"],
        image:  "thumbnail-project-5-large.webp",
        live: "",
        code: ""
    },
    {
        title: "Art gallery showcase",
        tools: ["HTML", "CSS", "JavaScript"],
        image:  "thumbnail-project-6-large.webp",
        live: "",
        code: ""
    }
]

function NameLinks(props) {
    return (
        <div className={props.class}>
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
    )
}

function Header() {
    return (
        <header className="header">
            <NameLinks 
                class="name--links top--header"
            />
            <div className="profile--div">
                <div className="profile--div--inner">
                    <picture className="img-div">
                        <source 
                            media="(max-width:840px)" 
                            srcSet="./assets/images/image-profile-mobile.webp"
                            alt="Hero face photo"
                        />
                        <img 
                            className="profile-img" 
                            src="./assets/images/image-profile-desktop.webp"
                            alt="Hero face photo"
                        />
                    </picture>
                    <img 
                        className="circle" 
                        src="./assets/images/pattern-circle.svg"
                        alt="Pattern of circles. One above another"
                    />
                </div>
            </div>
            <div className="Heading--contact">
                <h1 className="heading">
                    Nice to meet you! I'm <span>Adam Keyes</span>.
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

function Projects() {


    function View(props) {
        return (
            <div className="view--div">
                <a href={props.live}>View project</a>
                <a href={props.code}>View code</a>
            </div>
        )
    }

    function Project(props) {
        return (
            <div className="project--div">
                <img
                    className="project--img" 
                    src={`./assets/images/${props.img}`}
                    alt={props.title}
                    />            
                <h3>{props.title}</h3>
                <div className="tool--div">{props.tools}</div>
                <View 
                    live={props.live}
                    code={props.code}
                />
            </div>
        )
    }

    const projectsMap = projectsData.map((project) => {
        
        const ProjectToolsMap = project.tools.map((tool) => {
            return (
                <p key={tool}>
                    {tool}
                </p>
            )
        })
        
        return (
            <Project 
                key={project.title}
                img={project.image}
                title={project.title}
                tools={ProjectToolsMap}
                live={project.live}
                code={project.code}
            />
        )
    })

    return (
        <main className="main">
            <div className="projects--header">
                <h1 className="projects--heading">
                    Projects
                </h1>
                <a className="link-contactMe">
                    Contact me
                </a>
            </div>
            <div className="projects--grid">
                {projectsMap}
            </div>
        </main>
    )
}

function Footer() {
    return (
        <footer className="footer">
            <div className="contact--form--div">
                <div className="contact--div">
                    <h1>Contact</h1>
                    <p>
                        I would love to hear about your project and how I could help. 
                        Please fill in the form, and I'll get back to you as soon as possible.
                    </p>
                </div>
                <form className="form">
                    <input 
                        type="text"
                        name="name"
                        placeholder="name"
                    ></input>
                    <input 
                        type="text"
                        name="email"
                        placeholder="email"
                    ></input>
                    <textarea
                        type="text"
                        name="message"
                        placeholder="message"
                    ></textarea>
                    <button
                        className="form--btn"
                    >
                        Send message
                    </button>
                </form>
            </div>
            <NameLinks 
                class="name--links bottom--header"
            />
        </footer>
    )
}

function Page() {

  return (
    <div className="page">
        <Header />
        {<Experience />}
        {/*<Projects />*/}
        {/*<Footer />*/}
    </div>
  )
}

//render
const page = document.getElementById('root');
const root = ReactDOM.createRoot(page);
root.render(<Page />)