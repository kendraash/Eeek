import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr(),
  activities: DS.hasMany('activity', {async: true})
});
