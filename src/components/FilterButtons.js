import React, { useState } from "react";
import "./price.css";

const FilterButtons = ({ categories, setFilteredCategories, currDistance, setCurrDistance }) => {
    const [currPrice, setCurrPrice] = useState(parseInt(localStorage.getItem("currPrice")) ?? 0);
    const priceButtonClick = (price) => {
        if (currPrice === price.length) {
            setCurrPrice(0);
            localStorage.setItem("currPrice", 0);
            setFilteredCategories(categories);
            return;
        }
        setCurrPrice(price.length);
        localStorage.setItem("currPrice", price.length);
        const newCategories = {}
        for (let key in categories) {
            for (let restaurant of categories[key]) {
                if (restaurant.price === price) {
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
        <div data-testid="FilterButtons">
            <div id="distanceButtons">
                <button className={currDistance === 0.5 ? "selected-distance-btn" : "distance-btn"} onClick={() => setCurrDistance(0.5)} data-cy="half_mile">&le; 0.5 Miles</button>
                <button className={currDistance === 1 ? "selected-distance-btn" : "distance-btn"} onClick={() => setCurrDistance(1)} data-cy="one_mile">&le; 1 Mile</button>
                <button className={currDistance === 3 ? "selected-distance-btn" : "distance-btn"} onClick={() => setCurrDistance(3)} data-cy="three_mile">&le; 3 Miles</button>
            </div>
            <div id="priceButtons">
                <button className={currPrice === 1 ? "selected-price-btn" : "price-btn"} onClick={() => priceButtonClick("$")} data-cy = "one_dollar">$</button>
                <button className={currPrice === 2 ? "selected-price-btn" : "price-btn"} onClick={() => priceButtonClick("$$")} data-cy = 'two_dollar'>$$</button>
                <button className={currPrice === 3 ? "selected-price-btn" : "price-btn"} onClick={() => priceButtonClick("$$$")} data-cy = 'three_dollar'>$$$</button>
                <button className={currPrice === 4 ? "selected-price-btn" : "price-btn"} onClick={() => priceButtonClick("$$$$")} data-cy = 'four_dollar'>$$$$</button>
            </div>
        </div>
    )
}

export default FilterButtons;