angular.module('starter.controllers')
	.controller('MainController', function($scope, cityFactory) {
		$scope.cities = cityFactory.getAll();
	});