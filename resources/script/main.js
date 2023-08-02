const { cretateRoot } = ReactDOM

const App = () => {
    return (
        <header>
            <h1 class="heading">Frontend Mentor Challenges</h1>
            <h2 class="heading">Leandro Simões</h2>
        </header>
    )
}

//Render

const app = document.getElementById('root');
const root = cretateRoot(app)
root.render(<App/>)