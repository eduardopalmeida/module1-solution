(function () {
'use strict';

angular.module('LunchCheck', [])
	.controller('LunchCheckController', ['$scope', calcFood]);

	function calcFood($scope) {
		$scope.list;
		$scope.elems = 0;
		$scope.resultado = "";

		$scope.calcFood = function() {

			if (($scope.list.split(',')).length <= 3 ) {
				$scope.resultado = "Enjoy!"
			};

			if (($scope.list.split(',')).length > 3 ) {
				$scope.resultado = "Too much!"
			};
		};
	}
})();
