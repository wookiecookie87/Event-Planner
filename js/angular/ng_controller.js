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
				start : "2016-03-13 18:00",
				end : "2016-03-14 06:00",
				guests : ["Jon", "Johnny", "Amber"],
				location : "Jon's Home",
				message : "Don't be late"
				},
				{name : "Ping Pong Tournament",
				type : "Sports Event",
				host : "Ping Pong association",
				start : "2029-02-12 19:00",
				end : "2029-03-14 06:00",
				guests : ["Xio", "Gim", "Yao"],
				location : "Jang Chung Gym",
				message : "Win Win in"
				},
				{name : "Graduation",
				type : "Academic Event",
				host : "Fordham Unviersity",
				start : "2013-05-10 18:00",
				end : "2013-05-11 18:00",
				guests : ["Luigi", "Johnny", "deven"],
				location : "Fordham Unviersity Rose Hill",
				message : "Congrats"
				}	
			];

			self.createEvent = function(){
				//alert("!23123123");
				var guests = self.event.guests;
				var guest_arr = guests.split(",");
				var guest = [];
				guest_arr.forEach(function(guests){
					alert(guests);
					guest.push(guests.trim());
				});


				self.event.guests = guest;

				self.events.push(self.event);
			};
		}]);