'use strict';

angular.module('restangularTestApp')
  .controller('MainCtrl', function ($scope, $http, socket, Thing) {
    $scope.awesomeThings = [];

    Thing.all().then(function (things) {
      $scope.awesomeThings = things;

      socket.syncUpdates('thing', $scope.awesomeThings);
    });


    $scope.addThing = function(newThing) {
      if(newThing === '') {
        return;
      }

      Thing.add(newThing).then(function() {
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
