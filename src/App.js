import logo from './logo.svg';
import './App.css';
import { useState, useEffect } from "react";
import env from 'react-dotenv';
import axios from "axios";
import { data } from "./data";

function App() {

  const API_KEY = "LL7utKGyZOsd7g1xdwfMyFEh80UCmesfPzQ5pfd6VeBexSbUbyRkBuGswVcMsqPFxNGYe7u63HIQWwpoKZuJFWM759wh6RwZZLLZYGEMbFyesMJrugHWrH4_YDdwYXYx";
  console.log(API_KEY);

  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState(null);
  const [selected, setSelected] = useState(null);
  const [chosen, setChosen] = useState(null);
  // const [data, setData] = useState(null);
  const url = 'https://api.yelp.com/v3/graphql';
  // append this before url, no spaces: https://cors-anywhere.herokuapp.com/

  // useEffect(async () => {
  //   setLoading(true);

  //   const getGeoLocation = () => {
  //     if (navigator.geolocation) {
  //       navigator.geolocation.getCurrentPosition(pullData);
  //       let unavailable = false;
  //     } else {
  //       let unavailable = true;
  //     }
  //   }

  //   const pullData = async (position) => {
  //     const payload = `{
  //       search(term:"restaurant",
  //         latitude:${position.coords.latitude},
  //         longitude:${position.coords.longitude},
  //              radius:1609) {
  //         total
  //         business {
  //           url
  //           name
  //           location {
  //               address1
  //           }
  //           categories {
  //               title
  //           }
  //           reviews {
  //             text
  //             rating
  //             time_created
  //             url
  //           }
  //         }
  //       }
  //     }`;
  //     try {

  //       const response = await axios.post("https://cors-anywhere.herokuapp.com/"+url, {
  //         headers: {
  //           'Authorization': `Bearer ${API_KEY}`,
  //           'Content-Type': 'application/graphql',
  //         },
  //         withCredentials: true,
  //         body: payload
  //       });

  //       const jsonData = response.data.json();
  //       setLoading(false);
  //       setData(jsonData);

  //       console.log(jsonData); // Remeber to remove me

  //     } catch (error) {
  //       setErrorMsg(error.message);
  //     }
  //   };

  //   getGeoLocation();

  //   //unavailable ? setData(null) : pullData();
  // }, [])

  // if (loading) return <h1>Loading the data...</h1>;
  // if (errorMsg) return <h1>errorMsg</h1>;
  // if (unavailable) return <h1>Please turn on your location services to use this app</h1>;

  // const filter = () => {

  // };

  let businesses = data.data.search.business;
  console.log(businesses);
  let categories = {};
  for (let i = 0; i < businesses.length; i++) {
    let category = businesses[i].categories[0].title;
    console.log(category);
    if (category in categories) {
      console.log(categories)
      categories[category].push(businesses[i]);
    } else {
      categories[category] = [businesses[i]];
    }
  }


  return (
    <div className="App">
      {selected ?
        <div>
          <h1>{selected}</h1>
          <h2>{chosen.name}</h2>
          <p>{chosen.location.address1}</p>
          <a href={chosen.url}>View on Yelp</a>
          <button onClick={() => {
            const num = Math.floor(Math.random() * categories[selected].length);
            setChosen(categories[selected][num]);
          }}>Click here to generate a new suggestion!</button>
          <button onClick={() => {
            setChosen(null);
            setSelected(null);
          }}>Back</button>
        </div>
        :
        <div>
          <h1>Where2Eat</h1>
          {Object.keys(categories).map((category) => {
            console.log(category);
            return (
              <button
                key={category}
                onClick={() => {
                  const num = Math.floor(Math.random() * categories[category].length);
                  setChosen(categories[category][num]);
                  setSelected(category);
                }}
              >{category}</button>
            )
          })}
        </div>}

    </div>
  );
}

export default App;
