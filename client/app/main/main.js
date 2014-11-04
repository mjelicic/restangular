'use strict';

angular.module('restangularTestApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('main', {
        url: '/',
        templateUrl: 'app/main/main.html',
        controller: 'MainCtrl'
      });
  })

  .config(function (RestangularProvider) {
    RestangularProvider.setBaseUrl('/api');

    RestangularProvider.setResponseExtractor(function(response) {
      return response.data;
    });

    RestangularProvider.setRestangularFields({
      id: '_id'
    });

  })
;