'use strict';


angular.module('Services',[])
  .factory('Running', function($http,$q,$uibModal,$rootScope) {
    var Running = {data:{}};
    Running.getRunDataMonth = function() {
        var deferred = $q.defer();
        $http({
            method: 'GET',
            url: 'https://jfsapp.com/Open/API/Dashboard/Run/Month/All',
        }).then(function(data) {
            deferred.resolve(data.data);
        }, function(error) {
            deferred.reject(error);
        })
        return deferred.promise;
    }
    Running.getSpecificRuns = function(RunIds) {
        var deferred = $q.defer();
        $http({
            method: 'POST',
            url: 'https://jfsapp.com/Open/API/Dashboard/Runs/Detail/Specific',
            data:{RunIDs:RunIds}
        }).then(function(data) {
            deferred.resolve(data.data);
        }, function(error) {
            deferred.reject(error);
        })
        return deferred.promise;
    }
    Running.getRunDataAll = function() {
        var deferred = $q.defer();
        $http({
            method: 'GET',
            url: 'https://jfsapp.com/Open/API/Dashboard/Runs',
        }).then(function(data) {
            deferred.resolve(data.data);
        }, function(error) {
            deferred.reject(error);
        })
        return deferred.promise;
    }
    Running.updateAllFromSource = function() {
        var deferred = $q.defer();
        $http({
            method: 'GET',
            url: 'https://jfsapp.com/Open/API/Dashboard/Run/Update/All',
        }).then(function(data) {
            deferred.resolve(data.data);
        }, function(error) {
            deferred.reject(error);
        })
        return deferred.promise;
    }
    Running.getSpecificRuns('toast');
    return Running;
  });
