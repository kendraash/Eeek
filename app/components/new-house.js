import Ember from 'ember';

export default Ember.Component.extend({
  addNewHouse: false,

  actions: {
    houseFormShow() {
      this.set('addNewHouse', true);
    },

    saveNewHouse() {
      var params = {
        description: this.get('description'),
        address: this.get('address'),
        image: this.get('image'),
        rating: this.get('rating'),
        neighborhood: this.get('neighborhood')
      };

      this.set('addNewHouse', false),
      this.sendAction('saveNewHouse', params)
    }
  }
});
