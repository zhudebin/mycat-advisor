/**
 * Created by lgs on 15-7-14.
 */

var app = angular.module("user", []);

app.controller("userController", function ($scope, $http) {
    $scope.save = function () {
        $http.post('/user', JSON.stringify($scope.user)).
            success(function (data, status, headers, config) {
                // this callback will be called asynchronously
                // when the response is available
                $scope.user = data;
            }).
            error(function (data, status, headers, config) {
                // called asynchronously if an error occurs
                // or server returns response with an error status.
            });
    };
});
