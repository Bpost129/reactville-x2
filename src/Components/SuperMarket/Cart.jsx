import CartItem from './CartItem'

const Cart = ({ cart, handleRemoveFromCart, setCart }) => {

  return (
    <div className="cart">
      <h3>Cart</h3>
      {cart.map(item =>
        <CartItem key={item._id} item={item} handleRemoveFromCart={handleRemoveFromCart} />
      )}
      <div className="cart-total">
        <p>Total:</p>
        <p>$ Display Amount Here</p>
      </div>

      <button>CHECKOUT</button>
      <button onClick={() => setCart([])}>CLEAR CART</button>
    </div>
  )
}

export default Cart