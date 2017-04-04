var app = angular.module('myapp');

app.directive('lastNews', function(){
  return {
    link: function(){
      console.log('lastNews directive');
    }
  }
});
