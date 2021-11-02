import React, { useState } from "react";
import "./price.css"

const Selectors = ({ categories, setSelected, filteredCategories, setFilteredCategories, currDistance, setCurrDistance }) => {
    const [currPrice, setCurrPrice] = useState(0);

    const priceButtonClick = (price) => {
        if (currPrice === price.length) {
            setCurrPrice(0);
            setFilteredCategories(categories);
            return;
        }
        setCurrPrice(price.length);
        const newCategories = {}
        for (let key in categories) {
            for (let restaurant of categories[key]) {
                if (price.includes(restaurant.price) || restaurant.price == null) {
                    if (key in newCategories) {
                        newCategories[key].push(restaurant);
                    } else {
                        newCategories[key] = [restaurant];
                    }
                }
            }
        };
        setFilteredCategories(newCategories); 
    };

    return (
        <div>
            <div id="distanceButtons">
                <button className={currDistance === 0.5 ? "selected-distance-btn" : "distance-btn"} onClick={() => setCurrDistance(0.5)}>0.5 Miles</button>
                <button className={currDistance === 1 ? "selected-distance-btn" : "distance-btn"} onClick={() => setCurrDistance(1)}>1 Mile</button>
                <button className={currDistance === 3 ? "selected-distance-btn" : "distance-btn"} onClick={() => setCurrDistance(3)}>3 Miles</button>
            </div>
            <div id="priceButtons">
                <button className={currPrice === 1 ? "selected-price-btn" : "price-btn"} onClick={() => priceButtonClick("$")}>$</button>
                <button className={currPrice === 2 ? "selected-price-btn" : "price-btn"} onClick={() => priceButtonClick("$$")}>$$</button>
                <button className={currPrice === 3 ? "selected-price-btn" : "price-btn"} onClick={() => priceButtonClick("$$$")}>$$$</button>
                <button className={currPrice === 4 ? "selected-price-btn" : "price-btn"} onClick={() => priceButtonClick("$$$$")}>$$$$</button>
            </div>
            <div className="selectors" data-testid="homepage">
                {Object.keys(filteredCategories).map((category) => {
                    return (
                        <button data-testid="selection-button" className="select-btn"
                            key={category}
                            onClick={() => {
                                setSelected(category);
                            }}
                        >{category}</button>
                    )
                })}
            </div>
        </div>
    )
}

export default Selectors;