//  ## Compoenents

// Initial Card
function Question() {
    return (
        <div>
            <div className="circle--star">
                <img src="./images/icon-star.svg" alt="star-icon"/>
            </div>
            <h2>How did we do?</h2>
            <p>
                Please let us know how we did with your support request. 
                All feedback is appreciated to help us improve our offering!
            </p>
        </div>
    )
}

function GradeCircle(props) {

    return (
        <div 
            className={props.on ? "circle--grade select" : "circle--grade not-select"}
            onClick={props.handleGradeClick}>
            {props.id}
        </div>
    )
}

function Rating(props) {

    return (
        <div className="rating">
            <div className="grades">
                {props.num}
            </div>
            <button onClick={props.handleSubmit}>SUBMIT</button>
        </div>
    )
}

// Final Card
function ThankYou(props) {
    return (
        <div className="thankyou">
            <img src=".\images\illustration-thank-you.svg"/>
            <div className="grade">
                <p>You selected {props.gradeSelected} out of 5</p>
            </div>
            <h2>Thank you!</h2>
            <p className="thankyou--text">
                We appreciate you taking the time to give a rating. If you ever need more support, 
                don't hesitate to get in touch!
            </p>
        </div>
    )
}

// App
function App() {
    //State to condition render cards
    const [submited, setsubmited] = React.useState(true);
    //State to count and slect grades
    const [grades, setGrades] = React.useState([
        {
            on: false,
            value: 1
        },
        {
            on: false,
            value: 2
        },
        {
            on: false,
            value: 3
        },
        {
            on: false,
            value: 4
        },
        {
            on: false,
            value: 5
        },
    ]);
    //function to toggle slected grades
    function toggleOn(id) {
        setGrades(prevGrades => {
            return prevGrades.map((grade) => {
                return grade.value === id ? {...grade, on: !grade.on} : {...grade, on: false}
            })
        })
    }
    //.map to rander grades circles
    const num = grades.map((item) => {
        return (
            <GradeCircle 
                id={item.value} 
                on={item.on} handleGradeClick={() => toggleOn(item.value)}
            />
        )
    })
    //.map to find the selected grade
    const gradeSelected = grades.map((item) => item.on ? item.value : undefined);

    //condition to render components
    if (submited) {
        return (
            <div className="card--rating">
                <Question />
                <Rating 
                    num={num}
                    handleSubmit={() => setsubmited(prevState => !prevState)}
                />
            </div>
        )
    } else if (!submited) {
        return (
            <div className="card--rating">
                <ThankYou gradeSelected={gradeSelected}/>
            </div>
        )
    }
}

//Render App
const app = document.getElementById('root');
const root = ReactDOM.createRoot(app);
root.render(<App />)