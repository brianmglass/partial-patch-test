import Ember from 'ember';
import DS from 'ember-data';
import PatchSerializerMixin from '../mixins/patch-serializer';

var underscore = Ember.String.underscore;

export default DS.JSONAPISerializer.extend(PatchSerializerMixin,{
//export default DS.JSONAPISerializer.extend({

	  keyForAttribute: function(attr) {
    return underscore(attr);
  },

  keyForRelationship: function(rawKey) {
    return underscore(rawKey);
  }
});
