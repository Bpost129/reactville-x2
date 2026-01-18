import CategoryMenu from './CategoryMenu'

const MarketNav = ({ products, setProductCategory, handleShowCart }) => {
  return (
    <nav>
      <h1>Super Market</h1>
      <CategoryMenu products={products} setProductCategory={setProductCategory} />
      <button id="cart-button" onClick={handleShowCart}></button>
    </nav>
  )
}

export default MarketNav
