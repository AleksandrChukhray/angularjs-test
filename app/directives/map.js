/**
 * Created by zimmalex on 03.04.17.
 */
var app = angular.module('myapp');

app.directive('googleMap', function(){
  return {
    link: function(){
      console.log('map directive');
    },
    templateUrl: "directiveTpl/map.tpl.html"
  }
});
