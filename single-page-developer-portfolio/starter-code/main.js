const { useState } = React;

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

function NameLinks({class_Name}) {
    return (
        <div className={class_Name}>
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
                class_Name="name--links top--header"
            />
            <div className="profile--div">
                <div className="profile--div--inner">
                    <picture className="img-div">
                        <source 
                            media="(max-width:750px)" 
                            srcSet="./assets/images/image-profile-mobile.webp"
                            alt="Hero face photo"
                            aria-hidden="false"
                            role="img"
                        />
                        <source 
                            media="(max-width:1211px)" 
                            srcSet="./assets/images/image-profile-tablet.webp"
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
function View({Ishovered, live, code}) {
    return (
        <div className={Ishovered ? 'active view--div' : 'view--div'}>
            <a href={live}>View project</a>
            <a href={code}>View code</a>
        </div>
    )
}
function Project({
                    img, 
                    title, 
                    id, 
                    tools, 
                    live, 
                    code, 
                    handleMouseEnter, 
                    handleMouseLeave,
                    Ishovered,
                }) {
    const screenWidth = window.innerWidth;
    if (screenWidth < 1211) {
        return (
            <div className="project--div">
                <div 
                    className="my-image-container"
                >
                    <img
                        className="project--img"
                        src={`./assets/images/${img}`}
                        alt={title}
                        aria-hidden="false"
                        role="img"
                        id={id}
                    />
                </div>          
                <h3>{title}</h3>
                <div className="tool--div">{tools}</div>
                <View 
                        live={live}
                        code={code}
                        Ishovered={true}
                />
            </div>
        )
    }        
    return (
        <div className="project--div">
            <div 
                className="my-image-container"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
            >
                <img
                    className={Ishovered ? 'img--active project--img' : 'project--img'}
                    src={`./assets/images/${img}`}
                    alt={title}
                    aria-hidden="false"
                    role="img"
                    id={id}
                />
                <View 
                    live={live}
                    code={code}
                    Ishovered={Ishovered}
                />
            </div>          
            <h3>{title}</h3>
            <div className="tool--div">{tools}</div>
        </div>
    )
}
function Projects({projectsStateMap}) {
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

function Footer({
                    handleSubmit, 
                    nameError, 
                    name, 
                    handleChange, 
                    emailError, 
                    email, 
                    messageError, 
                    textarea, 
                    formValidation
                }) {
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
                <form 
                    className="form"
                    onSubmit={handleSubmit}
                >
                    <div className="inputs--div">
                        <input 
                            className="inputs"
                            id={nameError ? "error--input" : "name-input"}
                            type="text"
                            name="name"
                            value={name}
                            onChange={handleChange}
                            placeholder="name"
                        ></input>
                        {
                            nameError
                            && 
                            <img 
                                className="error--icon" 
                                src="./assets/images/icon-error.svg"
                                alt="Input error, please check the message error"
                            />
                        }
                        {
                            nameError
                            &&
                            <p className="error--text">Please, tell me your name</p>
                        }
                    </div>

                    <div className="inputs--div">
                        <input 
                            className="inputs"
                            id={emailError ? "error--input" : "email-input"} 
                            type="text"
                            name="email"
                            value={email}
                            onChange={handleChange}
                            placeholder="email"
                        ></input>
                        {
                            emailError
                            && 
                            <img 
                                className="error--icon" 
                                src="./assets/images/icon-error.svg"
                                alt="Input error, please check the message error"
                            />
                        }
                        {
                            emailError
                            &&
                            <p className="error--text">Sorry, invalid format here</p>
                        }
                    </div>

                    <div className="inputs--div">
                        <textarea
                            className="inputs"
                            id={messageError ? "error--input" : "message-input"}
                            type="text"
                            name="message"
                            value={textarea}
                            onChange={handleChange}
                            placeholder="message"
                        ></textarea>
                        {
                            messageError
                            && 
                            <img 
                                className="error--icon" 
                                src="./assets/images/icon-error.svg"
                                alt="Input error, please check the message error"
                            />
                        }
                        {
                            messageError
                            &&
                            <p className="error--text">Tell me about your project</p>
                        }        
                    </div>

                    <button
                        className="form--btn"
                        type="button"
                        onClick={formValidation}
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
    //Projects handle state
    const [projectState, setProjectState] = useState(projectsData);
        //Form handle state
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: ""
    })
    //Form error handle state
    const [error, setError] = useState({
        name: false,
        email: false,
        message: false
    });
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
                handleMouseEnter={() => handleMouseEnter(project.id)}
                handleMouseLeave={() => handleMouseLeave(project.id)}
            />
        )
    })
    function handleSubmit(e) {
        e.preventDefault();
    }
    function handleChange(event) {
        const {name, value} = event.target;
        setFormData(prevFormState => ({
          ...prevFormState,
          [name]: value
        }))
        setError(prevValidState => ({
            ...prevValidState,
            [name]: false
        }))
    }
    function emailValidation(email) {
        let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email) && true; 
    }
    function formValidation() {
        for (let prop in formData) {
            if (formData[prop]) {
                if (prop === "email") {
                    emailValidation(formData.email)
                        ? console.log("email ok")
                        : setError(prevState => ({...prevState, email: true}))
                }
                console.log(`${prop} of form checked`)
            } else {
                setError(prevError => ({
                    ...prevError,
                    [prop]: true
                }));
            };
        };
    }
    return (
      <div className="page">
          <Header />
          <Experience />
          <Projects 
            projectsStateMap={projectsStateMap}
          />
          <Footer
            name={formData.name}
            email={formData.email}
            textarea={formData.message}
            handleChange={handleChange}
            handleSubmit={handleSubmit}
            formValidation={formValidation}
            nameError={error.name}
            emailError={error.email}
            messageError={error.message}
          />
      </div>
    )
}
//render
const page = document.getElementById('root');
const root = ReactDOM.createRoot(page);
root.render(<Page />)