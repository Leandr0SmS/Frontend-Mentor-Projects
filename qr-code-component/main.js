
class Img extends React.Component {
    render() {
        return (
            <img id="image" src="./images/image-qr-code.png" alt="QR code to frontendmentor.io"></img>
        );
    }
}

class Text extends React.Component {
    render() {
        return (
            <div className="div-text">
                <h1 className="title">Improve your front-end skills by building projects</h1>
                <p className="text">Scan the QR code to visit Frontend Mentor and take your coding skills to the next level</p>
            </div>
        )
    }
}

function App() {
    return (
        <div className="card">
            <Img />
            <Text />
        </div>
    )
}

const app = document.getElementById('app');
const root = ReactDOM.createRoot(app);
root.render(<App />);