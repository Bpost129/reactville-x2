import Ingredient from "./Ingredient"

const IngredientList = ({ ingredients, handleAddIngredient }) => {
	return (
		<ul>
			{ingredients.map(ingredient => 
				<Ingredient key={ingredient.name} ingredient={ingredient} isList={true} handleAddIngredient={handleAddIngredient} />
			)}
		</ul>
	)
}

export default IngredientList