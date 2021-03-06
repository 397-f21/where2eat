import React, { useState, useEffect } from "react";
import "./price.css"

const Selectors = ({ setSelected, filteredCategories }) => {
    const [sortedCategories, setSortedCategories] = useState({});

    useEffect(() => {
        var sorted_index = Object.keys(filteredCategories).sort();
        var sorted_categories = {};
        for (var i = 0; i < sorted_index.length; i++) {
            sorted_categories[sorted_index[i]] = filteredCategories[[sorted_index[i]]];
        };
        setSortedCategories(sorted_categories);
    }, [filteredCategories]);

    return (
        <div>
            <div className="selectors" data-testid="homepage">
                {Object.keys(sortedCategories).length === 0 ?
                <p data-cy = "no_restaurants_text">There are no restaurants which match your search criteria.</p>
                :
                Object.keys(sortedCategories).map((category) => {
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