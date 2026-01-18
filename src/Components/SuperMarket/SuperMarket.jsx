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

  const handleAddToCart = (prod) => {
    setCart([...cart, prod])
  }
  console.log(cart)

  console.log('Imported product data:::', products)
  return (
    <div className="super-market">
      <section>
        <MarketNav products={products} setProductCategory={setProductCategory} />
        <DisplayProducts products={products} productCategory={productCategory} handleAddToCart={handleAddToCart} />
      </section>

      <Cart cart={cart} />

    </div>
  )
}

export default SuperMarket