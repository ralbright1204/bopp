var app = angular.module("boppApp", ["leaflet-directive", "ui.router", "ngMaterial", "ngRetina"])

.config(function($stateProvider, $urlRouterProvider) {
  //
  // For any unmatched url, redirect to /state1
  $urlRouterProvider.otherwise("/map");
  //
  // Now set up the states
  $stateProvider
    .state('landing', {
      url: "/",
      templateUrl: "app/pages/landing.html"
    })
    .state('map', {
      url: "/map",
      templateUrl: "app/pages/map.html",
      controller: "MapController"
    })
    .state('twitter', {
      url: "/twitter",
      templateUrl: "app/pages/timeline.html",
      controller: "twitterCtrl"
    });
});