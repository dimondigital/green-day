/**
 * Created by WEB on 05.10.2016.
 */
var app = angular.module('website', ['ngAnimate', 'ui.bootstrap']);

app.controller('MainCtrl', function ($scope, $timeout, QueueService) {
  var INTERVAL = 3000,
    slides = [
      {id: "image00", src: "../assets/images/gallery/gallery_01.JPG"},
      {id: "image01", src: "../assets/images/gallery/gallery_02.JPG"},
      {id: "image02", src: "../assets/images/gallery/gallery_03.JPG"},
      {id: "image03", src: "../assets/images/gallery/gallery_04.JPG"},
      {id: "image04", src: "../assets/images/gallery/gallery_05.JPG"}
    ];

  function setCurrentSlideIndex(index) {
    $scope.currentIndex = index;
  }

  function isCurrentSlideIndex(index) {
    return $scope.currentIndex === index;
  }

  function nextSlide() {
    $scope.currentIndex = ($scope.currentIndex < $scope.slides.length - 1) ? ++$scope.currentIndex : 0;
    $timeout(nextSlide, INTERVAL);
  }

  function loadSlides() {
    QueueService.loadManifest(slides);
  }

  $scope.$on('queueProgress', function (event, queueProgress) {
    $scope.$apply(function () {
      $scope.progress = queueProgress.progress * 100;
    });
  });

  $scope.$on('queueComplete', function (event, slides) {
    $scope.$apply(function () {
      $scope.slides = slides;
      $scope.loaded = true;
      $timeout(nextSlide, INTERVAL);
    });
  });

  /* animation */
  function setCurrentAnimation(animation) {
    $scope.currentAnimation = animation;
  }

  function isCurrentAnimation(animation) {
    return $scope.currentAnimation === animation;
  }

  $scope.slides = slides;
  $scope.currentIndex = 0;
  $scope.progress = 0;
  $scope.loaded = false;
  $scope.currentAnimation = 'slide-left-animation';
  $scope.setCurrentAnimation = setCurrentAnimation;
  $scope.isCurrentAnimation = isCurrentAnimation;
  $scope.setCurrentSlideIndex = setCurrentSlideIndex;
  $scope.isCurrentSlideIndex = isCurrentSlideIndex;

  loadSlides();
});

app.animation('.slide-left-animation', function ($window) {
  return {
    enter: function (element, done) {
      TweenMax.fromTo(
        element,
        1,
        {left: $window.innerWidth},
        {left: 0, onComplete: done}
      );
    },
    leave: function (element, done) {
      TweenMax.to(
        element,
        1,
        {left: -$window.innerWidth, onComplete: done}
      );
    }
  }
});

app.directive('bgImage', function ($window, $timeout) {
  return function (scope, element, attrs) {
    var resizeBG = function () {
      var bgWidth = element.width();
      var bgHeight = element.height();
      var winWidth = $window.innerWidth;
      var winHeight = $window.innerHeight;
      var widthRatio = winWidth / bgWidth;
      var heightRatio = winHeight / bgHeight;
      var widthDiff = heightRatio * bgWidth;
      var heightDiff = widthRatio * bgHeight;

      if (heightDiff > winHeight) {
        element.css({
          width: winWidth + 'px',
          height: heightDiff + 'px'
        });
      } else {
        element.css({
          width: widthDiff + 'px',
          height: winHeight + 'px'
        });
      }
    };

    var windowElement = angular.element($window);
    windowElement.resize(resizeBG);

    element.bind('load', function () {
      resizeBG();
    });
  };
});

app.factory('QueueService', function ($rootScope) {
  var queue = new createjs.LoadQueue(true);

  function loadManifest(manifest) {
    queue.loadManifest(manifest);

    queue.on('progress', function (event) {
      $rootScope.$broadcast('queueProgress', event);
    });

    queue.on('complete', function () {
      $rootScope.$broadcast('queueComplete', manifest);
    });
  }

  return {
    loadManifest: loadManifest
  }
});
