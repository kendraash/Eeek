import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return this.store.findRecord('house', params.house_id);
  },
  actions: {
    saveNewReview(params) {
      var newReview = this.store.createRecord('review', params);
      newReview.save();
      params.house.save();
      this.transitionTo('house', params.house);
    }
  }
});
