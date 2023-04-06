function App() {
    const [dayInput, setDayInput] = React.useState('');
    const [monthInput, setMonthInput] = React.useState('');
    const [yearInput, setYearInput] = React.useState('');

    const [dayAge, setDayAge] = React.useState('');
    const [monthAge, setMonthAge] = React.useState('');
    const [yearAge, setYearAge] = React.useState('');

    const handleDayChange = (event) => {
      const inputValue = event.target.value.replace(/\D/g, '');
      setDayInput(inputValue);
    };
    const handleMonthChange = (event) => {
      const inputValue = event.target.value.replace(/\D/g, '');
      setMonthInput(inputValue);
    };
    const handleYearChange = (event) => {
      const inputValue = event.target.value.replace(/\D/g, '');
      setYearInput(inputValue);
    };


    function isValidDate(day, month, year) {
        const date = new Date(`${year}-${month}-${day}`);
        return (
          date.getDate() == day &&
          date.getMonth() == month - 1 &&
          date.getFullYear() == year
        );
    }
    function ageCalculation(day, month, year) {
        let currentDate = new Date();
        let cDay = currentDate.getDate();
        let cMonth = currentDate.getMonth() + 1;
        let cYear = currentDate.getFullYear();

    }
    function handleDate(day, month, year) {
        isValidDate(day, month, year)
            ? ageCalculation(day, month, year)
            : console.log(error)
    }

    return (
        <div className="calculator">
            <form className="form">
                <div className="input--div">
                    <label>Day</label>
                    <input
                        className="day--input"
                        type="text"
                        placeholder="DD"
                        maxLength="2"
                        name="day"
                        value={dayInput}
                        onChange={handleDayChange}
                    />
                </div>
                <div className="input--div">
                    <label>Month</label>
                    <input
                        className="month--input"
                        type="text"
                        placeholder="MM"
                        maxLength="2"
                        name="month"
                        value={monthInput}
                        onChange={handleMonthChange}
                    />
                </div>
                <div className="input--div">
                    <label>Year</label>
                    <input
                        className="year--input"
                        type="text"
                        placeholder="YYYY"
                        maxLength="4"
                        name="year"
                        value={yearInput}
                        onChange={handleYearChange}
                    />
                </div>
            </form>
            <div className="btn--div">
                <hr/>
                <div 
                    className="btn"
                    onClick={() => handleDate(dayInput, monthInput, yearInput)}
                >
                    <img
                        className="card--logo"
                        src="./assets/images/icon-arrow.svg"
                        alt="arrow icon"
                        aria-hidden="false"
                        role="img"
                    />
                </div>
            </div>
            <div className="age--div">
                <h1 className="years--age">
                    <span>--</span>
                    years
                </h1>
                <h1 className="months--age">
                    <span>--</span>
                    months
                </h1>
                <h1 className="days--age">
                    <span>--</span>
                    days
                </h1>
            </div>
        </div>
    )
}

//render
const app = document.getElementById('root');
const root = ReactDOM.createRoot(app);
root.render(<App/>);