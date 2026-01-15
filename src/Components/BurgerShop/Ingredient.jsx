
const Ingredient = ({ ingredient, isList, handleAddIngredient }) => {
	return (
		<li style={{backgroundColor: `${ingredient.color}`}}>
			{ingredient.name}
			{isList 
				? <button onClick={() => handleAddIngredient(ingredient)}>+</button>
				: <button>X</button>
			}
		</li>
	)
}

export default Ingredient