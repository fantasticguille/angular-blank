angular.module('starter.controllers', []);
angular.module('starter.factories', []);
var app = angular.module('starter',[
	'ngRoute',
	'starter.controllers',
	'starter.factories'
	]);
app.config(function($routeProvider) {
    $routeProvider
    .when('/', {
        templateUrl : 'templates/main.html',
        controller : 'MainController'
    })
    .when('/add', {
        templateUrl : 'templates/add.html',
        controller : 'AddController'
    });
});