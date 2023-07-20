import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

const menuItems = [
  {
    name: "Ramen",
    ingredients:
      "Fresh wheat noodles served in a flavorful broth, topped with succulent slices of tender pork, seaweed, and garnished with green onions.",
    price: 980,
    isSoldOut: false,
    photoName: "/menu/ramen.jpg",
  },
  {
    name: "Gyoza",
    ingredients:
      "Delicate dumplings filled with a savory mixture of ground pork, finely chopped cabbage, minced garlic, ginger, and seasoned with soy sauce.",
    price: 380,
    isSoldOut: false,
    photoName: "/menu/gyoza.jpg",
  },
  {
    name: "Tempura",
    ingredients:
      "Lightly battered and deep-fried shrimp, along with an assortment of fresh vegetables such as sweet potato, zucchini, and eggplant, served with a traditional dipping sauce.",
    price: 680,
    isSoldOut: false,
    photoName: "/menu/tempura.png",
  },
  {
    name: "Sashimi",
    ingredients:
      "Fresh slices of raw fish including tuna, salmon, and yellowtail, expertly prepared to showcase the natural flavors and textures of the seafood.",
    price: 1280,
    isSoldOut: false,
    photoName: "/menu/sashimi.jpg",
  },
  {
    name: "Teriyaki Chicken",
    ingredients:
      "Tender chicken pieces marinated in a sweet and savory teriyaki sauce, garnished with sesame seeds and green onions.",
    price: 580,
    isSoldOut: true,
    photoName: "/menu/teriyaki-chicken.jpg",
  },
  {
    name: "Katsu Curry",
    ingredients:
      "Crispy breaded cutlet (chicken or pork) served with aromatic Japanese curry, steamed rice, and pickled vegetables.",
    price: 650,
    isSoldOut: false,
    photoName: "/menu/katsu-curry.jpg",
  },
];

function App() {
  return (
    <div className="container">
      <Header />
      <Menu />
      <Footer />
    </div>
  );
}

function Header() {
  return (
    <header className="header">
      <h1>
        Hana Japanese <br></br>Kitchen
      </h1>
    </header>
  );
}

function Menu() {
  const items = menuItems;
  const numItems = items.length;

  return (
    <main className="menu">
      <h2>Our menu</h2>

      {numItems > 0 ? (
        <>
          <p>
            Authentic Japanese cuisine. 6 creative dishes to choose from. All
            prepared with precision, using traditional methods and fresh
            ingredients.
          </p>
          <ul className="items">
            {items.map((food) => (
              <MenuItem menuItemObj={food} key={food.name} />
            ))}
          </ul>
        </>
      ) : (
        <p>We're still working on our menu. Please come back later :)</p>
      )}
    </main>
  );
}

function MenuItem({ menuItemObj }) {
  return (
    <li className={`item ${menuItemObj.isSoldOut ? "sold-out" : ""}`}>
      <img src={menuItemObj.photoName} alt={menuItemObj.name} />
      <div>
        <h3>{menuItemObj.name}</h3>
        <p>{menuItemObj.ingredients}</p>

        <span>
          {menuItemObj.isSoldOut ? "SOLD OUT" : `¥${menuItemObj.price}`}
        </span>
      </div>
    </li>
  );
}

function Footer() {
  const hour = new Date().getHours();
  const openHour = 8;
  const closeHour = 22;
  const isOpen = hour >= openHour && hour <= closeHour;
  console.log(isOpen);

  return (
    <footer className="footer">
      {isOpen ? (
        <Order closeHour={closeHour} openHour={openHour} />
      ) : (
        <p>
          We are closed. We're happy to welcome you between {openHour}:00 and{" "}
          {closeHour}:00!
        </p>
      )}
    </footer>
  );
}

function Order({ closeHour, openHour }) {
  return (
    <div className="order">
      <p>
        We're open from {openHour}:00 to {closeHour}:00. Come visit us or order
        online!
      </p>
      <button className="btn">Order</button>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
