const App = () => {
  const [userData, setUserData] = React.useState(null);

  const fetchData = () => {
    fetch('https://api.github.com/users/octocat')
      .then(response => response.json())
      .then(data => setUserData(data))
      .catch(error => console.error('Error fetching data:', error));
  };
  console.log("render")
  return (
    <div>
      {userData ? (
        <p>
          <strong>Login:</strong> {userData.login} <br />
          <strong>Name:</strong> {userData.name} <br />
          <strong>Public Repos:</strong> {userData.public_repos}
        </p>
      ) : (
        <p>No data available</p>
      )}
      <button onClick={fetchData}>Fetch Data</button>
    </div>
  );
};

//Render
const app = document.getElementById('root');
const root = ReactDOM.createRoot(app);
root.render(<App />)