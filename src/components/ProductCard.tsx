import { Product } from "../types/product";
interface ProductCardProps {
  product: Product;
  addToCart: (Product: Product) => void;
}
function ProductCard({ product, addToCart }: ProductCardProps) {
  return (
    <div className="product-card">
      <img src={product.image} alt={product.name} width="200" />

      <h3>{product.name}</h3>

      <p>₹{product.price}</p>

      <p>Colour: {product.colour}</p>

      <p>Size: {product.size}</p>

      <button onClick={() => addToCart(product)}>Add to Cart</button>
    </div>
  );
}
export default ProductCard;
