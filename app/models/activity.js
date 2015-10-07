import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr(),
  city: DS.attr(),
  zipCode: DS.attr(),
  kid: DS.attr(),
  image: DS.attr(),
  category: DS.belongsTo('category', {async: true})
});
