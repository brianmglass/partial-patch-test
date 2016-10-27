import DS from 'ember-data';

export default DS.Model.extend({

    "name":DS.attr('string'),
    "username":DS.attr('string'),
    "email":DS.attr('string'),
    "address": DS.attr('string'),
    "phone":DS.attr('string'),
    "website": DS.attr('string'),
    "company": DS.attr()
});