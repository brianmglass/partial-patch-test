import Ember from 'ember';

var get = Ember.get;

export default Ember.Mixin.create({

  serialize: function(record, options) {
    var json = {};

    if (options) {
      if (options.includeId) {
        let id = record.id;

        if (id) {
          json[get(this, 'primaryKey')] = id;
        }
      }

      if (options.onlyDirtyAttributes) {
        let dirtyAttributes = get(record, '_inFlightAttributes');

        record.eachAttribute(function(key, attribute) {
          if (key in dirtyAttributes) {
            this.serializeAttribute(record, json, key, attribute);
          }
        }, this);

        return json;
      }
    }

    return this._super(record, options);
  }

});
