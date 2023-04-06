/*
  Day
  DD

  Month
  MM

  Year
  YYYY

  -- years
  -- months
  -- days
*/
function App() {
    //let currentDate = new Date();
    //let cDay = currentDate.getDate()
    //let cMonth = currentDate.getMonth() + 1
    //let cYear = currentDate.getFullYear()
    //console.log(cDay);
    //console.log(cMonth);
    //console.log(cYear);
    const [currentDate, setcurrentDate] = React.useState(new Date());
    console.log(currentDate)
    function isValidDate(day, month, year) {
        const date = new Date(`${year}-${month}-${day}`);
        return (
          date.getDate() == day &&
          date.getMonth() == month - 1 &&
          date.getFullYear() == year
        );
    }

    return (
        <form className="form">
            <div className="input--div">
                <label>Day</label>
                <input
                    className="day--input"
                    type="text"
                    placeholder="DD"
                />
            </div>
            <div className="input--div">
                <label>Month</label>
                <input
                    className="month--input"
                    type="text"
                    placeholder="MM"
                />
            </div>
            <div className="input--div">
                <label>Year</label>
                <input
                    className="year--input"
                    type="text"
                    placeholder="YYYY"
                />
            </div>
            <div className="age--div">
                <h1 className="days--age">
                    <span>--</span>
                    days
                </h1>
                <h1 className="months--age">
                    <span>--</span>
                    months
                </h1>
                <h1 className="years--age">
                    <span>--</span>
                    years
                </h1>
            </div>
        </form>
    )
}

//render
const app = document.getElementById('root');
const root = ReactDOM.createRoot(app);
root.render(<App/>);