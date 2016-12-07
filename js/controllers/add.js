angular.module('starter.controllers')
	.controller('AddController', function($scope, cityFactory) {
		$scope.agregar = function(){
			var newCity = {
				name : $scope.newCity,
				country : $scope.newCountry
			}
			cityFactory.add(newCity);
		};
	});