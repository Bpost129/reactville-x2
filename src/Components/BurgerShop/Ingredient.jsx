
const Ingredient = ({ ingredient, isList, handleAddIngredient }) => {
	return (
		<li>
			{ingredient.name}
			{isList 
				? <button onClick={() => handleAddIngredient(ingredient)}>+</button>
				: <button>X</button>
			}
		</li>
	)
}

export default Ingredient