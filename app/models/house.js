import DS from 'ember-data';

export default DS.Model.extend({
  description: DS.attr(),
  address: DS.attr(),
  neighborhood: DS.belongsTo('neighborhood', { async: true}),
  image: DS.attr(),
  rating: DS.attr('number'),
  reviews: DS.hasMany('review', { async: true})
});
