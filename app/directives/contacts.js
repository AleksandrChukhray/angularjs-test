/**
 * Created by zimmalex on 03.04.17.
 */

var app = angular.module('myapp');

app.directive('contactsList', function(){
  return {
    link: function(){
      console.log('contactsList directive');
    }
  }
});
