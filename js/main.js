/**
 * Created by WEB on 08.09.2016.
 */

/* preloader */
$(window).on('load', function () {
  setTimeout(function () {
    var $preloader = $('#page-preloader'),
      $spinner = $preloader.find('.spinner');
    $spinner.fadeOut();
    $preloader.delay(350).fadeOut('slow');
  }, 3000);
});

jQuery(document).ready(function ($) {

  $(window).on('load', function () {

  });

  const sectionMainContentPos = $('#section-main .content').position();

  /* FULLPAGE */
  $('#fullpage').fullpage({
    //Navigation
    menu: '#menu',
    lockAnchors: false,
    anchors: ['main', 'gallery', 'wood-vs-pvc', 'wood-vs-pvc-2', 'about-us'],
    navigation: true,
    navigationPosition: 'right',
    navigationTooltips: ['Главная', 'Галерея', 'Дерево vs. ПВХ', 'Дерево vs. ПВХ', 'Подробнее о нас'],
    showActiveTooltip: false,
    slidesNavigation: true,
    slidesNavPosition: 'bottom',

    //Scrolling
    css3: false,
    scrollingSpeed: 1000,
    autoScrolling: true,
    fitToSection: true,
    fitToSectionDelay: 1000,
    scrollBar: false,
    easing: 'easeOutCubic',
    easingcss3: 'ease',
    loopBottom: false,
    loopTop: false,
    loopHorizontal: true,
    continuousVertical: false,
    continuousHorizontal: true,
    scrollHorizontally: false,
    interlockedSlides: false,
    resetSliders: false,
    fadingEffect: true,
    normalScrollElements: '#element1, .element2',
    scrollOverflow: false,
    scrollOverflowOptions: null,
    touchSensitivity: 15,
    normalScrollElementTouchThreshold: 5,
    bigSectionsDestination: null,

    //Accessibility
    keyboardScrolling: true,
    animateAnchor: true,
    recordHistory: true,

    //Design
    controlArrows: true,
    verticalCentered: true,
    // sectionsColor : ['#ccc', '#fff'],
    paddingTop: '3em',
    paddingBottom: '10px',
    fixedElements: '#header, .footer',
    responsiveWidth: 0,
    responsiveHeight: 0,
    responsiveSlides: false,

    //Custom selectors
    sectionSelector: '.section',
    slideSelector: '.slide',

    //events
    onLeave: function (index, nextIndex, direction) {
      var leavingSection = $(this);


      /* leave */
      if (index == 1) {
        // Leave section MAIN
        TweenMax.to('.window', 0.3, {opacity: 0});
        TweenMax.to('#section-main .content',
          0.3,
          // {x:sectionMainContentPos.left},
          {x: +300, opacity: 0}
        );
      } else if (index == 2) {
        // Leave section GALLERY
        TweenMax.to('#slidesQ li', 0.3, {opacity: 0, ease: Expo.easeIn});
        TweenMax.to('#left', 0.3, {opacity: 0, x: -300, ease: Expo.easeIn});
        TweenMax.to('#right', 0.3, {opacity: 0, x: +300, ease: Expo.easeIn});
      } else if (index == 3) {
        // Leave section ENERGY-SAFETY
        TweenMax.to('.winter', 0.3, {opacity: 0, ease: Expo.easeIn, x: -120});
      }

      /* going to */
      if (nextIndex == 1) {
        // Going to section MAIN
        TweenMax.to('.window', 1, {opacity: 1});
        TweenMax.fromTo('#section-main .content',
          1,
          {opacity: 0},
          {x: 0, opacity: 1, ease: Expo.easeOut}
        );
      } else if (nextIndex == 2) {
        // Going to section GALLERY
        TweenMax.to('#slidesQ li', 0.5, {opacity: 1, ease: Expo.easeIn});
        TweenMax.fromTo(
          '#left',
          0.5,
          {opacity: 0, x: -300},
          {opacity: 1, x: 0, ease: Expo.easeIn});
        TweenMax.fromTo(
          '#right',
          0.5,
          {opacity: 0, x: +300},
          {opacity: 1, x: 0, ease: Expo.easeIn});
      } else if (nextIndex == 3) {
        // Going to section ENERGY-SAFETY
        TweenMax.fromTo('.winter', 2,
          {opacity: 0, x: -300},
          {opacity: 1, ease: Expo.easeOut, x: 0}
        );
        TweenMax.fromTo('.summer', 2.5,
          {opacity: 0, x: -300},
          {opacity: 1, ease: Expo.easeOut, x: 0}
        );
        TweenMax.fromTo('#section-energy-safety h1', 2,
          {opacity: 0, y: -500},
          {opacity: 1, ease: Expo.easeOut, y: 0}
        );
        TweenMax.fromTo('#section-energy-safety .content', 2.5,
          {opacity: 0, y: +300},
          {opacity: 1, ease: Expo.easeOut, y: 0}
        );
      } else if (nextIndex == 4) {
        // Going to section FACT
        TweenMax.fromTo('#section-fact h1', 2,
          {opacity: 0, y: -500},
          {opacity: 1, ease: Expo.easeOut, y: 0}
        );
        TweenMax.fromTo('#section-fact .content', 2.5,
          {opacity: 0, y: +300},
          {opacity: 1, ease: Expo.easeOut, y: 0}
        );
        TweenMax.fromTo('.info', 1.7,
          {opacity: 0, x: +600},
          {opacity: 1, ease: Expo.easeOut, x: 0}
        );
      } else if (nextIndex == 3) {
        // Going to section WOOD VS PVC 1
        TweenMax.fromTo('#section-wood-vs-pvc .info-block:nth-child(1)', 1,
          {opacity: 0, x: -500},
          {opacity: 1, ease: Circ.easeOut, x: 0}
        );
        TweenMax.fromTo('#section-wood-vs-pvc .info-block:nth-child(2)', 1.2,
          {opacity: 0, x: -500},
          {opacity: 1, ease: Circ.easeOut, x: 0}
        );
        TweenMax.fromTo('#section-wood-vs-pvc .info-block:nth-child(3)', 1.5,
          {opacity: 0, x: -500},
          {opacity: 1, ease: Circ.easeOut, x: 0}
        );
        TweenMax.fromTo(['.wood', '.pvc'], 1.5,
          {width: 0, height: 0},
          {ease: Expo.easeOut, width: 300, height: 330}
        );
      } else if (nextIndex == 4) {
        // Going to section WOOD VS PVC 2
        TweenMax.fromTo('#section-wood-vs-pvc-2 .info-block:nth-child(1)', 1,
          {opacity: 0, x: +500},
          {opacity: 1, ease: Circ.easeOut, x: 0}
        );
        TweenMax.fromTo('#section-wood-vs-pvc-2 .info-block:nth-child(2)', 1.2,
          {opacity: 0, x: +500},
          {opacity: 1, ease: Circ.easeOut, x: 0}
        );
        TweenMax.fromTo('#section-wood-vs-pvc-2 .info-block:nth-child(3)', 1.5,
          {opacity: 0, x: +500},
          {opacity: 1, ease: Circ.easeOut, x: 0}
        );
        TweenMax.fromTo(['.wood', '.pvc'], 1.5,
          {width: 0, height: 0},
          {ease: Expo.easeOut, width: 300, height: 330}
        );
      } else if (nextIndex == 5) {
        // Going to section ABOUT-US
        TweenMax.fromTo(['.about-block .h', '.about-block .h-2', '.about-block .h-3'], 1.5,
          {width: 0},
          {ease: Expo.easeOut, width: '50%'}
        );
        TweenMax.fromTo('.about-block p', 2,
          {opacity: 0},
          {ease: Circ.easeOut, opacity: 1}
        );
      }

    },
    afterLoad: function (anchorLink, index) {
    },
    afterRender: function () {
    },
    afterResize: function () {
    },
    afterSlideLoad: function (anchorLink, index, slideAnchor, slideIndex) {
    },
    onSlideLeave: function (anchorLink, index, slideIndex, direction, nextSlideIndex) {
    }
  });

  popUpHide();


  // отправка формы на почтовый ящик
  $("#call-form").submit(function () { // пeрeхвaтывaeм всe при сoбытии oтпрaвки
    var form = $(this); // зaпишeм фoрму, чтoбы пoтoм нe былo прoблeм с this
    var error = false; // прeдвaритeльнo oшибoк нeт
    form.find('input, textarea').each(function () { // прoбeжим пo кaждoму пoлю в фoрмe
      if ($(this).val() == '') { // eсли нaхoдим пустoe
        alert('Зaпoлнитe пoлe "' + $(this).attr('placeholder') + '"!'); // гoвoрим зaпoлняй!
        error = true; // oшибкa
      }
    });
    if (!error) { // eсли oшибки нeт
      var data = form.serialize(); // пoдгoтaвливaeм дaнныe
      $.ajax({ // инициaлизируeм ajax зaпрoс
        type: 'POST', // oтпрaвляeм в POST фoрмaтe, мoжнo GET
        url: 'ajax.php', // путь дo oбрaбoтчикa, у нaс oн лeжит в тoй жe пaпкe
        dataType: 'json', // oтвeт ждeм в json фoрмaтe
        data: data, // дaнныe для oтпрaвки
        beforeSend: function (data) { // сoбытиe дo oтпрaвки
          form.find('input[type="submit"]').attr('disabled', 'disabled'); // нaпримeр, oтключим кнoпку, чтoбы нe жaли пo 100 рaз
        },
        success: function (data) { // сoбытиe пoслe удaчнoгo oбрaщeния к сeрвeру и пoлучeния oтвeтa
          if (data['error']) { // eсли oбрaбoтчик вeрнул oшибку
            alert(data['error']); // пoкaжeм eё тeкст
          } else { // eсли всe прoшлo oк
            // очищаем поля ввода
            $('#call-form #tel').val('');
            $('#call-form #name').val('');
            alert('Спасибо за вашу заявку !'); // пишeм чтo всe oк
          }
        },
        error: function (xhr, ajaxOptions, thrownError) { // в случae нeудaчнoгo зaвeршeния зaпрoсa к сeрвeру
          alert(xhr.status); // пoкaжeм oтвeт сeрвeрa
          alert(thrownError); // и тeкст oшибки
        },
        complete: function (data) { // сoбытиe пoслe любoгo исхoдa
          form.find('input[type="submit"]').prop('disabled', false); // в любoм случae включим кнoпку oбрaтнo
          popUpHide();
        }

      });
    }
    return false; // вырубaeм стaндaртную oтпрaвку фoрмы
  });

  /* fullpage gallery slider */

  $.global = new Object();

  $.global.item = 1;
  $.global.total = 0;

  $(document).ready(function () {

    var WindowWidth = $(window).width();
    var SlideCount = $('#slidesQ li').length;
    var SlidesWidth = SlideCount * WindowWidth;

    $.global.item = 0;
    $.global.total = SlideCount;

    $('.slideQ').css('width', WindowWidth + 'px');
    $('#slidesQ').css('width', SlidesWidth + 'px');

    $("#slidesQ li:nth-child(1)").addClass('alive');

    $('#left').click(function () {
      Slide('back');
    });
    $('#right').click(function () {
      Slide('forward');
    });

  });

  function Slide(direction) {

    if (direction == 'back') {
      var $target = $.global.item - 1;
    }
    if (direction == 'forward') {
      var $target = $.global.item + 1;
    }

    if ($target == -1) {
      DoIt($.global.total - 1);
    } else if ($target == $.global.total) {
      DoIt(0);
    } else {
      DoIt($target);
    }


  }

  function DoIt(target) {

    var $windowwidth = $(window).width();
    var $margin = $windowwidth * target;
    var $actualtarget = target + 1;

    $("#slidesQ li:nth-child(" + $actualtarget + ")").addClass('alive');

    $('#slidesQ').css('transform', 'translate3d(-' + $margin + 'px,0px,0px)');

    $.global.item = target;

    $('#count').html($.global.item + 1);

  }

  /* TweenMax */


});

function popUpShow() {
  $('#popup').show();
}

function popUpHide() {
  $('#popup').hide();
}

// play video
var myVideo = document.getElementById("video1");

function playPause() {
  if (myVideo.paused)
    myVideo.play();
  else
    myVideo.pause();
}
