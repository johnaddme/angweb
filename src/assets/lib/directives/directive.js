app = angular.module('app', []);

app.controller('AppCtrl', function($scope) {
	$scope.foo = 0;
	$scope.bar = 0;
	$scope.title_1 = 'i am code bunny !';
	$scope.title_2 = 'i am white bunny !';
	$scope.hello = "Hello";

	$scope.setHello = function() {
		$scope.hello = "World";
	};
});

app.directive('clickable', function() {

	return {
		restrict: "E",
		scope: {
			foo: '=',
			bar: '='
		},
		template: '<ul style="background-color: lightblue"><li>{{foo}}</li><li>{{bar}}</li></ul>',
		link: function(scope, element, attrs) {
			element.bind('click', function() {
				scope.$apply(function(){
					scope.foo++;
					scope.bar++;
					var a = {name:"gg"}

				});

			});
		}
	}



});