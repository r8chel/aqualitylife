'use strict';


angular.module('core').controller('HomeController', ['$scope', 'Authentication',
	function($scope, Authentication) {
		// This provides Authentication context.
		$scope.authentication = Authentication;

	}
]);

$('.carousel').carousel({
    interval: 2000,
    wrap: false
});