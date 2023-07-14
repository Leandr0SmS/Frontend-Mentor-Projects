import { users_data } from "./data/data.js";
const { useState } = React;
const { createRoot } = ReactDOM;

const Slide = ({ text, image_src, user_name, role }) => {
    <React.Fragment>
            <div className="text">
                <p className="testemonial">{text}</p>
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

    return (
          <div id="app">
            <div id="btns">
                <button
                    id="prev-btn"
                    type="button"
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
                    id="next-btn"
                    type="button"
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