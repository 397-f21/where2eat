import MapIcon from '../map-marked-alt-solid.svg';
import YelpIcon from '../yelp-svgrepo-com.svg';
import { BsStarFill, BsStarHalf, BsStar } from "react-icons/bs";
import { useState } from "react";
import logo from "../assets/images/no_image_available.jpg";

const Restaurant = ({ categories, selected, setSelected }) => {
  const [index, setIndex] = useState(0);
  const [chosen, setChosen] = useState(categories[selected][0]);

  var price_level = { null: 'Not available yet', '$': '$10 and under', '$$': 'Between $10-$25', '$$$': 'Between $25-$45', '$$$$': '$50 and up' };

  // rating stars
  let step = 0;
  const stars = [];
  let ratings = chosen.rating;
  while (step < 5) {
    if (ratings >= 1) {
      // full star
      stars.push(<BsStarFill />);
      ratings--;
      step++;
    } else if (ratings < 1 && ratings > 0) {
      // half star
      stars.push(<BsStarHalf />);
      ratings--;
      step++;
    } else {
      // empty star
      stars.push(<BsStar />);
      step++;
    }
  }

  return (

    <div className="restaurant">
      <h1 className="category">{selected}</h1>
      <h2 className="name">{chosen.name}</h2>
      {chosen.photos[0].includes("None") ?
        <img className="photo" src={logo} />
      :
        <img className="photo" src={chosen.photos[0]} />
      }
      <hr />
      <a className="address" href={"http://maps.google.com/?q=" + chosen.location.address1.replace(" ", "+")} target="_blank"><img src={MapIcon} width="15px" height="15px" style={{ paddingRight: "10px" }} />{chosen.location.address1}</a>
      <a className="yelp" href={chosen.url} target="_blank"><img src={YelpIcon} width="15px" height="15px" style={{ paddingRight: "10px" }} />View on Yelp</a>
      <p key="rating">Rating: {stars} ({chosen.rating})</p>
      <p key="price">Price: {price_level[chosen.price]}</p>

      <div className="btn-group">

        <button className="btn renew" disabled={categories[selected].length === 1} onClick={() => {
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