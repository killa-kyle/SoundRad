'use strict';

var scat = angular.module('scat', ['scat.services', 'scat.controllers']).
  config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
    //$routeProvider.when('/', {templateUrl: 'partials/_tracklist.html', controller: 'NavCtrl'}); 
    $routeProvider.when('/stream', {templateUrl: 'partials/stream.html', controller: 'StreamCtrl'});
    $routeProvider.when('/:viewUser', {templateUrl: 'partials/user.html', controller: 'UserTracksCtrl'});
    
    //$routeProvider.when('/:viewUser/:getType', {templateUrl: 'partials/user.html', controller: 'UserCtrl'});
    
    $routeProvider.when('/:viewUser/sets', {templateUrl: 'partials/user.html', controller: 'SetsCtrl'});
    $routeProvider.when('/:viewUser/likes', {templateUrl: 'partials/user.html', controller: 'LikesCtrl'});
    $routeProvider.when('/:viewUser/:track', {templateUrl: 'partials/track.html', controller: 'TrackCtrl'});
    
    
    $routeProvider.otherwise({ redirectTo: '/jxnblk' });
    //$locationProvider.html5Mode(true);
        
        // need to figure out how to define this globally
        //var clientId = '66828e9e2042e682190d1fde4b02e265';
    
  }]);

  
  
  

   
  


