  /*

  <!-- Rating state end -->
  <!-- Thank you state start -->
  You selected <!-- Add rating here --> out of 5
  Thank you!
  We appreciate you taking the time to give a rating. If you ever need more support, 
  don’t hesitate to get in touch!
  <!-- Thank you state end -->
  */

function GradeCircle(props) {

    return (
        <div 
            className={props.on ? "circle--grade select" : "circle--grade not-select"}
            onClick={props.handleClick}>
            {props.id}
        </div>
    )
}


function Rating() {

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
                on={item.on} handleClick={() => 
                toggleOn(item.value)}
            />
        )
    })

    return (
        <div className="rating">
            <div className="grades">
                {num}
            </div>
            <button>SUBMIT</button>
        </div>
    )
}

function App() {
    return (
        <div className="card--rating">
            <div className="circle--star">
                <img src="./images/icon-star.svg" alt="star-icon"/>
            </div>
            <h2>How did we do?</h2>
            <p>
                Please let us know how we did with your support request. 
                All feedback is appreciated to help us improve our offering!
            </p>
            <Rating />
        </div>
    )
}

const app = document.getElementById('root');
const root = ReactDOM.createRoot(app);
root.render(<App />)