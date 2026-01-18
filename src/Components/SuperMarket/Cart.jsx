import CartItem from './CartItem'

const Cart = ({ cart, handleRemoveFromCart, setCart }) => {
  const total = cart.reduce((prev, next) => {
    return prev + (next.price * next.quantity) 
  }, 0)

  return (
    <div className="cart">
      <h3>Cart</h3>
      {cart.map(item =>
        <CartItem key={item._id} item={item} handleRemoveFromCart={handleRemoveFromCart} />
      )}
      <div className="cart-total">
        <p>Total:</p>
        <p>$ {total.toFixed(2)}</p>
      </div>

      <button>CHECKOUT</button>
      <button onClick={() => setCart([])}>CLEAR CART</button>
    </div>
  )
}

export default Cart