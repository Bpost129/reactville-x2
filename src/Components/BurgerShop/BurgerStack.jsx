import Ingredient from './Ingredient'

const BurgerStack = ({ stack }) => {

  if (!stack.length) return (<ul><li>No Ingredients Yet</li></ul>)

  return (
    <ul className="burger-stack">
      {stack.map(ingredient => 
        <Ingredient key={ingredient._id} ingredient={ingredient} />
      )}
    </ul>
  )
}

export default BurgerStack