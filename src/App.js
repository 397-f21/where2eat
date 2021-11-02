import './App.css';
import { useState, useEffect } from "react";
import Banner from './components/Banner';
import Restaurant from './components/Restaurant';
import "./components/restaurant.css";
import Selectors from './components/Selectors'

function App() {

  const [loading, setLoading] = useState(true);
  const [errorMsg, setErrorMsg] = useState(null);
  const [unavailable, setUnavailable] = useState(false);
  const [selected, setSelected] = useState(null);
  const [apiData, setApiData] = useState(null);
  //const [categories, setCategories] = useState(null);
  const [filteredCategories, setFilteredCategories] = useState(null);
  const [currDistance, setCurrDistance] = useState(0.5);

  useEffect(async () => {
    setLoading(true);

    const getGeoLocation = () => {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(pullData);
      }
      else {
        setUnavailable(true);
      }
    }

    const pullData = async (position) => {
      const payload = {
        "latitude": position.coords.latitude,
        "longitude": position.coords.longitude,
        "radius": 1609.34 * currDistance,
        "attribute": ""
      };
      console.log(payload)

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
            
            let businesses = data.data.search.business;
            let newCategories = {};
            for (let i = 0; i < businesses.length; i++) {
              businesses[i].categories.forEach((category) => {
                if (category.title in newCategories) {
                  newCategories[category.title].push(businesses[i]);
                } else {
                  newCategories[category.title] = [businesses[i]];
                }
              })
            }

            var sorted_index = Object.keys(newCategories).sort();
            var sorted_categories = {};
            for (var i = 0; i < sorted_index.length; i++) {
              sorted_categories[sorted_index[i]] = newCategories[[sorted_index[i]]];
            }
            //setCategories(sorted_categories);
            setFilteredCategories(sorted_categories);
            setApiData(sorted_categories);
            setLoading(false);
          });

      } catch (error) {
        setErrorMsg(error.message);
      }
    };

    getGeoLocation();
    
  }, [currDistance])

  if (loading) { 
    return (
      <>
        <Banner />
        <h1>Loading the data...</h1>
      </>
    )
  }
  if (errorMsg) return <h1>errorMsg</h1>;
  if (unavailable) return <h1>Please turn on your location services to use this app</h1>;

  return (
    <div data-testid='App' className="App">
      <Banner data-testid='banner' />
      {selected ?

        <Restaurant categories={filteredCategories} selected={selected} setSelected={setSelected} />

        :

        <Selectors categories={apiData} setSelected={setSelected} filteredCategories={filteredCategories} setFilteredCategories={setFilteredCategories} currDistance={currDistance} setCurrDistance={setCurrDistance} />
      }

    </div>
  );
}

export default App;
