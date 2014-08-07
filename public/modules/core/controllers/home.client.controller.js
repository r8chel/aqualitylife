'use strict';


angular.module('core').controller('HomeController', ['$scope', 'Authentication',
	function($scope, Authentication) {
		// This provides Authentication context.
		$scope.authentication = Authentication;
	}
]);

function CarouselDemoCtrl($scope) {
    $scope.myInterval = 5000;
    var slides = $scope.slides = [];
    $scope.addSlide = function() {
        var newWidth = 600 + slides.length;
        slides.push({
            image: ['/modules/core/img/photos/rooftop-yoga.jpg','/modules/core/img/photos/rooftop-yoga.jpg','/modules/core/img/photos/rooftop-yoga.jpg','/modules/core/img/photos/rooftop-yoga.jpg'],
            text: [' ',' ',' ',' '][slides.length % 4] + ' ' +
                [' ', ' ', ' ', ' '][slides.length % 4]
        });
    };
    for (var i=0; i<4; i++) {
        $scope.addSlide();
    }
}