import Ember from 'ember';

export default Ember.Component.extend({
  addNewReview: false,

  actions: {
    reviewFormShow() {
      this.set('addNewReview', true);
    },

    saveNewReview() {
      var params = {
        name: this.get('name'),
        comment: this.get('comment'),
        house: this.get('house')
      };

      this.set('addNewReview', false),
      this.sendAction('saveNewReview', params)
    }
  }
});
