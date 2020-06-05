import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | great', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:great');
    assert.ok(route);
  });
});
