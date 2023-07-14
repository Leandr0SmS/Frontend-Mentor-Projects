import { users_data } from "./data/data.js";
const { useState } = React;
const { createRoot } = ReactDOM;

const Slide = ({ text, image_src, user_name, role }) => {
    <React.Fragment>
            <div className="text">
                <p className="testemonial">{text}</p>
                <p className="name">{user_name}</p>
                <p className="role">{role}</p>
            </div>
            <div className="hero-img-div">
                <img
                    className="hero-img"
                    src={`./images/${image_src}`}
                    alt={`image of ${user_name}`}
                    aria-hidden="false"
                    role="img"
                />
            </div>
    </React.Fragment>
}

const App = () => {

    const [slide, setSlide] = useState(0);

    const handleNextClick = (e) => setSlide(s => s + 1);

    const handlePrevClick = (e) => setSlide(s => s == 0 ? 0 : s - 1);

    console.log(slide)

    return (
        <div id="app">
            <div id="btns">
                <button
                    id="prev"
                    type="button"
                    onClick={handlePrevClick}
                >
                    <img
                        id="prev-icon"
                        src="./images/icon-prev.svg"
                        alt="preview icon"
                        aria-hidden="false"
                        role="img"
                    />
                </button>
                <button
                    id="next"
                    type="button"
                    onClick={handleNextClick}
                >
                    <img
                        id="next-icon"
                        src="./images/icon-next.svg"
                        alt="next icon"
                        aria-hidden="false"
                        role="img"
                    />
                </button>
            </div>
        </div>
    )
};

//Render
const app = document.getElementById('root');
const root = createRoot(app);
root.render(<App/>);