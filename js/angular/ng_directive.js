angular.module("EventPlanner")
	.directive("lowerThan", [
		function() {
			var link = function($scope, $element, $attrs, ctrl) {

				var validate = function(viewValue) {
					var comparisonModel = $attrs.lowerThan;
					var t, f;

					if(!viewValue || !comparisonModel){
					// It's valid because we have nothing to compare against

						console.log("true!!!!1");
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