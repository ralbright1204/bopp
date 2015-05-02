app.controller("CenterController", [ '$scope', function($scope) {
    angular.extend($scope, {
        center: {
            lat: 39.0978,
            lng: -94.5822,
            zoom: 4
        },
        defaults: {
            scrollWheelZoom: false
        }
    });
}]);