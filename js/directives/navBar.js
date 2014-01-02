angular.module('navBar', [])
  .directive('navbar', function() {
    return {
      template: '<div class="navBar" ng-transclude></div>',
      // templateUrl: 'directive.html',
      replace: true,
      transclude: true,
      restrict: 'E'
      // scope: {},
      // controller: function($scope, $element, $attrs, $transclude, otherInjectables) {
  
      // },
      // link: function postLink(scope, iElement, iAttrs) {
  
      // }
    };
  })
  .directive('navGroup', function() {
    return {
      template: '<div></div>',
      // templateUrl: 'directive.html',
      replace: true,
      transclude: true,
      restrict: 'E',
      scope: {},
      controller: function($scope, $element, $attrs, $transclude, otherInjectables) {
  
      },
      link: function postLink(scope, iElement, iAttrs) {
  
      }
    };
  })
  .directive('navBrand', function() {
    return {
      template: '<div></div>',
      // templateUrl: 'directive.html',
      replace: true,
      transclude: true,
      restrict: 'E',
      scope: {},
      controller: function($scope, $element, $attrs, $transclude, otherInjectables) {
  
      },
      link: function postLink(scope, iElement, iAttrs) {
  
      }
    };
  })
  .directive('collapsedButton', function() {
    return {
      template: '<div class="navButton"><div></div><div></div><div></div></div>',
      // templateUrl: 'directive.html',
      replace: true,
      transclude: true,
      restrict: 'E'
      // scope: {},
      // controller: function($scope, $element, $attrs, $transclude, otherInjectables) {
  
      // },
      // link: function postLink(scope, iElement, iAttrs) {
  
      // }
    };
  })
  