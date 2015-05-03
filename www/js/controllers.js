angular.module('starter.controllers', [])

.controller('mapCtrl', function($scope, $ionicModal, $ionicSlideBoxDelegate) {

  $scope.navSlide = function(index) {
    $ionicSlideBoxDelegate.slide(index, 500);
  };

  $ionicModal.fromTemplateUrl('templates/map.html', {
    scope: $scope,
    animation: 'fade-in'
  }).then(function(modal) {
      $scope.modal = modal;
  });

  $scope.openModal = function() {
    $scope.modal.show();
  };

  $scope.closeModal = function() {
    $scope.modal.hide();
  };

  //Cleanup the modal when we're done with it!
  $scope.$on('$destroy', function() {

  });
})

/**
.controller('AppCtrl', function($scope, $ionicModal, $timeout) {
  // Form data for the login modal
  $scope.loginData = {};

  // Create the login modal that we will use later
  $ionicModal.fromTemplateUrl('templates/login.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.modal = modal;
  });

  // Triggered in the login modal to close it
  $scope.closeLogin = function() {
    $scope.modal.hide();
  };

  // Open the login modal
  $scope.login = function() {
    $scope.modal.show();
  };

  // Perform the login action when the user submits the login form
  $scope.doLogin = function() {
    console.log('Doing login', $scope.loginData);

    // Simulate a login delay. Remove this and replace with your login
    // code if using a login system
    $timeout(function() {
      $scope.closeLogin();
    }, 1000);
  };
})
**/

.controller('PlaylistsCtrl', function($scope) {
  $scope.playlists = [
    { title: 'Reggae', id: 1 },
    { title: 'Chill', id: 2 },
    { title: 'Dubstep', id: 3 },
    { title: 'Indie', id: 4 },
    { title: 'Rap', id: 5 },
    { title: 'Cowbell', id: 6 }
  ];
})

.controller('detailsCtrl', function($scope) {
    angular.element(document).ready(function() {
        twttr.widgets.load();
    });
})


.controller('PlaylistCtrl', function($scope, $stateParams) {
})

.controller("MapController", [ '$scope', '$http', function($scope, $http) {

    var points = [];
    var heatmap = {
        name: 'Heat Map',
        type: 'heat',
        data: points,
        visible: true
    };

    $http.get("json/locations.json").success(function(data) {
        angular.forEach(data, function(locationData, i){
            $scope.markers[locationData.id] = {
                lat: locationData.location.lat,
                lng: locationData.location.lng,
                message: locationData.name,
                focus: false,
                draggable: false
            };
        });
    });

    $http.get("json/heat-points.json").success(function(data) {
        $scope.layers.overlays = {
            heat: {
                name: 'Heat Map',
                type: 'heat',
                data: data,
                layerOptions: {
                    radius: 20,
                    blur: 10
                },
                visible: true
            }
        };
    });

    angular.extend($scope, {
        center: {
            lat: 39.0978,
            lng: -94.5822,
            zoom: 13
        },
        markers: {},
        layers: {
            baselayers: {
                xyz: {
                    name: 'OpenStreetMap',
                    url: 'http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
                    type: 'xyz'
                }
            }
        },
        defaults: {
            scrollWheelZoom: false
        }
    });
}]);
