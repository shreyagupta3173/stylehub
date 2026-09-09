# STYLEHUB

A modern, responsive fashion shopping cart application built using **React, TypeScript, HTML, and CSS**.

STYLEHUB is a frontend-only e-commerce experience that allows users to browse fashion products, search and filter products, add items to a shopping cart, manage quantities, and view the total cart value.

The application does **not use a backend, database, authentication system, or payment gateway**. All product and cart data is managed locally within the React application.

---

# 1. About the STYLEHUB Experience

## What is STYLEHUB?

STYLEHUB is a fashion-focused shopping cart web application designed to provide a simple and intuitive online shopping experience.

The application allows users to:

- Browse fashion products
- Search for products
- Filter products by category
- Filter products by colour
- Filter products by size
- Browse products through different sections such as Men, Women, and New Arrivals
- Add products to the cart
- Increase or decrease product quantities
- Remove products from the cart
- View the price of individual cart items
- View the total cart price
- Switch between light and dark mode

The application is designed as a **Single Page Application (SPA)** using React.

## Shopping Experience

The main shopping page acts as the product catalogue.

Users can browse products displayed as individual product cards.

Each product contains information such as:

- Product name
- Price
- Category
- Colour
- Size
- Product image
- Gender/collection
- New-arrival status

### Product Catalogue

The application currently contains products across categories such as:

- T-Shirts
- Shirts
- Jeans
- Shoes

Products are displayed using a responsive CSS grid.

A typical product card contains:

```text
┌──────────────────────────┐
│                          │
│       Product Image      │
│                          │
├──────────────────────────┤
│ Product Name             │
│ ₹499                     │
│ Colour: Black            │
│ Size: M                  │
│                          │
│      Add to Cart         │
└──────────────────────────┘
```

## Search and Filtering

STYLEHUB provides a search bar that allows users to quickly find products by name.

Products can also be filtered using:

- Category
- Colour
- Size

These filters can be combined with search to narrow down the product catalogue.

For example:

```text
Category → Shirts
Colour   → Black
Size     → XL
```

The application displays only the products matching all selected conditions.

## Product Sections

The navigation provides dedicated shopping sections for:

- **Products** — displays the complete product catalogue
- **Men** — displays products assigned to the men's collection
- **Women** — displays products assigned to the women's collection
- **New Arrivals** — displays products marked as new arrivals

These sections use the same product catalogue and dynamically filter the displayed products instead of creating separate copies of the shopping page.

## Shopping Cart

STYLEHUB includes a dedicated shopping cart page where users can manage their selected products.

Users can:

- Add products to the cart
- Increase product quantity
- Decrease product quantity
- Remove products
- View individual item totals
- View the overall cart total
- Continue shopping

When the same product is added multiple times, its quantity is increased instead of creating duplicate cart entries.

For example:

```text
Oversized Black T-Shirt
₹499 × 3 = ₹1497
```

The cart total is automatically recalculated whenever the cart changes.

## Light and Dark Mode

STYLEHUB supports both **Light Mode** and **Dark Mode**.

Users can switch between the two themes directly from the navigation header.

The theme changes the appearance of:

- Page background
- Text
- Product cards
- Search bar
- Filters
- Cart
- Buttons

The theme is managed using React state and dynamically applied CSS classes.

## Frontend-Only Architecture

STYLEHUB intentionally operates without a backend.

There is currently:

- No backend server
- No database
- No authentication
- No payment gateway
- No external product API
- No server-side order processing

Product information is stored locally within the React application.

Cart information is managed using React's `useState()` hook.

This keeps the project focused on demonstrating the frontend shopping experience, React fundamentals, state management, filtering, and user interaction.

---

# 2. Repo Structure

STYLEHUB follows a simple and modular React + TypeScript repository structure.

```text
STYLEHUB/
│
├── public/
│   └── [public assets]
│
├── src/
│   │
│   ├── assets/
│   │   └── [static assets]
│   │
│   ├── components/
│   │   ├── ProductCard.tsx
│   │   └── cart.tsx
│   │
│   ├── types/
│   │   └── product.ts
│   │
│   ├── App.tsx
│   ├── App.css
│   ├── index.css
│   └── main.tsx
│
├── .gitignore
├── index.html
├── package.json
├── package-lock.json
├── README.md
│
├── tsconfig.json
├── tsconfig.app.json
├── tsconfig.node.json
│
└── vite.config.ts
```

### `public/`

Contains publicly accessible static assets used by the application.

### `src/`

Contains the main source code of the STYLEHUB application.

### `src/assets/`

Contains static assets used within the application, such as images and other frontend resources.

### `src/components/`

Contains reusable React components.

#### `ProductCard.tsx`

Responsible for rendering individual product cards, including:

- Product image
- Product name
- Price
- Colour
- Size
- Add to Cart functionality

#### `cart.tsx`

Responsible for rendering the dedicated shopping cart interface, including:

- Cart items
- Product quantities
- Quantity controls
- Remove functionality
- Individual item totals
- Overall cart total
- Continue Shopping action

### `src/types/`

Contains TypeScript type definitions used throughout the application.

#### `product.ts`

Defines the structure of a product using the `Product` interface.

### `App.tsx`

Acts as the main application component and manages the core application logic, including:

- Product catalogue
- Search
- Product filtering
- Navigation between product collections
- Cart state
- Quantity management
- Cart total calculation
- Light/dark mode
- Switching between the shopping and cart views

### `App.css`

Contains the primary styling for the application, including:

- Header and navigation
- Search bar
- Filters
- Product cards
- Product grid
- Cart page
- Buttons
- Dark mode
- Responsive layouts
- Hover effects

### `index.css`

Contains global styles and base styling shared across the application.

### `main.tsx`

The entry point of the React application. It mounts the main `App` component into the HTML document.

### `index.html`

The main HTML document used by Vite to load the React application.

### `package.json`

Contains the project's dependencies, scripts, and package configuration.

### `vite.config.ts`

Contains the Vite configuration used during development and build processes.

### TypeScript Configuration

The repository contains separate TypeScript configuration files for the application and development tooling:

- `tsconfig.json`
- `tsconfig.app.json`
- `tsconfig.node.json`

### `README.md`

Contains the project documentation, including an overview of the STYLEHUB experience and repository structure.

## Repository Architecture

The overall repository is organized around a simple separation of responsibilities:

```text
src/
│
├── App.tsx
│     │
│     ├── Application State
│     ├── Product Data
│     ├── Filtering Logic
│     └── Cart Logic
│
├── components/
│     │
│     ├── ProductCard.tsx
│     └── cart.tsx
│
├── types/
│     │
│     └── product.ts
│
└── CSS
      │
      ├── App.css
      └── index.css
```

This structure keeps the application lightweight while separating reusable components, type definitions, application logic, and styling.
