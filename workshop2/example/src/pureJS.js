const root = document.querySelector("#root");

class DomItem {
  constructor(attributes, children) {
    this.attributes = attributes;
    this.children = children;
  }

  render() {
    return "Text";
  }
}

class Card extends DomItem {
  constructor(attributes, children) {
    super(attributes, children);
  }

  #buildImage() {
    const img = document.createElement("img");
    img.setAttribute("src", this.attributes.img.src);
    img.setAttribute("alt", this.attributes.img.alt);

    return img;
  }

  #buildTitle() {
    const h3 = document.createElement("h3");
    h3.textContent = this.attributes.title;

    return h3;
  }

  render() {
    const card = document.createElement("div");
    card.classList.add("shopping-item");
    card.append(this.#buildTitle(), this.#buildImage());

    return card;
  }
}

class App extends DomItem {
  constructor(attributes, children) {
    super(attributes, children);
  }

  render() {
    const main = document.createElement("main");
    main.classList.add(this.attributes.className);

    main.append(...this.children);
    return main;
  }
}

const cards = [];
for (let i = 1; i < 13; i += 1) {
  const card = new Card({
    title: `Product ${i}`,
    img: {
      src: "https://source.unsplash.com/random/200x300",
      alt: `Image ${i}`,
    },
  });
  cards.push(card);
}
const app = new App({ className: "container" }, [
  ...cards.map((card) => card.render()),
]);
root.appendChild(app.render());
