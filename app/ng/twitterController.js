app.controller("twitterCtrl", function($scope) {
  angular.element(document).ready(function() {
    twttr.widgets.load();
  });
});