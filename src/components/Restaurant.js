import MapIcon from '../map-marked-alt-solid.svg';
import YelpIcon from '../yelp-svgrepo-com.svg';
import { BsStarFill, BsStarHalf, BsStar } from "react-icons/bs";
import { useState } from "react";
import logo from "../assets/images/no_image_available.jpg";
import { useEffect } from 'react';

const Restaurant = ({ categories, selected, setSelected }) => {
  const [index, setIndex] = useState(0);
  const [chosen, setChosen] = useState(categories[selected][0]);
  const [stars, setStars] = useState([]);

  var price_level = { null: 'Price not available yet', '$': '$10 and under', '$$': 'Between $10-$25', '$$$': 'Between $25-$45', '$$$$': '$50 and up' };

  useEffect(() => {
    // rating stars
    let step = 0;
    const newStars = [];
    let ratings = chosen.rating;
    while (step < 5) {
      if (ratings >= 1) {
        // full star
        newStars.push(<BsStarFill style={{ color: "#437BD0", fontSize: "20px" } } key={step}/>);
        ratings--;
        step++;
      } else if (ratings < 1 && ratings > 0) {
        // half star
        newStars.push(<BsStarHalf style={{ color: "#437BD0", fontSize: "20px"  }} key={step}/>);
        ratings--;
        step++;
      } else {
        // empty star
        newStars.push(<BsStar style={{ color: "#437BD0", fontSize: "20px"  }} key={step}/>);
        step++;
      }
    }
    setStars(newStars);
  }, [chosen.rating]);

  return (

    <div className="restaurant">
      <h1 className="category" data-testid="category">{selected}</h1>
      <h2 className="name">{chosen.name}</h2>
      {chosen.photos[0].includes("None") ?
        <img className="photo" src={logo} />
      :
        <img className="photo" src={chosen.photos[0]} />
      }
      
      <div className="descriptors">
        <p className="descriptor" data-testid="ratings">{stars} ({chosen.rating})</p>
        <p className="descriptor" data-cy = "price">{price_level[chosen.price]}</p>
        <p className="descriptor" data-cy = "distance" data-testid="distance">{Math.floor(chosen.distance / 1609.34 * 10) / 10} miles away</p>
      </div>
      <div className="links">
        <a className="address" data-testid="mapsLink" href={"http://maps.google.com/?q=" + chosen.location.address1.replace(" ", "+")} target="_blank"><img src={MapIcon} width="15px" height="15px" style={{ paddingRight: "10px" }} />{chosen.location.address1}</a>
        <a className="yelp" data-testid="yelpLink" href={chosen.url} target="_blank"><img src={YelpIcon} width="15px" height="15px" style={{ paddingRight: "10px" }} />View on Yelp</a>
      </div>
      <div className="btn-group">
        <button className="btn renew" data-testid="generateNew" disabled={categories[selected].length === 1} onClick={() => {
          let newIndex;
          if (categories[selected].length - 1 >= index + 1) {
            newIndex = index + 1;
          }
          else {
            newIndex = 0;
          }
          setIndex(newIndex);
          setChosen(categories[selected][newIndex]);
        }}>New {selected} Suggestion</button>
        <button data-testid="back button" className="btn back" onClick={() => {
          setChosen(null);
          setSelected(null);
        }}>Back</button>
      </div>
    </div>
  )
}

export default Restaurant;