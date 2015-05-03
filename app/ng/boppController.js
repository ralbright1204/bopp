app.controller('BoppController', ['$scope', '$mdSidenav', function($scope, $mdSidenav) {
  
  $scope.selected = null;
  $scope.toggleSidenav = toggleSidenav;

  function toggleSidenav(name) {
    $mdSidenav(name).toggle();
  }

}]);