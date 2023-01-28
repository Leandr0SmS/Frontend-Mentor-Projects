

export class Img extends React.Component {
    render() {
        return (
            <picture>
                <img src={src} alt="QR-Code"></img>
            </picture>
        );
    }
}

export class Text extends React.Component {
    render() {
        return (
            <div>
                <h2 className="title">Improve your front-end skills by building projects</h2>
                <p className="text">Scan the QR code to visit Frontend Mentor and take your coding skills to the next level</p>
            </div>
        )
    }
}
