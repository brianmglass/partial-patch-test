import Ember from 'ember';
import DS from 'ember-data';

export default Ember.Controller.extend({
actions:{
doPatchTest(){
	//alert("DoubleClickableComponent was clicked!");
	this.store.findRecord('author', 1).then(function(author) {
 	//author.get('name'); 
  	//author.set('name', 'test name');
	author.save(); // => PATCH to '/authors/1'
});
	}
}
});
