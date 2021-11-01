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
        setFilteredCategories(newCategories);
    };

    return (
        <div>
            <button className={currPrice == 1 ? "selected-price-btn" : "price-btn"} onClick={() => {
                priceButtonClick("$");
                setCurrPrice(1);
            }}>$</button>
            <button className={currPrice == 2 ? "selected-price-btn" : "price-btn"} onClick={() => {
                priceButtonClick("$$");
                setCurrPrice(2);
            }}>$$</button>
            <button className={currPrice == 3 ? "selected-price-btn" : "price-btn"} onClick={() => {
                priceButtonClick("$$$");
                setCurrPrice(3);
            }}>$$$</button>
            <button className={currPrice == 4 ? "selected-price-btn" : "price-btn"} onClick={() => {
                priceButtonClick("$$$$");
                setCurrPrice(4);
            }}>$$$$</button>
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