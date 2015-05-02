app.controller("MapController", [ '$scope', function($scope) {
    angular.extend($scope, {
        center: {
            lat: 39.0978,
            lng: -94.5822,
            zoom: 13
        },
        markers: {
            testMarker1: {
                lat: 39.0978,
                lng: -94.5822,
                message: "OMG PIZZA!",
                focus: true,
                draggable: false
            },
            testMarker2: {
                lat: 39.0980,
                lng: -94.5820,
                message: "Fresh jazz!",
                focus: true,
                draggable: false
            }
        },
        defaults: {
            scrollWheelZoom: false
        }
    });
}]);