import { module, test } from 'qunit';
import { visit, currentURL } from '@ember/test-helpers';
import { setupApplicationTest } from 'ember-qunit';

module('Acceptance | great', function(hooks) {
  setupApplicationTest(hooks);

  test('visiting /great', async function(assert) {
    await visit('/great');

    assert.equal(currentURL(), '/');
  });
});
