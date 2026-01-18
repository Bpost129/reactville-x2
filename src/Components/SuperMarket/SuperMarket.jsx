import { useState } from 'react'
// Components & Data
import MarketNav from './MarketNav'
import DisplayProducts from './DisplayProducts'
import Cart from './Cart'

import { products } from '../../data/market-data'

import '../../styles/super-market.css'

const SuperMarket = () => {
  const [cart, setCart] = useState([])
  const [productCategory, setProductCategory] = useState('Produce')
  const [showCart, setShowCart] = useState(true)

  const handleShowCart = () => {
    setShowCart(!showCart)
  }

  const handleAddToCart = (prod) => {
    if (!cart.includes(prod)) {
      prod.quantity = 1
      setCart([...cart, prod])
    } else {
      cart.map(item => {
        if (item.name === prod.name) {
          return item.quantity += 1
        }
      })
      setCart([...cart])
    }
  }

  const handleRemoveFromCart = (prod) => {
    if (prod.quantity > 1) {
      cart.map(item => {
        if (item.name === prod.name) {
          return item.quantity -= 1
        }
      })
      setCart([...cart])
    } else {
      let newCart = cart.filter(item => {
        return item.name !== prod.name
      })
      setCart([...newCart])
    }
  }

  console.log(cart)

  return (
    <div className="super-market">
      <section>
        <MarketNav products={products} setProductCategory={setProductCategory} handleShowCart={handleShowCart} />
        <DisplayProducts products={products} productCategory={productCategory} handleAddToCart={handleAddToCart} />
      </section>

      {showCart && <Cart cart={cart} setCart={setCart} handleRemoveFromCart={handleRemoveFromCart} />}

    </div>
  )
}

export default SuperMarket