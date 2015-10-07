import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return Ember.RSVP.hash({
        activities: this.store.findAll('activity'),
        categories: this.store.findAll('category')
      });

  }
});
