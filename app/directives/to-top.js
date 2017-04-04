var app = angular.module('myapp');

app.directive('toTop', function(){
  return {
    link: function(){
      var link = $("a[href='#top']");

      $(window).on('scroll', function(){
        if($(this).scrollTop() > 500){
          link.fadeIn('slow');
        }else{
          link.fadeOut('slow');
        }
      });

      link.click(function() {
        $("html, body").animate({ scrollTop: 0 }, "slow");
        return false;
      });

    },
    template: "<a href='#top' class='to-top' id='to-top'><i class='fa fa-angle-up'></i></a>"
  }
});
