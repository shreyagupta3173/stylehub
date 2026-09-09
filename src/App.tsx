import { useState } from "react";
import { Product } from "./types/product";
import ProductCard from "./components/ProductCard";
import "./App.css";
import Cart from "./components/cart";

export interface CartItem {
  product: Product;
  quantity: number;
}
function App() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
  const [colour, setColour] = useState("All");
  const [size, setSize] = useState("All");
  const [cart, setCart] = useState<CartItem[]>([]);
  const [darkMode, setDarkMode] = useState(false);
  const [showCart, setShowCart] = useState(false);
  const [activePage, setActivePage] = useState("products");

  const products: Product[] = [
    // T-SHIRTS
    {
      id: 1,
      name: "Oversized Red T-Shirt",
      price: 499,
      category: "T-Shirts",
      colour: "Black",
      size: "M",
      image:
        "https://tse1.mm.bing.net/th/id/OIP.B8vl1uuAJ23fbX3i3nbQygHaKU?r=0&rs=1&pid=ImgDetMain&o=7&rm=3",
      gender: "Women",
      newArrival: true,
    },
    {
      id: 2,
      name: "Classic Blue T-Shirt",
      price: 549,
      category: "T-Shirts",
      colour: "Blue",
      size: "L",
      image:
        "https://assets.myntassets.com/h_200,w_200,c_fill,g_auto/h_1440,q_75,w_1080/v1/assets/images/13321698/2021/5/28/6e0e36a2-6184-4456-8308-054db7da67251622210019682RoadsterWomenBlueSolidPureCottonV-NeckT-shirt1.jpg",
      gender: "Women",
      newArrival: true,
    },
    {
      id: 3,
      name: "White Cotton T-Shirt",
      price: 449,
      category: "T-Shirts",
      colour: "White",
      size: "S",
      image:
        "https://i.pinimg.com/736x/8d/2e/92/8d2e92547f9d19281c5c56bff933ca61.jpg",
      gender: "Women",
      newArrival: false,
    },

    // SHIRTS
    {
      id: 4,
      name: "White Casual Shirt",
      price: 899,
      category: "Shirts",
      colour: "White",
      size: "L",
      gender: "Women",
      newArrival: true,
      image:
        "https://www.bing.com/th/id/OIP.dJWxo1RdblnOTyg3OI2OBwHaJ4?w=110&h=128&c=8&rs=1&qlt=90&o=6&dpr=2&pid=ImgAns&rm=2",
    },
    {
      id: 5,
      name: "Blue Oxford Shirt",
      price: 999,
      category: "Shirts",
      colour: "Blue",
      size: "M",
      gender: "Men",
      newArrival: false,
      image:
        "https://i.pinimg.com/originals/f0/c8/71/f0c871e5d1a754fc9fcc1a70767b1e6a.jpg",
    },
    {
      id: 6,
      name: "Black Formal Shirt",
      price: 1099,
      category: "Shirts",
      colour: "Black",
      size: "XL",
      gender: "Men",
      newArrival: true,
      image:
        "https://tse2.mm.bing.net/th/id/OIP.J1iTvEWVkF-AUOgW-EtfHwHaJ4?r=0&rs=1&pid=ImgDetMain&o=7&rm=3",
    },

    // JEANS
    {
      id: 7,
      name: "Wide Fit Blue Jeans",
      price: 1299,
      category: "Jeans",
      colour: "Blue",
      size: "M",
      gender: "Men",
      newArrival: true,
      image:
        "https://tse3.mm.bing.net/th/id/OIP.c12OpoDUXAWLfyajjBnEtAHaL0?r=0&rs=1&pid=ImgDetMain&o=7&rm=3",
    },
    {
      id: 8,
      name: "Black Straight Jeans",
      price: 1399,
      category: "Jeans",
      colour: "Black",
      size: "L",
      gender: "Men",
      newArrival: false,
      image:
        "https://tse2.mm.bing.net/th/id/OIP.f448gsDtS8r8TzvWaJRPCAHaJQ?r=0&rs=1&pid=ImgDetMain&o=7&rm=3",
    },
    {
      id: 9,
      name: "Classic Blue Denim",
      price: 1199,
      category: "Jeans",
      colour: "Blue",
      size: "S",
      gender: "Women",
      newArrival: true,
      image:
        "https://i.pinimg.com/736x/11/db/3f/11db3f4154dfb72dea50c4ba5331e2be.jpg",
    },

    // SHOES
    {
      id: 10,
      name: "Classic White Sneakers",
      price: 1499,
      category: "Shoes",
      colour: "White",
      size: "9",
      gender: "Women",
      newArrival: false,
      image:
        "https://i.pinimg.com/originals/f3/a5/7c/f3a57cda5b4675ac6b1364e34244a349.jpg",
    },
    {
      id: 11,
      name: "Black Running Shoes",
      price: 1799,
      category: "Shoes",
      colour: "Black",
      size: "9",
      gender: "Men",
      newArrival: true,
      image:
        "https://tse1.mm.bing.net/th/id/OIP.zMCKKUfPV48MqkPc89GKcQHaHa?r=0&rs=1&pid=ImgDetMain&o=7&rm=3",
    },
    {
      id: 12,
      name: "Blue Sports Sneakers",
      price: 1699,
      category: "Shoes",
      colour: "Blue",
      size: "10",
      gender: "Men",
      newArrival: true,
      image:
        "https://img.freepik.com/premium-photo/blue-sports-shoes_823919-6703.jpg",
    },
  ];

  const filteredProducts = products.filter((product) => {
    const matchesSearch = product.name
      .toLowerCase()
      .includes(search.toLowerCase());

    const matchesCategory = category === "All" || product.category === category;

    const matchesColour = colour === "All" || product.colour === colour;

    const matchesSize = size === "All" || product.size === size;

    const matchesPage =
      activePage === "products" ||
      (activePage === "men" && product.gender === "Men") ||
      (activePage === "women" && product.gender === "Women") ||
      (activePage === "new" && product.newArrival);

    return (
      matchesSearch &&
      matchesCategory &&
      matchesSize &&
      matchesColour &&
      matchesPage
    );
  });
  function addToCart(products: Product) {
    const existingItem = cart.find((item) => item.product.id === products.id);
    if (existingItem) {
      const newCart = cart.map((item) => {
        if (item.product.id === products.id) {
          return {
            ...item,
            quantity: item.quantity + 1,
          };
        }
        return item;
      });
      setCart(newCart);
    } else {
      setCart([...cart, { product: products, quantity: 1 }]);
    }
  }
  function removeFromCart(productId: number) {
    const newCart = cart.filter((item) => item.product.id !== productId);
    setCart(newCart);
  }

  function increasingQuantity(productId: number) {
    const newCart = cart.map((item) => {
      if (item.product.id === productId) {
        return {
          ...item,
          quantity: item.quantity + 1,
        };
      }
      return item;
    });
    setCart(newCart);
  }

  function decreasingQuantity(productId: number) {
    const item = cart.find((item) => item.product.id === productId);
    if (item && item.quantity === 1) {
      removeFromCart(productId);
      return;
    }
    const newCart = cart.map((item) => {
      if (item.product.id === productId) {
        return {
          ...item,
          quantity: item.quantity - 1,
        };
      }
      return item;
    });
    setCart(newCart);
  }
  const totalPrice = cart.reduce(
    (total, item) => total + item.product.price * item.quantity,
    0,
  );

  return (
    <div className={darkMode ? "app dark" : "app"}>
      <div className="top-bar">
        <h1 className="logo" onClick={() => setActivePage("products")}>
          STYLEHUB
        </h1>

        <div className="nav-links">
          <button onClick={() => setActivePage("products")}>Products</button>

          <button onClick={() => setActivePage("men")}>Men</button>

          <button onClick={() => setActivePage("women")}>Women</button>

          <button onClick={() => setActivePage("new")}>New Arrivals</button>
        </div>

        <div className="search-container">
          <input
            type="text"
            placeholder="Search for products, styles, or brands..."
            value={search}
            onChange={(event) => setSearch(event.target.value)}
          />
        </div>

        <button className="cart-button" onClick={() => setShowCart(true)}>
          🛒 Cart ({cart.length})
        </button>

        <button className="theme-button" onClick={() => setDarkMode(!darkMode)}>
          {darkMode ? "☀️" : "🌗"}
        </button>
      </div>
      {showCart ? (
        <Cart
          cart={cart}
          removeFromCart={removeFromCart}
          increaseQuantity={increasingQuantity}
          decreaseQuantity={decreasingQuantity}
          totalPrice={totalPrice}
          onBack={() => setShowCart(false)}
        />
      ) : (
        <>
          <div className="filter-bar">
            <div className="filter-title">Filters</div>

            <div className="filter-group">
              <label>Category</label>

              <select
                value={category}
                onChange={(event) => setCategory(event.target.value)}
              >
                <option value="All">All</option>
                <option value="T-Shirts">T-Shirts</option>
                <option value="Jeans">Jeans</option>
                <option value="Shirts">Shirts</option>
                <option value="Shoes">Shoes</option>
              </select>
            </div>

            <div className="filter-group">
              <label>Colour</label>

              <select
                value={colour}
                onChange={(event) => setColour(event.target.value)}
              >
                <option value="All">All</option>
                <option value="Black">Black</option>
                <option value="White">White</option>
                <option value="Blue">Blue</option>
              </select>
            </div>

            <div className="filter-group">
              <label>Size</label>

              <select
                value={size}
                onChange={(event) => setSize(event.target.value)}
              >
                <option value="All">All</option>
                <option value="S">Small</option>
                <option value="M">Medium</option>
                <option value="L">Large</option>
                <option value="XL">Extra Large</option>
                <option value="9">9</option>
                <option value="10">10</option>
              </select>
            </div>
          </div>
          <div className="products-header">
            <h2>
              {activePage === "products" && "All Products"}
              {activePage === "men" && "Men's Collection"}
              {activePage === "women" && "Women's Collection"}
              {activePage === "new" && "New Arrivals"}
            </h2>

            <span className="product-count">
              Showing {filteredProducts.length} products
            </span>
          </div>
          <div className="product-grid">
            {filteredProducts.map((product) => (
              <ProductCard
                product={product}
                key={product.id}
                addToCart={addToCart}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
}
export default App;
