'use strict';

angular.module('restangularTestApp')
  .controller('ThingCtrl', function ($scope, $http, socket, ThingModel) {
    $scope.awesomeThings = [];

    ThingModel.all().then(function (things) {

      $scope.awesomeThings = things;

      socket.syncUpdates('thing', $scope.awesomeThings);
    });


    $scope.addThing = function(newThing) {
      if(newThing === '') {
        return;
      }

      ThingModel.add(newThing).then(function() {
        $scope.newThing = '';
      });
    };

    $scope.deleteThing = function(thing) {
      thing.remove();
    };

    $scope.loadMore = function () {
      ThingModel.nextPage().then(function (moreThings) {
        $scope.awesomeThings.push.apply($scope.awesomeThings, moreThings);
      });
    };

    $scope.$on('$destroy', function () {
      socket.unsyncUpdates('thing');
    });
  });
