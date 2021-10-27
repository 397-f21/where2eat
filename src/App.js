import logo from './logo.svg';
import './App.css';
import { useState, useEffect } from "react";
import env from 'react-dotenv';
import axios from "axios";
import { data } from "./data";
import Banner from './components/Banner';
import "./restaurant.css";
import MapIcon from './map-marked-alt-solid.svg';
import YelpIcon from './yelp-svgrepo-com.svg';


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
      const payload = { "latitude": position.coords.latitude, "longitude": position.coords.longitude };
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
    <div className="App">
      <Banner />
      {selected ?
        <div>
          <div className="restaurant">
            <h1 className="category">{selected}</h1>
            <h2 className="name">{chosen.name}</h2>
            <hr />
            <a className="address" href={"http://maps.google.com/?q=" + chosen.location.address1.replace(" ", "+")} target="_blank"><img src={MapIcon} width="15px" height="15px" style={{ paddingRight: "10px" }} />{chosen.location.address1}</a>
            <a className="yelp" href={chosen.url} target="_blank"><img src={YelpIcon} width="15px" height="15px" style={{ paddingRight: "10px" }} />View on Yelp</a>
            <div className="btn-group">
              <button className="btn renew" onClick={() => {
                const num = Math.floor(Math.random() * categories[selected].length);
                setChosen(categories[selected][num]);
              }}>New {selected} Suggestion</button>
              <button className="btn back" onClick={() => {
                setChosen(null);
                setSelected(null);
              }}>Back</button>
            </div>
          </div>
        </div>
        :
        <div>
          <div className="selectors">
            {Object.keys(categories).map((category) => {
              return (
                <button className="select-btn"
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
