import {useState} from 'react';
import axios from 'axios';

function App() {
  //creating Location state
  const [location, setLocation] = useState(
    {
      latitude: null,
      longitude: null
    }
  );

  //creating ip state
  const [ip, setIp] = useState('');
  //creating loading state
  const [formSubmitionStatus, setFormSubmitionStatus] = useState('notSubmitted');

  //creating function to load ip address from the API
  const getGeoLocationData = async () => {
    const res = await axios.get(`https://geolocation-db.com/json/${ip}`);
    console.log(res.data);
    setLocation({latitude: res.data.latitude, longitude: res.data.longitude});
  };

  //check if form input is valid ip address
  const checkIfValidIp = (str) => {
    // Regex to check if string is a IP address
    const regexExp = /^(([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])\.){3}([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])$/gi;
    return regexExp.test(str);
  }

  //search form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(`IP Entered: ${ip}`);
    if (checkIfValidIp(ip)) {
      getGeoLocationData();
      setFormSubmitionStatus('submitted');
    }
    else {
      alert('Please input a correct ip address (format: 8.8.8.8')
    }
  }

  return (
    <div data-testid='app-1' className="App">
      <form onSubmit={handleSubmit}>
        <label>
          Enter IP address:
          <input type="text" name="ip" value={ip} onChange={(e) => setIp(e.target.value)} required/>
        </label>
        <button type="submit">search</button>
      </form>
      {formSubmitionStatus === 'submitted' && (
        <div>
            <h4>Latitude: {location.latitude}</h4>
            <h4>Longitude: {location.longitude}</h4>
        </div>
      )}
    </div>
  );
}

export default App;