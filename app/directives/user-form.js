/**
 * Created by zimmalex on 03.04.17.
 */

var app = angular.module('myapp');

app.directive('userForm', function(){
  return {
    link: function(){
      console.log('userForm directive');
    },
    templateUrl: "directives/directiveTpl/user-form.tpl.html"
  }
});
