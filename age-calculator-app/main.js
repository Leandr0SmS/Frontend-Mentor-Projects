function App() {
    const [day, setDay] = useState('');
    const [month, setMonth] = useState('');
    const [year, setYear] = useState('');

    const handleDayChange = (event) => {
      const inputValue = event.target.value.replace(/\D/g, '');
      setDay(inputValue);
    };
    const handleMonthChange = (event) => {
      const inputValue = event.target.value.replace(/\D/g, '');
      setMonth(inputValue);
    };
    const handleYearChange = (event) => {
      const inputValue = event.target.value.replace(/\D/g, '');
      setYear(inputValue);
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
        let cDay = currentDate.getDate()
        let cMonth = currentDate.getMonth() + 1
        let cYear = currentDate.getFullYear()
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
            </form>
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