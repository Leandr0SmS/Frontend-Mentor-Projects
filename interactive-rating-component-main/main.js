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
    
    const [select, setSelect] = React.useState(false);
    function toggleSelect() {
        setSelect(prevState => !prevState);
    }

    return (
        <div 
            className={select? "circle--grade select" : "circle--grade not-select"}
            onClick={toggleSelect}>
            {props.num}
        </div>
    )
}


function Rating() {

    const gradeArr = [1, 2, 3, 4, 5];
    const grades = gradeArr.map((item) => {
        return (
            <GradeCircle num={item} />
        )
    })

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
            <div className="grades">
                {grades}
            </div>
            <button>SUBMIT</button>
        </div>
    )
}

function App() {
    return (
        <Rating />
    )
}

const app = document.getElementById('root');
const root = ReactDOM.createRoot(app);
root.render(<App />)