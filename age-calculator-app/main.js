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
        const date = new Date(year, month - 1, day);
        console.log("isValidDate: " + date) ///// DELETE!!!!
        return (
          date.getDate() == day &&
          date.getMonth() == month - 1 &&
          date.getFullYear() == year &&
          !isNaN(date.getTime())
        );
    }
    function ageCalculation(day, month, year) {
        let currentDate = new Date();
    
        let currentYear = currentDate.getFullYear();
        let currentMonth = currentDate.getMonth() + 1; // Month is zero-based, so add 1
        let currentDay = currentDate.getDate();

        let yearDiff = currentYear - year;
        let monthDiff = currentMonth - month;
        let dayDiff = currentDay - day;

        if (monthDiff < 0 || (monthDiff === 0 && dayDiff < 0)) {
            yearDiff--;
            monthDiff += 12;
        }
        if (dayDiff < 0) {
            const daysInLastMonth = new Date(currentYear, currentMonth - 1, 0).getDate();
            dayDiff += daysInLastMonth;
            monthDiff--;
        }
        setDayAge(dayDiff);
        setMonthAge(monthDiff);
        setYearAge(yearDiff);
        return { years: yearDiff, months: monthDiff, days: dayDiff };

    }
    function handleDate(day, month, year) {
        isValidDate(day, month, year)
            ? console.log(ageCalculation(day, month, year))
            : console.log("error");
    }
    console.log({dayInput, monthInput, yearInput})  ///// DELETE!!!!
    console.log(isValidDate(dayInput, monthInput, yearInput))  ///// DELETE!!!!
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
                <hr
                    className="divider"
                />
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
                    <span>{yearAge ? yearAge : "--"}</span>
                    years
                </h1>
                <h1 className="months--age">
                    <span>{monthAge ? monthAge : "--"}</span>
                    months
                </h1>
                <h1 className="days--age">
                    <span>{dayAge ? dayAge : "--"}</span>
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