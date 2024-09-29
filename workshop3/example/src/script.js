const root = document.querySelector("#root");

const products = [
  { title: "Product 1", alt: "Image-1" },
  { title: "Product 2", alt: "Image-1" },
  { title: "Product 3", alt: "Image-1" },
  { title: "Product 4", alt: "Image-1" },
  { title: "Product 5", alt: "Image-1" },
  { title: "Product 6", alt: "Image-1" },
];

function Card(props) {
  return React.createElement("div", { className: "shopping-item" }, [
    React.createElement("h1", null, [props.title]),
    React.createElement("img", {
      src: "https://source.unsplash.com/random/200x300",
      alt: props.alt,
    }),
  ]);
}

function App() {
  return React.createElement("main", { className: "container" }, [
    ...products.map((product) => React.createElement(Card, product)),
  ]);
}

ReactDOM.render(React.createElement(App), document.getElementById("root"));
