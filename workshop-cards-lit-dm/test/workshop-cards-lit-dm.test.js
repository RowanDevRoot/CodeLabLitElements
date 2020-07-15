import { html, fixture, assert, fixtureCleanup } from '@open-wc/testing';
import '../workshop-cards-lit-dm.js';

suite('<workshop-cards-lit-dm>', () => {
  let el;

  teardown(() => fixtureCleanup());

  setup(async () => {
    el = await fixture(html`<workshop-cards-lit-dm></workshop-cards-lit-dm>`);
    await el.updateComplete;
  });

  test('instantiating the element with default properties works', () => {
    const element = el.shadowRoot.querySelector('p');
    assert.equal(element.innerText, 'Welcome to Cells');
  });

});





