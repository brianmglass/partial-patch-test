import Ember from 'ember';
import PatchAdapterMixin from 'ally-test/mixins/patch-adapter';
import { module, test } from 'qunit';

module('Unit | Mixin | patch adapter');

// Replace this with your real tests.
test('it works', function(assert) {
  let PatchAdapterObject = Ember.Object.extend(PatchAdapterMixin);
  let subject = PatchAdapterObject.create();
  assert.ok(subject);
});
