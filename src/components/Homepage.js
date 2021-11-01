import React from "react";

const Homepage = ({categories, setChosen, setSelected}) => {
    return (
        <div className="selectors" data-testid="homepage">
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
    )
}

export default Homepage;