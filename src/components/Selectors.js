const Selectors = ({ categories, setSelected }) => {
    return (
        <div>
            <div className="selectors" data-testid="homepage">
                {Object.keys(categories).map((category) => {
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