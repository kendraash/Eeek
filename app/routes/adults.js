import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return Ember.RSVP.hash({
        activities: this.store.findAll('activity'),
        categories: this.store.findAll('category')
      });
    },
  actions: {
    save(params) {
      var newActivity = this.store.createRecord('activity', params);
      newActivity.save();
      this.transitionTo('adults');
    }
  }
});
