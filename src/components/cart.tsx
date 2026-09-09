import { CartItem } from "../App";

interface CartProps {
  cart: CartItem[];
  removeFromCart: (productId: number) => void;
  increaseQuantity: (productId: number) => void;
  decreaseQuantity: (productId: number) => void;
  totalPrice: number;
  onBack: () => void;
}

function Cart({
  cart,
  removeFromCart,
  increaseQuantity,
  decreaseQuantity,
  totalPrice,
  onBack,
}: CartProps) {
  return (
    <div className="cart-page">
      <button onClick={onBack}>← Continue Shopping</button>

      <h2>Shopping Cart</h2>

      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div>
          {cart.map((item) => (
            <div className="cart-item" key={item.product.id}>
              <img src={item.product.image} alt={item.product.name} />

              <div>
                <h3>{item.product.name}</h3>
                <p>₹{item.product.price}</p>

                <div className="quantity-controls">
                  <button onClick={() => decreaseQuantity(item.product.id)}>
                    -
                  </button>

                  <span>{item.quantity}</span>

                  <button onClick={() => increaseQuantity(item.product.id)}>
                    +
                  </button>
                </div>

                <button onClick={() => removeFromCart(item.product.id)}>
                  🗑
                </button>
              </div>
            </div>
          ))}

          <h2>Total: ₹{totalPrice}</h2>
        </div>
      )}
    </div>
  );
}

export default Cart;
