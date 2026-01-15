import { useState } from 'react'

import IngredientList from './IngredientList'
import BurgerStack from './BurgerStack'

import { ingredients } from '../../data/burger-data'

import '../../styles/burger.css'

const BurgerShop = () => {
  console.log(ingredients)
  const [stack, setStack] = useState([])
  
  return (
    <div className="burger-shop">
      <nav>
        <h1>Burger Shop</h1>
        <button>Clear Order</button>
      </nav>
      <section>
        <IngredientList ingredients={ingredients} />
        <BurgerStack stack={stack} />
      </section>
    </div>
  )
}

export default BurgerShop