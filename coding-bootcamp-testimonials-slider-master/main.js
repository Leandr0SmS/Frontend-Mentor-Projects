const { useState } = React;
const { createRoot } = ReactDOM;

const App = () => {
    return (
          <React.Fragment>
            <div id="text"></div>
            <div id="hero-img"></div>
          </React.Fragment>
    )
};

//Render
const app = document.getElementById('root');
const root = createRoot(app);
root.render(<App/>);