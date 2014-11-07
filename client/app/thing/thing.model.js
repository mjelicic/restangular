'use strict';

angular.module('restangularTestApp')
  .factory('ThingModel', function (Restangular) {
    var things = Restangular.all('things');
    var thingMetaData;


    function updateMetaData (things) {
      thingMetaData = things.meta;
      return things;
    }

    return {
      all: function () {
        return things.getList().then(updateMetaData);
      },
      add: function (name) {
        return things.post({name: name});
      },
      remove: function (thing) {
        return thing.remove();
      },
      nextPage: function () {
        return Restangular.allUrl('things', thingMetaData.next.href).getList().then(updateMetaData);
      },
      extendWithModel: function (thing) {
        return Restangular.restangularizeElement(null, thing, 'things');
      }
    };
  });
