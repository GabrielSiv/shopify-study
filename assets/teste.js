class Teste extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    console.log("button");
    this.querySelectorAll("button").forEach((button) => {
      button.addEventListener("click", () => {
        const variantId = button.dataset.variantId;
        fetch(`/cart/add.js`, {
          method: "POST",
          body: JSON.stringify({
            items: [{ id: variantId, quantity: 1 }],
          }),
        }).then(() => (location.href = "/cart"));
      });
    });
  }
}

customElements.define("gabriel-teste", Teste);
