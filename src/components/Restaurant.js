import MapIcon from '../map-marked-alt-solid.svg';
import YelpIcon from '../yelp-svgrepo-com.svg';
import { useState } from "react";

const Restaurant = ({ categories, selected, setSelected }) => {
  const [index, setIndex] = useState(0);
  const [chosen, setChosen] = useState(categories[selected][0]);

  console.log("Index", index);
  console.log("Categories", categories[selected]);
  console.log("Chosen", chosen);
  return (
    <div className="restaurant">
      <h1 className="category">{selected}</h1>
      <h2 className="name">{chosen.name}</h2>
      <hr />
      <a className="address" href={"http://maps.google.com/?q=" + chosen.location.address1.replace(" ", "+")} target="_blank"><img src={MapIcon} width="15px" height="15px" style={{ paddingRight: "10px" }} />{chosen.location.address1}</a>
      <a className="yelp" href={chosen.url} target="_blank"><img src={YelpIcon} width="15px" height="15px" style={{ paddingRight: "10px" }} />View on Yelp</a>
      <div className="btn-group">

        <button className="btn renew" onClick={() => {
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