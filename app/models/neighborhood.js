import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr(),
  house: DS.hasMany('house', {async: true}),
  location: DS.attr() 
});
