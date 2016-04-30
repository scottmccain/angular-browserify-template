'use strict';
var app = require('angular').module('angular-application');

function routes($stateProvider, $urlRouterProvider, viewUrl) {
    
    // Make sure to end urls with a trailing '/'
    // See https://github.com/angular-ui/ui-router/issues/50
    $stateProvider.state('Home', {
        url: '/home',
        templateUrl: viewUrl('/home/index.html'),
        controller: 'HomeController',
        controllerAs: 'vm',
        data: {
            stateData: null
        }
    });


    // Catch-all state for invalid URLs
    // Note: This state must be defined last
    $stateProvider.state('otherwise', {
        url: '*path',
        controller: function ($state) {

            $state.go('Home');
        }
    });
}

routes.$inject = ['$stateProvider', '$urlRouterProvider', 'viewUrl'];

app.config(routes);
