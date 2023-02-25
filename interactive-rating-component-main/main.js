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

    const styles = {
        backgroundColor: props.clicked ? "hsl(216, 12%, 54%)" : "hsl(213, 19%, 18%)"
    }

    return (
        <div 
            className="circle--grade"
            style={styles}>
            {props.num}
        </div>
    )
}


function Rating() {

    const [grades, setGrades] = React.useState([
        {
            clicked: false,
            value: 1
        },
        {
            clicked: true,
            value: 2
        },
        {
            clicked: false,
            value: 3
        },
        {
            clicked: false,
            value: 4
        },
        {
            clicked: false,
            value: 5
        },
    ]);
    
    const num = grades.map((item) => {
        return (
            <GradeCircle num={item.value} clicked={item.clicked}/>
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