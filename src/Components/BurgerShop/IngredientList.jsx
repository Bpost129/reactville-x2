import Ingredient from "./Ingredient"

const IngredientList = ({ ingredients }) => {
	return (
		<ul>
			{ingredients.map(ingredient => 
				<Ingredient key={ingredient._id} ingredient={ingredient} />
			)}
		</ul>
	)
}

export default IngredientList