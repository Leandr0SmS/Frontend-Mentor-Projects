import { challengesData } from "./resources/data/challenges.js";
const { createRoot } = ReactDOM;
const { useState } = React;

const Challenges = ({ title, link, img }) => {
    return (
        <div 
            className="challenge-card"
            key={title}    
        >
            <a className="project-link" href={`.${link}`} target="_blank">
                <img 
                    className="project-img" 
                    src={`./resources/images/${img}`}
                    alt={{title}}
                />
                <p className="project-title">{title}</p>
            </a>
        </div>
    )
};

const App = () => {

    const [slideIndex, setSlideIndex] = useState(0);

    const handleNextClick = () => setSlideIndex(i => i == (challengesData.length - 1) ? i : i + 1);

    const handlePrevClick = () => setSlideIndex(i => i == 0 ? 0 : i - 1);

    const {title, img, link} = challengesData[slideIndex];

    console.log(title)

    return (
        <React.Fragment>
            <div id="slides--div"> 
                <button
                    type="button"
                    className="btn"
                    id="btn--prev"
                    onClick={handlePrevClick}
                >
                    {'<'}
                </button>
                <button
                    type="button"
                    className="btn"
                    id="btn--next"
                    onClick={handleNextClick}
                >
                    {'>'}
                </button>
                <Challenges
                    title={title}
                    link={link}
                    img={img}
                />
            </div>

        </React.Fragment>
    )
};

//Render

const app = document.getElementById('root');
const root = createRoot(app);
root.render(<App/>);