function App() {
    const [dayInput, setDayInput] = React.useState('');
    const [monthInput, setMonthInput] = React.useState('');
    const [yearInput, setYearInput] = React.useState('');

    const [dayAge, setDayAge] = React.useState('');
    const [monthAge, setMonthAge] = React.useState('');
    const [yearAge, setYearAge] = React.useState('');

    const [error, setError] = React.useState({
        dayValid: false,
        monthValid: false,
        yearValid: false,
        dayEmpty: false,
        monthEmpty: false,
        yearEmpty: false,
        dateFormat: false
    })

    const handleDayChange = (event) => {
      const inputValue = event.target.value.replace(/\D/g, '');
      setDayInput(inputValue);
      setError(p => ({...p, dayValid: false, dayEmpty: false, dateFormat: false}))
    };
    const handleMonthChange = (event) => {
      const inputValue = event.target.value.replace(/\D/g, '');
      setMonthInput(inputValue);
      setError(p => ({...p, monthValid: false, monthEmpty: false, dateFormat: false}))
    };
    const handleYearChange = (event) => {
      const inputValue = event.target.value.replace(/\D/g, '');
      setYearInput(inputValue);
      setError(p => ({...p, yearValid: false, yearEmpty: false, dateFormat: false}))
    };
    function ageCalculation(day, month, year) {
        // Helper function to check if a year is a leap year
        function isLeapYear(year) {
            return (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
        }
        let currentDate = new Date();
        let currentYear = currentDate.getFullYear();
        let currentMonth = currentDate.getMonth() + 1; // Month is zero-based, so add 1
        let currentDay = currentDate.getDate();
    
        let yearDiff = currentYear - year;
        let monthDiff = currentMonth - month;
        let dayDiff = currentDay - day;
    
        // Adjust for negative month and day differences
        if (monthDiff < 0 || (monthDiff === 0 && dayDiff < 0)) {
            yearDiff--;
            monthDiff += 12;
        }
        if (dayDiff < 0) {
            const daysInLastMonth = new Date(currentYear, currentMonth - 1, 0).getDate();
            dayDiff += daysInLastMonth;
            monthDiff--;
        }
        // Adjust for leap years
        let leapYears = 0;
        for (let year = year; year < currentYear; year++) {
            if (isLeapYear(year)) {
                leapYears++;
            }
        }
        if (isLeapYear(year) && (month < 2 || (month === 2 && day <= 28))) {
            leapYears--;
        }
        if (isLeapYear(currentYear) && currentMonth <= 2 && currentDay < 29) {
            leapYears--;
        }
        yearDiff -= leapYears;
        //setting States
        setDayAge(dayDiff);
        setMonthAge(monthDiff);
        setYearAge(yearDiff);
    }
    function isValidDate(day, month, year) {
        const currentDate = new Date();
        const inputDate = new Date(year, month - 1, day);
        return (
            inputDate.getDate() == day &&
            inputDate.getMonth() == month - 1 &&
            inputDate.getFullYear() == year &&
            inputDate <= currentDate
        );
    }
    function handleDate(day, month, year) {
        const currentDate = new Date();
        if (day.trim().length === 0) {
            return setError(p => ({...p, dayEmpty: true}))
        }
        if (day > 31) {
            return setError(p => ({...p, dayValid: true}))
        }
        if (month.trim().length === 0) {
            return setError(p => ({...p, monthEmpty: true}))
        }
        if (month > 12) {
            return setError(p => ({...p, monthValid: true}))
        }
        if (year.trim().length === 0) {
            return setError(p => ({...p, yearEmpty: true}))
        }
        if (year > currentDate.getFullYear()) {
            return setError(p => ({...p, yearValid: true}))
        }
        if (Object.values(error).every(key => !key)) {
            isValidDate(day, month, year)
            ? console.log(ageCalculation(day, month, year))
            : setError(prevState => ({
                ...prevState,
                dateFormat: true
              }));
        }
    }
    console.log(error)
    return (
        <div className="calculator">
            <form className="form">
                <div className="input--div">
                    <label className={error.day || error.dateFormat ? "error--color label" : "label"}>Day</label>
                    <input
                        className={error.day || error.dateFormat ? "input input--error--border" : "input input--normal--border"}
                        type="text"
                        placeholder="DD"
                        maxLength="2"
                        name="day"
                        value={dayInput}
                        onChange={handleDayChange}
                    />
                    {error.dayValid && <p className="error--color error--text">Must be a valid day</p>}
                    {error.dayEmpty && <p className="error--color error--text">This field is required</p>}
                    {error.dateFormat && <p className="error--color error--text">Must be a valid date</p>}
                </div>
                <div className="input--div">
                    <label className={error.month || error.dateFormat ? "error--color label" : "label"}>Month</label>
                    <input
                        className={error.month || error.dateFormat ? "input input--error--border" : "input input--normal--border"}
                        type="text"
                        placeholder="MM"
                        maxLength="2"
                        name="month"
                        value={monthInput}
                        onChange={handleMonthChange}
                    />
                    {error.monthValid && <p className="error--color error--text">Must be a valid month</p>}
                    {error.monthEmpty && <p className="error--color error--text">This field is required</p>}
                </div>
                <div className="input--div">
                    <label className={error.year || error.dateFormat ? "error--color label" : "label"}>Year</label>
                    <input
                        className={error.year || error.dateFormat ? "input input--error--border" : "input input--normal--border"}
                        type="text"
                        placeholder="YYYY"
                        maxLength="4"
                        name="year"
                        value={yearInput}
                        onChange={handleYearChange}
                    />
                    {error.yearValid && <p className="error--color error--text">Must be in the past</p>}
                    {error.yearEmpty && <p className="error--color error--text">This field is required</p>}
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
                <h1 className="title--age">
                    <span className="age">{yearAge ? yearAge : "--"}</span>
                    years
                </h1>
                <h1 className="title--age">
                    <span className="age">{monthAge ? monthAge : "--"}</span>
                    months
                </h1>
                <h1 className="title--age">
                    <span className="age">{dayAge ? dayAge : "--"}</span>
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