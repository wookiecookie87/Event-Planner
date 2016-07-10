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
					guest_arr.forEach(function(guests){
						alert(guests);
						guest.push(guests.trim());
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
				console.log(date_arr);
				return date_arr[0].slice(0, -3);

			}
		}]);