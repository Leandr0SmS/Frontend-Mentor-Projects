

const projectsData = [
    {
        id: 1,
        title: "Design portfolio",
        tools: ["HTML", "CSS"],
        image:  "thumbnail-project-1-large.webp",
        live: "",
        code: "",
        active: false
    },
    {
        id: 2,
        title: "E-learning landing page",
        tools: ["HTML", "CSS"],
        image:  "thumbnail-project-2-large.webp",
        live: "",
        code: "",
        active: false
    },
    {
        id: 3,
        title: "Todo web app",
        tools: ["HTML", "CSS", "JavaScript"],
        image:  "thumbnail-project-3-large.webp",
        live: "",
        code: "",
        active: false
    },
    {
        id: 4,
        title: "Entertainment web app",
        tools: ["HTML", "CSS", "JavaScript"],
        image:  "thumbnail-project-4-large.webp",
        live: "",
        code: "",
        active: false
    },
    {
        id: 5,
        title: "Memory Game",
        tools: ["HTML", "CSS", "JavaScript"],
        image:  "thumbnail-project-5-large.webp",
        live: "",
        code: "",
        active: false
    },
    {
        id: 6,
        title: "Art gallery showcase",
        tools: ["HTML", "CSS", "JavaScript"],
        image:  "thumbnail-project-6-large.webp",
        live: "",
        code: "",
        active: false
    }
]

function NameLinks(props) {
    return (
        <div className={props.class}>
            <h3>adamkeyes</h3>
            <div className="icon--div">
                <a 
                    href="https://www.frontendmentor.io/challenges"
                    aria-label="https://www.frontendmentor.io/challenges"
                >
                    <img 
                        src="./assets/images/icon-frontend-mentor.svg" 
                        alt="Frontend Mentor icon"
                        aria-hidden="false"
                        role="img"
                    />
                </a>
                <a 
                    href="https://github.com"
                    aria-label="https://github.com"
                >
                    <img 
                        src="./assets/images/icon-github.svg" 
                        alt="GitHub icon"
                        aria-hidden="false"
                        role="img"
                    /> 
                </a>
                <a 
                    href="https://www.linkedin.com"
                    aria-label="https://www.linkedin.com/"
                >
                    <img 
                        src="./assets/images/icon-linkedin.svg" 
                        alt="Linkedin icon"
                        aria-hidden="false"
                        role="img"
                    />
                </a>
                <a 
                    href="https://twitter.com/"
                    aria-label="https://twitter.com/"
                >
                    <img 
                        src="./assets/images/icon-twitter.svg" 
                        alt="Twitter icon"
                        aria-hidden="false"
                        role="img"
                    />
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
                            media="(max-width:1211px)" 
                            srcSet="./assets/images/image-profile-tablet.webp"
                            alt="Hero face photo"
                            aria-hidden="false"
                            role="img"
                        />
                        <source 
                            media="(max-width:750px)" 
                            srcSet="./assets/images/image-profile-mobile.webp"
                            alt="Hero face photo"
                            aria-hidden="false"
                            role="img"
                        />
                        <img 
                            className="profile-img" 
                            src="./assets/images/image-profile-desktop.webp"
                            alt="Hero face photo"
                            aria-hidden="false"
                            role="img"
                        />
                    </picture>
                    <img 
                        className="circle" 
                        src="./assets/images/pattern-circle.svg"
                        alt="Pattern of circles. One above other"
                        aria-hidden="false"
                        role="img"
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

    const [projectState, setProjectState] = React.useState(projectsData);

    function handleMouseEnter(id) {
        setProjectState((prevProjectState) => {
            return prevProjectState.map(project => {
                return project.id === id ? {...project, active: true} : {...project, on: false}
            })
        });
    }
    function handleMouseLeave(id) {
        setProjectState((prevProjectState) => {
            return prevProjectState.map(project => {
                return project.id === id ? {...project, active: false} : {...project, on: false}
            })
        });
    }
    function View(props) {
        return (
            <div className={props.Ishovered ? 'active view--div' : 'view--div'}>
                <a href={props.live}>View project</a>
                <a href={props.code}>View code</a>
            </div>
        )
    }
    function Project(props) {
        const screenWidth = window.innerWidth;
        if (screenWidth < 1211) {
            return (
                <div className="project--div">
                    <div 
                        className="my-image-container"
                        onMouseEnter={() => handleMouseEnter(props.id)}
                        onMouseLeave={() => handleMouseLeave(props.id)}
                    >
                        <img
                            className="project--img"
                            src={`./assets/images/${props.img}`}
                            alt={props.title}
                            aria-hidden="false"
                            role="img"
                            id={props.id}
                        />
                    </div>          
                    <h3>{props.title}</h3>
                    <div className="tool--div">{props.tools}</div>
                    <View 
                            live={props.live}
                            code={props.code}
                            Ishovered={true}
                    />
                </div>
            )
        }
        return (
            <div className="project--div">
                <div 
                    className="my-image-container"
                    onMouseEnter={() => handleMouseEnter(props.id)}
                    onMouseLeave={() => handleMouseLeave(props.id)}
                >
                    <img
                        className={props.Ishovered ? 'img--active project--img' : 'project--img'}
                        src={`./assets/images/${props.img}`}
                        alt={props.title}
                        aria-hidden="false"
                        role="img"
                        id={props.id}
                    />
                    <View 
                        live={props.live}
                        code={props.code}
                        Ishovered={props.Ishovered}
                    />
                </div>          
                <h3>{props.title}</h3>
                <div className="tool--div">{props.tools}</div>
            </div>
        )



    }
    const projectsStateMap = projectState.map((project) => {
        const ProjectToolsMap = project.tools.map((tool) => {
            return (
                <p key={tool}>
                    {tool}
                </p>
            )
        })
        return (
            <Project 
                img={project.image}
                title={project.title}
                tools={ProjectToolsMap}
                key={project.id}
                id={project.id}
                live={project.live}
                code={project.code}
                Ishovered={project.active}
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
                {projectsStateMap}
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
        <Experience />
        <Projects />
        {/*<Footer />*/}
    </div>
  )
}
//render
const page = document.getElementById('root');
const root = ReactDOM.createRoot(page);
root.render(<Page />)