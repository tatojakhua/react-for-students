import React from 'react';
import './App.css';

function ShoppingItem({ title, image, stockStatus, rating, badges }) {
  return (
    <div className="shopping-item">
      <h3>{title}</h3>
      <img src={image} alt="product" />
      <div className="description">
        <span>{stockStatus}</span>
        <span>{rating}/5</span>
      </div>
      <div className="badges">
        {badges.map((badge, index) => (
          <span key={index} className={`badge-${index + 1}`}>
            {badge}
          </span>
        ))}
      </div>
      <button>Add To Cart</button>
    </div>
  );
}

function ItemList() {
  const items = [
    {
      title: "Lorem, ipsum dolor",
      image: "https://source.unsplash.com/random/200x300",
      stockStatus: "In Stock",
      rating: "1.5",
      badges: ["sport", "lifestyle"],
    },
    {
      title: "Lorem, ipsum dolor",
      image: "https://source.unsplash.com/random/200x300",
      stockStatus: "Out Stock",
      rating: "3.4",
      badges: ["Casual", "lifestyle"],
    },
    {
      title: "Lorem, ipsum dolor",
      image: "https://source.unsplash.com/random/200x300",
      stockStatus: "Out Stock",
      rating: "0.5",
      badges: ["sport", "lifestyle"],
    },
    {
      title: "Lorem, ipsum dolor",
      image: "https://source.unsplash.com/random/200x300",
      stockStatus: "In Stock",
      rating: "1",
      badges: ["Casual", "lifestyle"],
    },
    {
      title: "Lorem, ipsum dolor",
      image: "https://source.unsplash.com/random/200x300",
      stockStatus: "In Stock",
      rating: "2.5",
      badges: ["Casual", "lifestyle"],
    },
    {
      title: "Lorem, ipsum dolor",
      image: "https://source.unsplash.com/random/200x300",
      stockStatus: "Out Stock",
      rating: "4.9",
      badges: ["sport", "lifestyle"],
    },
  ];

  return (
    <main className="container">
      {items.map((item, index) => (
        <ShoppingItem
          key={index}
          title={item.title}
          image={item.image}
          stockStatus={item.stockStatus}
          rating={item.rating}
          badges={item.badges}
        />
      ))}
    </main>
  );
}

function BlockListing() {
  return (
    <section className="container">
      <div className="block-listing">
        <span className="badge-1">Random 1</span>
        <span className="badge-2">Random 2</span>
        <span className="badge-3">Random 3</span>
        <span className="badge-4">Random 4</span>
      </div>
      <div className="banner"></div>
    </section>
  );
}

function App() {
  return (
    <div>
      <ItemList />
      <BlockListing />
    </div>
  );
}

export default App;

