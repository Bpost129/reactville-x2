import Ingredient from './Ingredient'

const BurgerStack = ({ stack }) => {
  return (
    <ul className="burger-stack">
      {stack.map(ingredient => 
        <Ingredient key={ingredient._id} ingredient={ingredient} />
      )}
    </ul>
  )
}

export default BurgerStack