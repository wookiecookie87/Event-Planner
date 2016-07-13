(function () {
	var foo = 12;
	return foo;
});
angular.module("EventPlanner", ["ngRoute"])
	.config(["$routeProvider", function($routeProvider){
		$routeProvider.when("/", {
			templateUrl: "template/register.html"
		})
		.when("/make_plan", {
			templateUrl: "template/create_event.html"
		});
	}]);
angular.module("EventPlanner")
		.controller("registerControl", [function(){
			var self = this;
			self.submit = function(){
				location.href = "#/make_plan";
			};
		}])
		.controller("eventControl", [function(){
			var self = this;

			self.events = [
				{name : "Jon's Birthday",
				type : "Birthday Event",
				host : "Jon Park",
				start_date : "2016-03-13 18:00",
				end_date : "2016-03-14 06:00",
				guests : ["Jon", "Johnny", "Amber"],
				location : "Jon's Home",
				message : "Don't be late"
				},
				{name : "Ping Pong Tournament",
				type : "Sports Event",
				host : "Ping Pong association",
				start_date : "2029-02-12 19:00",
				end_date : "2029-03-14 06:00",
				guests : ["Xio", "Gim", "Yao"],
				location : "Jang Chung Gym",
				message : "Win Win in"
				},
				{name : "Graduation",
				type : "Academic Event",
				host : "Fordham Unviersity",
				start_date : "2013-05-10 18:00",
				end_date : "2013-05-11 18:00",
				guests : ["Luigi", "Johnny", "deven"],
				location : "Fordham Unviersity Rose Hill",
				message : "Congrats"
				}	
			];

			self.createEvent = function(){
				//alert("!23123123");
				var guests = self.event.guests;
				if(guests){
					var guest_arr = guests.split(",");
					var guest = [];
					//console.log(guest_arr);
					guest_arr.forEach(function(guestss){
						guest.push(guestss.trim());
					});
				}

				self.event.start_date = setDateFormat(self.event.start);
				self.event.end_date = setDateFormat(self.event.end);
				self.event.guests = guest;
				self.events.push(self.event);
				self.event = null;
			};



			function setDateFormat(date){
				var ISOdate = date.toISOString();
				var date_arr = ISOdate.replace("T", " ").split(".");
				return date_arr[0].slice(0, -3);
			}
		}]);
angular.module("EventPlanner")
	.directive("lowerThan", [
		function() {
			var link = function($scope, $element, $attrs, ctrl) {

				var validate = function(viewValue) {
					var comparisonModel = $attrs.lowerThan;
					var t, f;

					if(!viewValue || !comparisonModel){
					// It's valid because we have nothing to compare against
						ctrl.$setValidity("lowerThan", true);
					}else {
						if (comparisonModel) {
							var to = comparisonModel.split("T");
							t = new Date(to[0]+" "+to[1]); //new Date(to);
						}
						if (viewValue) {
							var from = viewValue.split("T");
							f = new Date(from[0]+" "+from[1]);//new Date(from);
						}

						ctrl.$setValidity("lowerThan", Date.parse(t) > Date.parse(f));
					}
			// It's valid if model is lower than the model we're comparing against
					return viewValue;
				};
				ctrl.$parsers.unshift(validate);
			//ctrl.$formatters.push(validate);
			};
			return {
				require: "ngModel",
				link: link
			};
		}
	]).directive("higherThan", [
		function() {
			var link = function($scope, $element, $attrs, ctrl) {
				var validate = function(viewValue) {
					var comparisonModel = $attrs.higherThan;
					var t, f;
					if(!viewValue || !comparisonModel){
					// It's valid because we have nothing to compare against
						ctrl.$setValidity("higherThan", true);
					}
					if (comparisonModel) {
						var to = comparisonModel.split("T");
						t = new Date(to[0]+" "+to[1]); //new Date(to);
					}
					if (viewValue) {
						var from = viewValue.split("T");
						f = new Date(from[0]+" "+from[1]);//new Date(from);
					}

					ctrl.$setValidity("higherThan", Date.parse(t) < Date.parse(f));
		// It's valid if model is higher than the model we're comparing against
					return viewValue;
				};
				ctrl.$parsers.unshift(validate);
		//ctrl.$formatters.push(validate);
			};
			return {
				require: "ngModel",
				link: link
			};
		}
	]);

