'use strict';

angular.module('restangularTestApp')
  .controller('MainCtrl', function ($scope, $http, socket, Restangular) {
    $scope.awesomeThings = [];

    var things = Restangular.all('things');

    things.getList().then(function (things) {
      $scope.awesomeThings = things;

      socket.syncUpdates('thing', $scope.awesomeThings);
    });


    $scope.addThing = function(newThing) {
      if(newThing === '') {
        return;
      }

      things.post({ name: $scope.newThing }).then(function() {
        $scope.newThing = '';
      });
    };

    $scope.deleteThing = function(thing) {
      thing.remove();
    };

    $scope.$on('$destroy', function () {
      socket.unsyncUpdates('thing');
    });
  });
