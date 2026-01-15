import Ingredient from "./Ingredient"

const IngredientList = ({ ingredients }) => {
	return (
		<ul>
			{ingredients.map(ingredient => 
				<Ingredient key={ingredient._id} ingredient={ingredient} isList={true} />
			)}
		</ul>
	)
}

export default IngredientList