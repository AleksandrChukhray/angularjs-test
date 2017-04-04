/**
 * Created by zimmalex on 04.04.17.
 */
'use strict';

var app = angular.module('myapp');

app.controller('rootCtrl', function ($scope) {

  $scope.config = {
    companyName: 'My company',
    contacts: {
      address: '3481 Melrose Place Beverly Hills, CA 90210',
      phone: '(123) 456-7890',
      email: 'name@example.com',
      fb: 'https://www.facebook.com/',
      twitter: 'https://twitter.com/',
      dribbble: 'https://dribbble.com/'
    }
  };

  $scope.isActive = function () {
    
  }

});

app.controller('MainCtrl', function($scope){
  console.log('MainCtrl');

  $scope.myInterval = 5000;
  $scope.noWrapSlides = false;
  $scope.active = 0;
  $scope.noTransition = false;
  $scope.sliderCount = 6;

  var slides = $scope.slides = [],
    currIndex = 0;

  $scope.addSlide = function() {
    var newWidth = 1600 + slides.length + 1,
      newHeight = 500;
    slides.push({
      image: '//unsplash.it/' + newWidth + '/' + newHeight,
      text: ['Nice image','Awesome photograph','That is so cool','I love that'][slides.length % 4],
      id: currIndex++
    });
  };


  for (var i = 0; i < $scope.sliderCount; i++) {
    $scope.addSlide();
  }
});

app.controller('MapCtrl', function($scope){
  console.log('MapCtrl');
});

app.controller('ContactsCtrl', function($scope){
  console.log('ContactsCtrl');
});

app.controller('NotFoundCtrl', function($scope){
  console.log('NotFoundCtrl');
});
