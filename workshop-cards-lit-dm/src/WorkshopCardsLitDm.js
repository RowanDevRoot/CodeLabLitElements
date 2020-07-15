import { LitElement, html, } from 'lit-element';
import { getComponentSharedStyles } from '@bbva-web-components/bbva-core-lit-helpers';
import { BGADPCardsGetV0 } from '@cells-components/bgadp-cards-v0';
import styles from './WorkshopCardsLitDm-styles.js';
/**
This component ...

Example:

```html
<workshop-cards-lit-dm></workshop-cards-lit-dm>
```

##styling-doc

@customElement workshop-cards-lit-dm
@polymer
@LitElement
@demo demo/index.html
*/
export class WorkshopCardsLitDm extends LitElement {
  static get is() {
    return 'workshop-cards-lit-dm';
  }

  // Declare properties
  static get properties() {
    return {
      host: { type:String, },
version: { type: Number, },
requiredToken: { type: String, },
native: { type: Boolean, },

    };
  }

  // Initialize properties
  constructor() {
    super();
    this.host = '';
    this.version = 0;
    this.requiredToken = 'tsec';
    this.native = false;
    
  }
  getCards() {
    const service = new BGADPCardsGetV0({
      host: this.host,
      version: this.version,
      requiredToken: this.requiredToken,
      native: this.native
    });
    service.generateRequest().then(success => {
      this._handleSuccess(success)
    }).catch(error => this._handleError(error));
  }
  _handleSuccess(success) {
    this.dispatchEvent(new CustomEvent('cards-list', {
      bubbles: true,
      composed: true,
      detail: this._normalizeResponse(JSON.parse(success.response))
    }));
  }
  _normalizeResponse(response) {
    return response.data.map(card => {
      return {
        name: card.title.name,
        currency: card.availableBalance.currentBalances[0].currency,
        amount: card.availableBalance.currentBalances[0].amount,
        cardId: card.cardId
      };
    });
  }
  _handleError(error) {
    this.dispatchEvent(new CustomEvent('request-error', {
      bubbles: true,
      composed: true,
      detail: JSON.parse(error.response)
    }));
  }
    

  static get styles() {
    return [
      styles,
      getComponentSharedStyles('workshop-cards-lit-dm-shared-styles')
    ]
  }

  // Define a template
  render() {
    return html`
      <slot></slot>
      <p>Welcome to ${this.name}</p>
    `;
  }
}
