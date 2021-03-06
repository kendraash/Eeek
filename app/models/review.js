import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr(),
  comment: DS.attr(),
  house: DS.belongsTo('house', {async: true})
});
