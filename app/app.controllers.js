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

  /* START SCRIPT */
  $(document).ready(function () {


    function tooltipsSVG(b, w, h) {
      var ratio = w/h,
        cwidth = $('.svg_map_wrap').width(),
        cheight = cwidth / ratio;

      var ratioW = cwidth / w,
        ratioH = cheight / h;

      var res = {
        x: ((b.x * ratioW) + (b.width/2 * ratioW)),
        y: ((b.y * ratioH) + (b.height/2 * ratioH))
      };
      return res;
    }


    //замена num_123 на url_123

    $('.svg_wrap a').each(function (index, item) {
      var $this = $(this);

      if($this.attr('id')) {
        var num = $this.attr('id').split('_');
        $this.attr('xlink:href', $scope.tooltips['url_'+num[1]]);
      }
    });
    //добавление подсказки на карту




    $(document).mouseover(function (e) {
      if($(e.target).closest('.svg_map_wrap').length || $(e.target).closest('.map-plan').length) {
        return;
      }
      $('.tooltip_plan').css({
        'opacity': '1',
        'z-index': '-1'
      }).removeClass('active');
      $('.stroke').attr('style', '');
      $('.imageSvg').css('opacity','1');
    });

    $('.svg_wrap a').mouseover(function (e) {

      var $svgWrap = $(this).closest('.svg_wrap');
      var color = $(this).closest('.svg_wrap').data('color');

      $('.imageSvg').css('opacity','0.7');

      $(this).find('.stroke').css('fill',color);

      $(this).find('.stroke').attr('style', '');

      var key = $(this).attr('id'),
        $tooltip = $(this).closest('.col-sm-9').find('.tooltip_plan'),
        $path = $(this).find('path');

      var b = $path[0].getBBox();
      var res = tooltipsSVG(b, parseInt($svgWrap.data('width')), parseInt($svgWrap.data('height')));
      var avgX = res.x,
        avgY = res.y;

      if($scope.tooltips[key] != undefined) {
        $tooltip.html($scope.tooltips[key]);

        var offsetX = $tooltip.innerWidth() / 2;
        var offsetY = $tooltip.innerHeight() *1 + 7;

        avgX -= offsetX;
        avgY -= offsetY;
        $tooltip.css({
          'top': avgY + 'px',
          'left': avgX + 'px',
          'opacity': '1',
          'z-index': '999999'
        }).addClass('active');
      }
    });

    $('.svg_wrap a').mouseout(function (e) {
      var $tooltip = $(this).closest('.col-sm-9').find('.tooltip_plan');

      if(!$tooltip.hasClass('active')) {
        $('.stroke').attr('style', '');
        $('.imageSvg').css('opacity','1');
      }

    });

    var list_tr = $('.plan_list_item');

    list_tr.mouseover(function () {
      var href = 'num_'+$(this).data('href');
      $('.svg_wrap a#'+href).mouseover();
    });

    list_tr.mouseout(function () {
      var href = 'num_'+$(this).data('href');
      $('.svg_wrap a#'+href).mouseout();
    });

    $('.svg_wrap a').click(function () {
      window.location.href = $(this).attr('xlink:href');
    });

    list_tr.click(function () {
      var href = 'num_'+$(this).data('href');
      $('.svg_wrap a#'+href).click();
    });

  });





  /* END SCRIPT */

  $scope.tooltips = {
    'num_223': '4kids',
    'url_223': '/mshops/226.htm',
    'num_365': '7D кинотеатр',
    'url_365': '/mshops/1528.htm',
    'num_205': 'adidas',
    'url_205': '/mshops/234.htm',
    'num_222': 'Alibi',
    'url_222': '/MOZAIKA.htm',
    'num_343': 'Anabel Arto ',
    'url_343': '/mshops/298.htm',
    'num_364': 'Angels',
    'url_364': '/mshops/1367.htm',
    'num_208': 'Antoni Zeeman',
    'url_208': '/AntoniZeeman.htm',
    'num_104': 'Antonio Biaggi',
    'url_104': '/mshops/4173.htm',
    'num_224': 'Arber',
    'url_224': '/Arber.htm',
    'num_142': 'Arena',
    'url_142': '/mshops/6594.htm',
    'num_390': 'Ares',
    'url_390': '/mshops/5534.htm',
    'num_362': 'Atlantic',
    'url_362': '/mshops/1211.htm',
    'num_102': 'Aurum',
    'url_102': '/mshops/169.htm',
    'num_328': 'Avva',
    'url_328': '/AVVA.htm',
    'num_3221': 'BAGSetc ',
    'url_3221': '/mshops/346.htm',
    'num_313': 'Belle Avenue',
    'url_313': '/Belle_Avenue.htm',
    'num_327': 'Bembi',
    'url_327': '/mshops/351.htm',
    'num_219': 'Berlin',
    'url_219': '/Berlin.htm',
    'num_238': 'Bershka',
    'url_238': '/Bershka.htm',
    'num_215': 'Birginia',
    'url_215': '/mshops/267.htm',
    'num_340': 'Birginia Diamond',
    'url_340': '/mshops/296.htm',
    'num_363': 'Bretelle',
    'url_363': '/mshops/1527.htm',
    'num_140': 'Brocard',
    'url_140': '/mshops/219.htm',
    'num_354': 'Buon Aquisto',
    'url_354': '/BuonAquisto.htm',
    'num_249': 'Burger City',
    'url_249': '/mshops/258.htm',
    'num_322': 'Cat Orange™',
    'url_322': '/mshops/5582.htm',
    'num_237': 'Chester',
    'url_237': '/mshops/265.htm',
    'num_162': 'Chicco',
    'url_162': '/mshops/200.htm',
    'num_122': 'Cinema',
    'url_122': '/mshops/191.htm',
    'num_311': 'City Sport',
    'url_311': '/mshops/2159.htm',
    'num_1401': 'Colin\'s',
    'url_1401': '/colins.htm',
    'num_117': 'Comfy',
    'url_117': '/mshops/168.htm',
    'num_105': 'Crocs',
    'url_105': '/mshops/6459.htm',
    'num_207': 'Cropp Town',
    'url_207': '/Cropptown.htm',
    'num_378': 'Darts',
    'url_378': '/mshops/6636.htm',
    'num_335': 'Dec Art',
    'url_335': '/mshops/291.htm',
    'num_1432': 'Diamant 13',
    'url_1432': '/mshops/6304.htm',
    'num_125': 'Dizar',
    'url_125': '/mshops/194.htm',
    'num_211': 'Ecco',
    'url_211': '/mshops/240.htm',
    'num_357': 'Eveline',
    'url_357': '/mshops/1216.htm',
    'num_121': 'Fissman',
    'url_121': '/mshops/190.htm',
    'num_305': 'Giardini',
    'url_305': '/mshops/347.htm',
    'num_242': 'Gloria Jeans',
    'url_242': '/GloriaJeans.htm',
    'num_347': 'Goldi',
    'url_347': '/mshops/6730.htm',
    'num_236': 'House',
    'url_236': '/House.htm',
    'num_366': 'IC store ',
    'url_366': '/mshops/2131.htm',
    'num_355': 'Infors',
    'url_355': '/mshops/1349.htm',
    'num_2042': 'Inglot',
    'url_2042': '/mshops/3859.htm',
    'num_350': 'Jump Park',
    'url_350': '/mshops/4127.htm',
    'num_301': 'Jysk',
    'url_301': '/mshops/242.htm',
    'num_110': 'Kari',
    'url_110': '/mshops/181.htm',
    'num_115': 'Lenovo',
    'url_115': '/mshops/185.htm',
    'num_1411': 'Levi\'s',
    'url_1411': '/Levis.htm',
    'num_146': 'lifecell',
    'url_146': '/mshops/189.htm',
    'num_143': 'LTB',
    'url_143': '/LTB.htm',
    'num_216': 'Mama Pizza',
    'url_216': '/mshops/1154.htm',
    'num_338': 'Marc & Andre',
    'url_338': '/mshops/293.htm',
    'num_314': 'Marta Vladi',
    'url_314': '/mshops/5822.htm',
    'num_308': 'McDonald’s',
    'url_308': '/mshops/274.htm',
    'num_116': 'Medicine',
    'url_116': '/mshops/184.htm',
    'num_1091': 'Mega Vision',
    'url_1091': '/mshops/180.htm',
    'num_113': 'Megasport',
    'url_113': '/mshops/176.htm',
    'num_321': 'Milavitsa',
    'url_321': '/mshops/252.htm',
    'num_373': 'Mishele',
    'url_373': '/mshops/2781.htm',
    'num_221': 'Mohito',
    'url_221': '/MOHITO.htm',
    'num_331': 'Monro by Alexa',
    'url_331': '/mshops/287.htm',
    'num_370': 'Mr Kebap',
    'url_370': '/mshops/2162.htm',
    'num_239': 'Multibags',
    'url_239': '/mshops/261.htm',
    'num_204': 'Naf Naf',
    'url_204': '/mshops/233.htm',
    'num_136': 'Natural stone',
    'url_136': '/mshops/1033.htm',
    'num_120': 'Nimpha',
    'url_120': '/mshops/6836.htm',
    'num_201': 'O\'stin',
    'url_201': '/OSTIN.htm',
    'num_111': 'Olko',
    'url_111': '/mshops/2735.htm',
    'num_106': 'Olla',
    'url_106': '/mshops/178.htm',
    'num_2041': 'Only Italy',
    'url_2041': '/mshops/5042.htm',
    'num_203': 'Oodji',
    'url_203': '/oodji.htm',
    'num_2043': 'Pako Lorente',
    'url_2043': '/mshops/6303.htm',
    'num_371': 'Palazzo',
    'url_371': '/mshops/2782.htm',
    'num_376': 'Passage ',
    'url_376': '/mshops/284.htm',
    'num_145': 'Personage',
    'url_145': '/mshops/7030.htm',
    'num_210': 'Pierre Cardin',
    'url_210': '/mshops/239.htm',
    'num_356': 'Pretty Woman',
    'url_356': '/mshops/2158.htm',
    'num_332': 'Prima Vista',
    'url_332': '/mshops/288.htm',
    'num_2044': 'Pro-sport',
    'url_2044': '/mshops/5189.htm',
    'num_235': 'Pull&Bear',
    'url_235': '/PullBear.htm',
    'num_217': 'Reserved',
    'url_217': '/Reserved.htm',
    'num_307': 'Respect',
    'url_307': '/mshops/275.htm',
    'num_342': 'Rolada',
    'url_342': '/ROLADA.htm',
    'num_152': 'Sakvoyage',
    'url_152': '/mshops/166.htm',
    'num_315': 'Samsung',
    'url_315': '/mshops/283.htm',
    'num_240': 'Sinsay',
    'url_240': '/mshops/262.htm',
    'num_160': 'Sport Life',
    'url_160': '/mshops/160.htm',
    'num_361': 'Sportcenter Puma',
    'url_361': '/mshops/1215.htm',
    'num_126': 'Status',
    'url_126': '/mshops/196.htm',
    'num_135': 'Steel Story',
    'url_135': '/mshops/213.htm',
    'num_234': 'Stradivarius',
    'url_234': '/mshops/247.htm',
    'num_326': 'Stress',
    'url_326': '/Stress.htm',
    'num_346': 'Stress Kids',
    'url_346': '/mshops/6819.htm',
    'num_324': 'Stress Shoes',
    'url_324': '/mshops/2033.htm',
    'num_379': 'Tacco',
    'url_379': '/mshops/6306.htm',
    'num_214': 'Timberland',
    'url_214': '/Timberland.htm',
    'num_209': 'Tom Tailor',
    'url_209': '/mshops/238.htm',
    'num_1106': 'Top Shoes',
    'url_1106': '/mshops/1694.htm',
    'num_108': 'Top Shop',
    'url_108': '/mshops/179.htm',
    'num_360': 'Un’italiano vero',
    'url_360': '/mshops/1209.htm',
    'num_325': 'Vaismann',
    'url_325': '/Vaismann.htm',
    'num_372': 'Veneto',
    'url_372': '/mshops/2161.htm',
    'num_377': 'Veter',
    'url_377': '/mshops/2037.htm',
    'num_306': 'Vigoss',
    'url_306': '/Vigoss.htm',
    'num_129': 'ViVu',
    'url_129': '/mshops/1519.htm',
    'num_352': 'Voronin',
    'url_352': '/Voronin.htm',
    'num_112': 'VOVK',
    'url_112': '/mshops/6670.htm',
    'num_323': 'Vrode po mode',
    'url_323': '/mshops/6585.htm',
    'num_359': 'Wasabi',
    'url_359': '/mshops/1214.htm',
    'num_144': 'Weekender',
    'url_144': '/mshops/7029.htm',
    'num_154': 'Yamaha',
    'url_154': '/mshops/1098.htm',
    'num_107': 'Yves Rocher',
    'url_107': '/mshops/174.htm',
    'num_63': 'Zapravka',
    'url_63': '/mshops/340.htm',
    'num_130': 'Zarina',
    'url_130': '/mshops/208.htm',
    'num_141': 'Іntertop | KiddiTop',
    'url_141': '/mshops/186.htm',
    'num_336': 'Автодром',
    'url_336': '/mshops/2160.htm',
    'num_118': 'Алло',
    'url_118': '/mshops/187.htm',
    'num_66': 'Альфа-Банк',
    'url_66': '/mshops/343.htm',
    'num_1021': 'Біла ромашка',
    'url_1021': '/mshops/170.htm',
    'num_250': 'Боулинг "Lucky Strike"',
    'url_250': '/mshops/259.htm',
    'num_243': 'Будинок іграшок',
    'url_243': '/mshops/199.htm',
    'num_309': 'Будь здоровий',
    'url_309': '/bud_zdorovij.htm',
    'num_155': 'В Чехле',
    'url_155': '/mshops/163.htm',
    'num_22': 'Вареничная',
    'url_22': '/mshops/1855.htm',
    'num_228': 'Велодром "Вираж"',
    'url_228': '/mshops/250.htm',
    'num_151': 'Гномик',
    'url_151': '/mshops/206.htm',
    'num_374': 'Дворик Мастеров',
    'url_374': '/mshops/290.htm',
    'num_133': 'Дека',
    'url_133': '/mshops/210.htm',
    'num_127': 'Дом Кофе',
    'url_127': '/mshops/195.htm',
    'num_114': 'Золотой век',
    'url_114': '/mshops/183.htm',
    'num_233': 'Золотой век',
    'url_233': '/mshops/253.htm',
    'num_148': 'Зоомаркет "MasterZoo"',
    'url_148': '/mshops/205.htm',
    'num_330': 'Зоопарк "Страна Енотия"',
    'url_330': '/mshops/244.htm',
    'num_158': 'Картинг "Forsaж"',
    'url_158': '/mshops/167.htm',
    'num_230': 'Каток "Метеор"',
    'url_230': '/mshops/251.htm',
    'num_1271': 'Кибернетики',
    'url_1271': '/299.htm',
    'num_132': 'Киевский Ювелирный Завод',
    'url_132': '/mshops/6606.htm',
    'num_123': 'Киевстар',
    'url_123': '/mshops/192.htm',
    'num_248': 'Кинотеатр "Мультиплекс"',
    'url_248': '/mshops/202.htm',
    'num_353': 'Ложка',
    'url_353': '/mshops/303.htm',
    'num_67': 'Лото Маркет',
    'url_67': '/mshops/344.htm',
    'num_103': 'Люксоптика',
    'url_103': '/mshops/171.htm',
    'num_358': 'Люля',
    'url_358': '/mshops/1213.htm',
    'num_302': 'Майстерня карамелі',
    'url_302': '/mshops/6564.htm',
    'num_119': 'МТС',
    'url_119': '/mshops/188.htm',
    'num_3501': 'Новая почта',
    'url_3501': '/mshops/4112.htm',
    'num_339': 'Обмен валют',
    'url_339': '/mshops/294.htm',
    'num_156': 'Папирус Канцелярия',
    'url_156': '/mshops/300.htm',
    'num_375': 'Пейнтбол "Патриот"',
    'url_375': '/mshops/2815.htm',
    'num_69': 'Подиум',
    'url_69': '/mshops/341.htm',
    'num_341': 'Рандеву',
    'url_341': '/mshops/295.htm',
    'num_245': 'Ресторан Basta Pasta',
    'url_245': '/mshops/255.htm',
    'num_157': 'Ресторан Forsaж',
    'url_157': '/mshops/177.htm',
    'num_101': 'Сільпо',
    'url_101': '/mshops/162.htm',
    'num_1231': 'Связной',
    'url_1231': '/mshops/6837.htm',
    'num_213': 'Спортмастер',
    'url_213': '/mshops/241.htm',
    'num_134': 'Столичная Ювелирная Фабрика',
    'url_134': '/mshops/209.htm',
    'num_23': 'Сцена',
    'url_23': '/mshops/304.htm',
    'num_109': 'Табакерка',
    'url_109': '/mshops/1031.htm',
    'num_62': 'Теннисная площадка',
    'url_62': '/mshops/6523.htm',
    'num_312': 'Территория сна',
    'url_312': '/mshops/280.htm',
    'num_317': 'Торговые ряды "Factoria"',
    'url_317': '/mshops/243.htm',
    'num_124': 'Требуйте везде',
    'url_124': '/mshops/193.htm',
    'num_3021': 'Турагенство "Coral Travel"',
    'url_3021': '/mshops/6146.htm',
    'num_244': 'Фокстрот',
    'url_244': '/mshops/245.htm',
    'num_131': 'Часовой магазин',
    'url_131': '/mshops/1321.htm',
    'num_333': 'Чистый Дом',
    'url_333': '/mshops/2780.htm',
    'num_348': 'Чудо Парк',
    'url_348': '/mshops/306.htm',
    'num_345': 'Шалунишка',
    'url_345': '/mshops/216.htm',
    'num_139': 'Экспресс оптика',
    'url_139': '/mshops/217.htm',
  };
  $scope.arrayPlaces = [];


  for (var item in $scope.tooltips){
    if(item.match(/num/)){
      $scope.arrayPlaces.push({items: $scope.tooltips[item], id: (function(){ return item.split('_')[1]})()});
    }
  }

  $scope.onEnd = function(){
    $("#plan_list").mCustomScrollbar({
      axis:"y", // horizontal scrollbar
      mouseWheel:{ scrollAmount: 200 }
    });
  };

  $scope.reBuild = function(){
    $("#plan_list").mCustomScrollbar("update");
  }

  $scope.getUrl = function(id){
    return $scope.tooltips['url_'+id];
  }

});

app.directive("repeatEnd", function() {
  return {
    restrict: "A",
    link: function(scope, element, attrs) {
      if (scope.$last) {
        scope.$eval(attrs.repeatEnd);
      }
    }
  };
});

app.controller('ContactsCtrl', function($scope){
  console.log('ContactsCtrl');
});

app.controller('NotFoundCtrl', function($scope){
  console.log('NotFoundCtrl');
});
