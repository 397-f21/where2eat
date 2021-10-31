import MapIcon from '../map-marked-alt-solid.svg';
import YelpIcon from '../yelp-svgrepo-com.svg';

const Restaurant = ({categories, chosen, setChosen, selected, setSelected}) => {
    return (
        
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
            <button data-testid="back button" className="btn back" onClick={() => {
              setChosen(null);
              setSelected(null);
            }}>Back</button>
          </div>
        </div>
    )
}

export default Restaurant;