import React, { useState } from "react";
import "./price.css"

const Selectors = ({ categories, setSelected, filteredCategories, setFilteredCategories, currDistance, setCurrDistance }) => {
    const [currPrice, setCurrPrice] = useState(0);
    
    const [checkedState, setCheckedState] = useState(
        new Array(4).fill(false)
    );
    
    const handleOnChange = (position) => {
        const updatedCheckedState = checkedState.map((item, index) =>
          index === position ? !item : item
        );
        setCheckedState(updatedCheckedState);
        
        const newCategories = {}
        for (let key in categories) {
            for (let restaurant of categories[key]) {
                if(!updatedCheckedState[0] && ! updatedCheckedState[1] &&  !updatedCheckedState[2] && ! updatedCheckedState[3] && !  updatedCheckedState[4]){
                    if (key in newCategories) {
                        newCategories[key].push(restaurant);
                    } else {
                        newCategories[key] = [restaurant];
                    }
                }
                else if ((restaurant.price == '$' && updatedCheckedState[0]) || (restaurant.price == '$$' && updatedCheckedState[1]) || (restaurant.price == '$$$' && updatedCheckedState[2]) || (restaurant.price == '$$$$' && updatedCheckedState[3]) || (restaurant.price == null)) {
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

    var sorted_index = Object.keys(filteredCategories).sort();
    var sorted_categories = {};
    for (var i = 0; i < sorted_index.length; i++) {
        sorted_categories[sorted_index[i]] = filteredCategories[[sorted_index[i]]];
    }

    return (
        <div>
            <div className="topping">
            <input
                    type="checkbox"
                    id="topping"
                    name="topping"
                    value="Paneer"
                    checked={checkedState[0]}
                    onChange={() => handleOnChange(0)}
            />
            $
            <input
                    type="checkbox"
                    id="topping"
                    name="topping"
                    value="Paneer"
                    checked={checkedState[1]}
                    onChange={() => handleOnChange(1)}
            />
            $$
            <input
                    type="checkbox"
                    id="topping"
                    name="topping"
                    value="Paneer"
                    checked={checkedState[2]}
                    onChange={() => handleOnChange(2)}
            />
            $$$
            <input
                    type="checkbox"
                    id="topping"
                    name="topping"
                    value="Paneer"
                    checked={checkedState[3]}
                    onChange={() => handleOnChange(3)}
            />
            $$$$
            </div>

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
                {Object.keys(sorted_categories).map((category) => {
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