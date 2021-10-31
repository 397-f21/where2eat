const Selectors = ({ categories, chosen, setChosen, selected, setSelected }) => {
    return (
        <div>
            <div className="selectors">
                {Object.keys(categories).map((category) => {
                    return (
                        <button data-testid="selection-button" className="select-btn"
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
        </div>
    )
}

export default Selectors;