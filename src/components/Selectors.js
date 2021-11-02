import React, { useState } from "react";
import "./price.css"

const Selectors = ({ categories, setSelected, filteredCategories, setFilteredCategories }) => {
    const [currPrice, setCurrPrice] = useState(0);
    const priceButtonClick = (price) => {
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
        // var sorted_index = Object.keys(newCategories).sort();
        // var sorted_categories = {};
        // for (var i = 0; i < sorted_index.length; i++) {
        //     sorted_categories[sorted_index[i]] = newCategories[[sorted_index[i]]];
        // }
        // console.log(sorted_categories);
        setFilteredCategories(newCategories);
    };

    var sorted_index = Object.keys(filteredCategories).sort();
    var sorted_categories = {};
    for (var i = 0; i < sorted_index.length; i++) {
        sorted_categories[sorted_index[i]] = filteredCategories[[sorted_index[i]]];
    }

    return (
        <div className="price-filters">
            <button className={currPrice === 1 ? "selected-price-btn" : "price-btn"} onClick={() => {
                priceButtonClick("$");
                setCurrPrice(1);
            }}>$</button>
            <button className={currPrice === 2 ? "selected-price-btn" : "price-btn"} onClick={() => {
                priceButtonClick("$$");
                setCurrPrice(2);
            }}>$$</button>
            <button className={currPrice === 3 ? "selected-price-btn" : "price-btn"} onClick={() => {
                priceButtonClick("$$$");
                setCurrPrice(3);
            }}>$$$</button>
            <button className={currPrice === 4 ? "selected-price-btn" : "price-btn"} onClick={() => {
                priceButtonClick("$$$$");
                setCurrPrice(4);
            }}>$$$$</button>
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