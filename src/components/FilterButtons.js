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
        <div>
            <div id="distanceButtons">
                <button className={currDistance === 0.5 ? "selected-distance-btn" : "distance-btn"} onClick={() => setCurrDistance(0.5)}>&le; 0.5 Miles</button>
                <button className={currDistance === 1 ? "selected-distance-btn" : "distance-btn"} onClick={() => setCurrDistance(1)}>&le; 1 Mile</button>
                <button className={currDistance === 3 ? "selected-distance-btn" : "distance-btn"} onClick={() => setCurrDistance(3)}>&le; 3 Miles</button>
            </div>
            <div id="priceButtons">
                <button className={currPrice === 1 ? "selected-price-btn" : "price-btn"} onClick={() => priceButtonClick("$")}>$</button>
                <button className={currPrice === 2 ? "selected-price-btn" : "price-btn"} onClick={() => priceButtonClick("$$")}>$$</button>
                <button className={currPrice === 3 ? "selected-price-btn" : "price-btn"} onClick={() => priceButtonClick("$$$")}>$$$</button>
                <button className={currPrice === 4 ? "selected-price-btn" : "price-btn"} onClick={() => priceButtonClick("$$$$")}>$$$$</button>
            </div>
        </div>
    )
}

export default FilterButtons;