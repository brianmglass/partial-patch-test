import DS from 'ember-data';
import PatchAdapterMixin from '../mixins/patch-adapter';

export default DS.JSONAPIAdapter.extend(PatchAdapterMixin,{
//export default DS.JSONAPIAdapter.extend({
	host: 'http://localhost:8080/v1'
});
