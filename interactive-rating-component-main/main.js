  /*

  <!-- Rating state end -->
  <!-- Thank you state start -->
  You selected <!-- Add rating here --> out of 5
  Thank you!
  We appreciate you taking the time to give a rating. If you ever need more support, 
  don’t hesitate to get in touch!
  <!-- Thank you state end -->
  */

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
            <button>SUBMIT</button>
        </div>
    )
}

function ThankYou(props) {
    return (
        <div className="thankyou">
            <img src=".\images\illustration-thank-you.svg"/>
            <div className="grade">
                <p>You selected {props.grade} out of 5</p>
            </div>
            <h2>Thank you!</h2>
            <p className="thankyou--text">
                We appreciate you taking the time to give a rating. If you ever need more support, 
                don't hesitate to get in touch!
            </p>
        </div>
    )
}

function App() {

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
            on: true,
            value: 5
        },
    ]);

    function toggleOn(id) {
        setGrades(prevGrades => {
            return prevGrades.map((grade) => {
                return grade.value === id ? {...grade, on: !grade.on} : {...grade, on: false}
            })
        })
    }
    const num = grades.map((item) => {
        return (
            <GradeCircle 
                id={item.value} 
                on={item.on} handleGradeClick={() => toggleOn(item.value)}
            />
        )
    })

    const gradeSelected = grades.map((item) => item.on ? item.value : undefined)

    return (
        <div className="card--rating">
            {/*<Question />
            <Rating num={num}/>*/}
            <ThankYou grade={gradeSelected} />
        </div>
    )
}

const app = document.getElementById('root');
const root = ReactDOM.createRoot(app);
root.render(<App />)