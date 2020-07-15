import { html, fixture, assert, fixtureCleanup } from '@open-wc/testing';
import '../workshop-cards-lit.js';

suite('<workshop-cards-lit>', () => {
  let el;

  teardown(() => fixtureCleanup());

  setup(async () => {
    el = await fixture(html`<workshop-cards-lit></workshop-cards-lit>`);
    await el.updateComplete;
  });

  test('instantiating the element with default properties works', () => {
    const element = el.shadowRoot.querySelector('p');
    assert.equal(element.innerText, 'Welcome to Cells');
  });

});





