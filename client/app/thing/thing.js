'use strict';

angular.module('restangularTestApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('thing', {
        url: '/things',
        templateUrl: 'app/thing/thing.html',
        controller: 'ThingCtrl'
      });
  })

  .config(function (RestangularProvider) {
    RestangularProvider.setBaseUrl('/api');

    RestangularProvider.setRestangularFields({
      id: '_id'
    });

    // add a response intereceptor
    RestangularProvider.addResponseInterceptor(function(data, operation) {
      var extractedData;
      // .. to look for getList operations
      if (operation === 'getList') {
        // .. and handle the data and meta data
        extractedData = data.items;
        extractedData.meta = data.meta;
      } else {
        extractedData = data;
      }
      return extractedData;
    });

  });