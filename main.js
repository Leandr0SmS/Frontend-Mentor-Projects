import { challengesData } from "./resources/data/challenges.js";
const { createRoot } = ReactDOM;

const Challenges = () => {
    const challengesDivs = challengesData.map((c) => {
        return (
            <div 
                className="challenge-card"
                key={c.title}    
            >
                <a className="project-link" href={`.${c.link}`} target="_blank">
                    <img className="project-img" src={`./resources/images/${c.img}`}/>
                    <p className="project-title">{c.title}</p>
                </a>
            </div>
        )
    });
    return (
        <main>
            {challengesDivs}
        </main>
    )
};

const App = () => {
    return (
        <React.Fragment>
            <header>
                <h1 className="heading">Frontend Mentor Challenges</h1>
                <h2 className="heading">Leandro Simões</h2>
            </header>
            <Challenges/>
        </React.Fragment>
    )
};

//Render

const app = document.getElementById('root');
const root = createRoot(app);
root.render(<App/>);