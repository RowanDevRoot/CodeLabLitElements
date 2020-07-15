import { LitElement, html, } from 'lit-element';
import { getComponentSharedStyles } from '@bbva-web-components/bbva-core-lit-helpers';
import '@bbva-web-components/bbva-list-card';
import styles from './WorkshopCardsLit-styles.js';
/**
This component ...

Example:

```html
<workshop-cards-lit></workshop-cards-lit>
```

##styling-doc

@customElement workshop-cards-lit
@polymer
@LitElement
@demo demo/index.html
*/
export class WorkshopCardsLit extends LitElement {
  static get is() {
    return 'workshop-cards-lit';
  }

  // Declare properties
  static get properties() {
    return {
      productsList: { type: Array}
    };
  }

  // Initialize properties
  constructor() {
    super();
    this.productsList = [];
  }

  static get styles() {
    return [
      styles,
      getComponentSharedStyles('workshop-cards-lit-shared-styles')
    ]
  }

  // Define a template
  render() {
    return html`
    ${this.productsList.map(item => html`
    <bbva-list-card
      type="card"
      card-title="${item.name}"
      currency-code="${item.currency}"
      amount="${item.amount}"
      num-product="${item.cardId}"
      card-image="${item.image}"
    ></bbva-list-card>
    <hr>
  `)}
  `;
 
  }
}
