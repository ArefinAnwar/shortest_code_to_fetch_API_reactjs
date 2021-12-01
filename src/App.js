import logo from "./logo.svg";
import "./App.css";
import React from "react";

function App() {
  const [data, setData] = React.useState([]);
  React.useEffect(() => {
    const fetchLocation = async () => {
      await fetch("https://jsonplaceholder.typicode.com/users")
        .then((res) => res.json())
        .then((data) => {
          setData(data);
          console.log(data);
        });
    };
    fetchLocation();
  }, []);
  
  if(!data.length) return <div>Loading...</div>
  return (
    <div className="App">
      Name: {data[0].name}
      <br />
      Email: {data[0].email}
      <br />
      Phone: {data[0].phone}
      <br/>
      Address: {data[0].address.street}
    </div>
  );
}

export default App;
