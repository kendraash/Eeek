import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {

  this.route('kids', {});
  this.route('adults', {});
  this.route('trickOrTreat', {});

});

export default Router;
