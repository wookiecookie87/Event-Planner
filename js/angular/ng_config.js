angular.module("EventPlanner", ["ngRoute", "ui.bootstrap"])
	.config(["$routeProvider", function($routeProvider){
		$routeProvider.when("/", {
			templateUrl: "template/register.html"
		})
		.when("/make_plan", {
			templateUrl: "template/create_event.html"
		});
	}]);