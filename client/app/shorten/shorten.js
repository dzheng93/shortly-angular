angular.module('shortly.shorten', [])

.controller('ShortenController', function ($scope, $location, Links) {
  $scope.title = 'Shorten';
  $scope.link = {};

  $scope.addLink = function () {
    Links.addOne($scope.link);
  };
});
