import Ember from 'ember';

export default Ember.Component.extend({
  addNewNeighborhood: false,

  actions: {
    neighborhoodFormShow() {
      this.set('addNewNeighborhood', true);
    },

    saveNewNeighborhood() {
      var params = {
        name: this.get('name'),
        location: this.get('location')
      };

      this.set('addNewNeighborhood', false),
      this.sendAction('saveNewNeighborhood', params)
    }
  }
});
