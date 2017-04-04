var app = angular.module('myapp');

app.directive('copyright', function(){
  return {
    link: function(){
      //console.log('copyright directive');
    },
    template: '<p class="text-muted">Copyright © {{config.companyName}} '+ new Date().getFullYear() +'</p>'
  }
});
