
const Ingredient = ({ ingredient, isList }) => {
	return (
		<li>
			{ingredient.name}
			{isList 
				? <button>+</button>
				: <button>X</button>
			}
		</li>
	)
}

export default Ingredient