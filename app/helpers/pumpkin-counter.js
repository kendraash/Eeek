import Ember from 'ember';

export function pumpkinCounter(params) {
  var rating = params[0];
  var pumpkins = []
  var pumpkin = '<img src="/images/mapMarker.png">'
  for (var index = rating; index >= 1; index-= 1 ){
    pumpkins.push(pumpkin);

  }
  return pumpkins.join("");
}

export default Ember.Helper.helper(pumpkinCounter);
