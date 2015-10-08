import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('kids', {});
  this.route('adults', {});
  this.route('trick-or-treat', {});
  this.route('neighborhood', {path: 'neighborhood/:neighborhood_id'});
  this.route('activities', {});
  this.route('house', {path: 'house/:house_id'});
  this.route('category', {path: '/category/:category_id'});
});

export default Router;
