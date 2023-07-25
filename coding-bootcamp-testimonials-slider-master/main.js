import { users_data } from "./data/data.js";
const { useState } = React;
const { createRoot } = ReactDOM;

const Slide = ({ slide_text, slide_image_src, slide_user_name, slide_role }) => {
    return (
        <React.Fragment>
            <div className="text">
                <p className="testemonial">{slide_text}</p>
                <p className="name">{slide_user_name}<span className="role">{slide_role}</span></p>
            </div>
            <div className="hero-img-div">
                <img
                    className="hero-img"
                    src={`./images/${slide_image_src}`}
                    alt={`image of ${slide_user_name}`}
                    aria-hidden="false"
                    role="img"
                />
            </div>
        </React.Fragment>
    )
}

const App = () => {

    const [slide, setSlide] = useState(0);

    const handleNextClick = (e) => setSlide(s => s + 1);

    const handlePrevClick = (e) => setSlide(s => s == 0 ? 0 : s - 1);

    const sliders = users_data.map(data => {
        return (
            <Slide
                slide_text={data.text}
                slide_user_name={data.user_name}
                slide_role={data.role}
                slide_image_src={data.src}
            />
        )
    })

    console.log(sliders)

    return (
        <div id="app">
            {sliders[slide]}
            <div id="btns">
                <button
                    id="prev"
                    className="btn"
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
                    className="btn"
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