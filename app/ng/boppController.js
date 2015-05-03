app.controller('BoppController', ['$scope', '$mdSidenav', function($scope, $mdSidenav) {
  
  $scope.selected = null;
  $scope.toggleSidenav = toggleSidenav;

  function routeTo(name){
    $state.go(name);
    $scope.toggleSidenav('left');
  }

  function toggleSidenav(name) {
    $mdSidenav(name).toggle();
  }

}]);