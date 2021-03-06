'use strict';

/**
 * @ngdoc filter
 * @name JFS_Admin.filter:cmdate
 * @function
 * @description
 * # cmdate
 * Filter in the JFS_Admin.
 */
angular.module('Filters',[])
.filter('Calendar', [
    '$filter',
    function($filter) {
        return function(input) {
          input;
          //moment().calendar(input);
    }
  }
])
.filter('cmdate', [
  '$filter',
  function($filter) {
      return function(input, format) {
          if(input === null){return '';}
          else {return $filter('date')(new Date(input), format, 'UTC');}
      };
  }
])
.filter('pace', [
  '$filter',
  function($filter) {
      return function(input) {
        var min = Math.round((input-Math.floor(input))*60)
        return Math.floor(input) +"' " + min + '"';
      };
  }
])
.filter('blankFilter', [
  '$filter',
  function($filter) {
      return function(input) {
        return "";
      };
  }
]);
