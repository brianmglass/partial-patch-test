import Ember from 'ember';

var get = Ember.get;

export default Ember.Mixin.create({

  updateRecord: function (store, type, record) {
    var data = {};
    var serializer = store.serializerFor(type.typeKey);

    serializer.serializeIntoHash(data, type, record, {
      includeId: true,
      onlyDirtyAttributes: true
    });

    var id = get(record, 'id');
    var url = this.buildURL(type.typeKey, id, record);

    return this.ajax(url, "PATCH", { data: data });
  }

});
