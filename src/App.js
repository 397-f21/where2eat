import logo from './logo.svg';
import './App.css';
import { useState, useEffect } from "react";
import Banner from './components/Banner';
import Restaurant from './components/Restaurant';
import "./restaurant.css";



function App() {

  const [loading, setLoading] = useState(true);
  const [errorMsg, setErrorMsg] = useState(null);
  const [unavailable, setUnavailable] = useState(false);
  const [selected, setSelected] = useState(null);
  const [chosen, setChosen] = useState(null);
  const [apiData, setApiData] = useState(null);
  const url = 'https://api.yelp.com/v3/graphql';


  // append this before url, no spaces: https://cors-anywhere.herokuapp.com/

  useEffect(async () => {

    const getGeoLocation = () => {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(pullData);
      }
      else {
        setUnavailable(true);
      }
    }

    const pullData = async (position) => {
      //console.log(position.coords.longitude);
      const payload = { 
        "latitude": position.coords.latitude, 
        "longitude": position.coords.longitude,
        "radius": 1609,
        "attribute": "" };
        
      try {

        const requestOptions = {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(payload)
        }

        fetch("https://where2eat-aqua.herokuapp.com/", requestOptions)
          .then(response => response.json())
          .then(data => {
            console.log("Api data", data);
            setApiData(data);
            setLoading(false);
          });

      } catch (error) {
        setErrorMsg(error.message);
      }
    };

    getGeoLocation();

  }, [])

  if (loading) return <h1>Loading the data...</h1>;
  if (errorMsg) return <h1>errorMsg</h1>;
  if (unavailable) return <h1>Please turn on your location services to use this app</h1>;

  let businesses = apiData.data.search.business;
  let categories = {};
  for (let i = 0; i < businesses.length; i++) {
    let category = businesses[i].categories[0].title;
    if (category in categories) {
      categories[category].push(businesses[i]);
    } else {
      categories[category] = [businesses[i]];
    }
  }



  return (
    <div data-testid='App' className="App">
      <Banner data-testid='banner'/>
      {selected ?
        <Restaurant categories={categories} chosen={chosen} setChosen={setChosen} selected={selected} setSelected={setSelected} />
        :
        <div>
          <div className="selectors">
            {Object.keys(categories).map((category) => {
              return (
                <button data-testid="selection-button" className="select-btn"
                  key={category}
                  onClick={() => {
                    const num = Math.floor(Math.random() * categories[category].length);
                    setChosen(categories[category][num]);
                    setSelected(category);
                  }}
                >{category}</button>
              )
            })}
          </div>
        </div>}

    </div>
  );
}

export default App;
