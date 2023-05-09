function DessertsList(props) {
    // Sort desserts by calorie count from low to high
    const sortedDesserts = props.data.slice().sort((a, b) => a.calories - b.calories);

    // Implement the component here.
    return (
        <div>
            <h2>List of low calorie desserts</h2>
            <ul>
                {sortedDesserts.map((dessert) => {
                    if (dessert.calories <= 400) {
                        return (
                            <li key={dessert.name}>
                                {dessert.name} - {dessert.calories} calories
                            </li>
                        );
                    }
                    return null;
                })}
            </ul>
        </div>
    );
}

export default DessertsList;
