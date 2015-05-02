app.controller("MapController", [ '$scope', '$http', function($scope, $http) {

    var points = [];
    var heatmap = {
        name: 'Heat Map',
        type: 'heat',
        data: points,
        visible: true
    };

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