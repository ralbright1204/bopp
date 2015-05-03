app.controller('BoppController', ['$scope', '$mdSidenav', '$state', function($scope, $mdSidenav, $state) {
  
  $scope.selected = null;
  $scope.toggleSidenav = toggleSidenav;
  $scope.routeTo = routeTo;

  function routeTo(name){
    $state.go(name);
    $scope.toggleSidenav('left');
  }

  function toggleSidenav(name) {
    $mdSidenav(name).toggle();
  }

}]);