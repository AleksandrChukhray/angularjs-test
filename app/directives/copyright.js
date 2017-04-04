var app = angular.module('myapp');

app.directive('copyright', function(){
  return {
    link: function(){
      console.log('copyright directive');
    }
  }
});
