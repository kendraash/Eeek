import Ember from 'ember';
export default Ember.Component.extend({
  map: Ember.inject.service('google-map'),

  actions: {
    showMap(model) {

      var container = this.$('.map-display')[0];
      var options = {
        center: this.get('map').center(45.5200, -122.6819),
        zoom: 10
      };
      var newMap = this.get('map').findMap(container, options);
      var styles = [
              {
                "stylers": [
              { "saturation": -100 }
              ]
            },{
              "featureType": "road",
              "stylers": [
            { "hue": "#ff0008" },
          { "color": "#ff0008" },
          { "saturation": -70 }
          ]
          },{
            "featureType": "water",
            "stylers": [
          { "color": "#808080" },
          { "hue": "#ff8800" },
          { "saturation": -100 },
          { "gamma": 9.99 },
          { "lightness": -100 }
          ]
          },{
          }
          ];


      newMap.setOptions({styles: styles});

      var image= 'images/mapMarker.png';
      var address = model.get('address');

      var geocoder = new google.maps.Geocoder();

      geocoder.geocode( {'address': address}, function(results, status) {
        if (status == google.maps.GeocoderStatus.OK) {
          newMap.setCenter(results[0].geometry.location);
          var marker = new google.maps.Marker({
            map: newMap,
            position: results[0].geometry.location,
            icon: image
          });
        } else {
          alert("Geocode was not successful for the following reason: " + status);
        }
      });



    }
  }
});
