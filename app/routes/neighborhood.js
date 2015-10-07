import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return this.store.findRecord('neighborhood', params.neighborhood_id);
  },
   actions: {
     saveNewHouse(params) {
     var newHouse = this.store.createRecord('house', params);
     newHouse.save();
     params.neighborhood.save();
     this.transitionTo('neighborhood', params.neighborhood);
    }
  }
});
