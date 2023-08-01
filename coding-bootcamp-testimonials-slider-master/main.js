import { users_data } from "./data/data.js";
const { useState, useEffect } = React;
const { createRoot } = ReactDOM;

const Buttons = ({ handlePrevClick, handleNextClick }) => {
    return (
        <div className="btns">
            <button
                id="prev"
                className="btn"
                type="button"
                onClick={handlePrevClick}
                onTouchStart={handlePrevClick}
            >
                <img
                    id="prev-icon"
                    className="btn-icon"
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
                onTouchStart={handleNextClick}
            >
                <img
                    id="next-icon"
                    className="btn-icon"
                    src="./images/icon-next.svg"
                    alt="next icon"
                    aria-hidden="false"
                    role="img"
                />
            </button>
        </div>
    )
};

const Slide = ({ slide_text, slide_image_src, slide_user_name, slide_role, children }) => {
    return (
        <div className="container">
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
                {children}
            </div>
        </div>
    )
}

const App = () => {

    const [slide, setSlide] = useState(0);

    const handleNextClick = () => setSlide(s => s == (users_data.length - 1) ? s : s + 1);

    const handlePrevClick = () => setSlide(s => s == 0 ? 0 : s - 1);

    const handleKeyDown = (e) => {
        if (e.key == 'ArrowRight') handleNextClick();
        if (e.key == 'ArrowLeft') handlePrevClick();
    };

    useEffect(() => {
        document.addEventListener("keydown", handleKeyDown);
        return () => {
          document.removeEventListener("keydown", handleKeyDown);
        };
      }, []);

    const sliders = users_data.map(data => {
        return (
            <Slide
                slide_text={data.text}
                slide_user_name={data.user_name}
                slide_role={data.role}
                slide_image_src={data.src}
            >
                <Buttons
                    handlePrevClick={handlePrevClick}
                    handleNextClick={handleNextClick}
                    handleKeyDown={handleKeyDown}
                />
            </Slide>
        )
    })

    return (
        <div id="app"
        >
            {sliders[slide]}
        </div>
    )
};

//Render
const app = document.getElementById('root');
const root = createRoot(app);
root.render(<App/>);