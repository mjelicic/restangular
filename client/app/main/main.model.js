'use strict';

angular.module('restangularTestApp')
  .factory('Thing', function (Restangular) {
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
        return Restangular.allUrl('things', thingMetaData.next.href).getList();
      },
      extendWithModel: function (thing) {
        return Restangular.restangularizeElement(null, thing, 'things');
      }
    };
  });
