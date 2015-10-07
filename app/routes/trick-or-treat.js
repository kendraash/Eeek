import Ember from 'ember';

export default Ember.Route.extend({
    model() {
        return this.store.findAll('neighborhood')
    },

    actions: {
      saveNewNeighborhood(params) {
        var newNeighborhood = this.store.createRecord('neighborhood', params);
        newNeighborhood.save();
        this.transitionTo('trick-or-treat');
      }
    }
});
