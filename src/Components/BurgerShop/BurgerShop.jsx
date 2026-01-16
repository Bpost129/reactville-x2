import { useState } from 'react'

import IngredientList from './IngredientList'
import BurgerStack from './BurgerStack'

import { ingredients } from '../../data/burger-data'

import '../../styles/burger.css'

const BurgerShop = () => {
  console.log(ingredients)
  const [stack, setStack] = useState([])

  function handleAddIngredient(item) {
    const numBuns = stack.filter(ing => ing.type === 'bun')
    if (item.type === 'bun') {
      if (numBuns.length < 2) {
        setStack([...stack, item])
      }
    } else {
      setStack([...stack, item])
    }
  }

  function handleClearOrder() {
    setStack([])
  }
  
  return (
    <div className="burger-shop">
      <nav>
        <h1>Burger Shop</h1>
        <button onClick={handleClearOrder}>Clear Order</button>
      </nav>
      <section>
        <IngredientList ingredients={ingredients} handleAddIngredient={handleAddIngredient} />
        <BurgerStack stack={stack} />
      </section>
    </div>
  )
}

export default BurgerShop