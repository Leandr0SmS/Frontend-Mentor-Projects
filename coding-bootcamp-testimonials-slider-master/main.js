import { users_data } from "./data/data.js";
const { useState } = React;
const { createRoot } = ReactDOM;

const Slide = ({ text, image, user_name, role }) => {
    <React.Fragment>
            <div id="text"></div>
            <div id="hero-img"></div>
    </React.Fragment>
}

const App = () => {

    return (
          <div id="app">
            <div id="text"></div>
            <div id="hero-img"></div>
          </div>
    )
};

//Render
const app = document.getElementById('root');
const root = createRoot(app);
root.render(<App/>);