'use strict';

angular.module('restangularTestApp')
  .factory('Thing', function (Restangular) {
    var things = Restangular.all('things');

    return {
      all: function () {
        return things.getList();
      },
      add: function (name) {
        return things.post({name: name});
      },
      remove: function (thing) {
        return thing.remove();
      },
      nextPage: function (collection) {
        return Restangular.allUrl('things', collection.meta.next.href).getList();
      },
      extendWithModel: function (thing) {
        return Restangular.restangularizeElement(null, thing, 'things');
      }
    };
  });
