import Product from './Product'


const DisplayProducts = ({ products, productCategory }) => {
  
  return (
    <div className="product-list">
      {products.map(product =>
        
        product.productCategory && <Product product={product} />
      )}
    </div>
  )
}

export default DisplayProducts
