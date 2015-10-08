import Ember from 'ember';

export default Ember.Component.extend({
  addNewActivity: false,
  actions: {
    activityFormShow() {
      this.set('addNewActivity', true);
    },
   save() {
    var params = {
      name: this.get('name'),
      city: this.get('city'),
      zipCode: this.get('zipCode'),
      image: this.get('image'),
      kid: this.get('kid'),
      category: this.get('category'),
    };
      debugger;
    this.set("addNewActivity", false);
    this.sendAction('save', params);
    }
  }
});
