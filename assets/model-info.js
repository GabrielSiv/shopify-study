class ModelInfoCard extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  connectedCallback() {
    this.render();
  }

  render() {
    const model = this.getAttribute("model") || "";
    const wearingSize = this.getAttribute("wearing-size") || "";
    const height = this.getAttribute("height") || "";
    const bust = this.getAttribute("bust") || "";
    const waist = this.getAttribute("waist") || "";
    const hips = this.getAttribute("hips") || "";

    const modelLabel = this.getAttribute("model-label") || "Model";
    const sizeLabel = this.getAttribute("size-label") || "Wearing size";
    const heightLabel = this.getAttribute("height-label") || "Height";
    const bustLabel = this.getAttribute("bust-label") || "Bust";
    const waistLabel = this.getAttribute("waist-label") || "Waist";
    const hipsLabel = this.getAttribute("hips-label") || "Hips";

    const root = this.shadowRoot;
    if (!root) {
      return;
    }

    root.innerHTML = `
      <style>
        :host {
          display: block;
          font-family: inherit;
          color: inherit;
        }

        .card {
          display: grid;
          gap: 1.25rem;
          padding: 1.75rem;
          border-radius: 1.125rem;
          border: 1px solid rgb(0 0 0 / 0.08);
          background: linear-gradient(135deg, rgb(255 255 255 / 0.95), rgb(245 245 245 / 0.85));
          box-shadow: 0 18px 40px rgb(10 22 70 / 0.08);
        }

        .identity {
          display: flex;
          flex-wrap: wrap;
          gap: 1rem;
          align-items: center;
        }

        .identity-item {
          display: grid;
          gap: 0.35rem;
          min-width: 140px;
        }

        .label {
          font-size: 0.75rem;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: rgb(0 0 0 / 0.55);
        }

        .value {
          font-size: clamp(1.1rem, 2.5vw, 1.6rem);
          font-weight: 600;
        }

        .pill {
          display: inline-flex;
          align-items: center;
          padding: 0.4rem 0.85rem;
          border-radius: 999px;
          font-weight: 600;
          background: rgb(0 122 255 / 0.15);
          color: rgb(0 122 255);
        }

        .metrics {
          display: grid;
          gap: 0.85rem;
          grid-template-columns: repeat(auto-fit, minmax(160px, 1fr));
        }

        .metric {
          display: grid;
          gap: 0.35rem;
          padding: 1rem;
          border-radius: 0.875rem;
          border: 1px solid rgb(0 0 0 / 0.08);
          background: rgb(255 255 255);
        }
      </style>

      <article class="card">
        <header class="identity">
          ${
            model
              ? `
            <div class="identity-item">
              <span class="label">${modelLabel}</span>
              <span class="value">${model}</span>
            </div>`
              : ""
          }

          ${
            wearingSize
              ? `
            <div class="identity-item">
              <span class="label">${sizeLabel}</span>
              <span class="pill">${wearingSize}</span>
            </div>`
              : ""
          }
        </header>

        ${
          height || bust || waist || hips
            ? `
          <section class="metrics">
            ${
              height
                ? `
              <div class="metric">
                <span class="label">${heightLabel}</span>
                <span class="value">${height}</span>
              </div>`
                : ""
            }

            ${
              bust
                ? `
              <div class="metric">
                <span class="label">${bustLabel}</span>
                <span class="value">${bust}</span>
              </div>`
                : ""
            }

            ${
              waist
                ? `
              <div class="metric">
                <span class="label">${waistLabel}</span>
                <span class="value">${waist}</span>
              </div>`
                : ""
            }

            ${
              hips
                ? `
              <div class="metric">
                <span class="label">${hipsLabel}</span>
                <span class="value">${hips}</span>
              </div>`
                : ""
            }
          </section>`
            : ""
        }
      </article>
    `;
  }
}

customElements.define("model-info-card", ModelInfoCard);
