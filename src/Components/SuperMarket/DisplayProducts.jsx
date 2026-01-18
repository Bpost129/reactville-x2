import Product from './Product'

const DisplayProducts = ({ products, productCategory, handleAddToCart }) => {
  
  return (
    <div className="product-list">
      {products.map(product =>
        product.category === productCategory && <Product product={product} handleAddToCart={handleAddToCart} />
      )}
    </div>
  )
}

export default DisplayProducts
