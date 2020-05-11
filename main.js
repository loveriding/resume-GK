
var course = [];



	$(document).ready(function() {
for(let i = 0; i < 4; i++) {
			$.get("http://demo6370041.mockable.io/getcourses").done(function(data) {
			data = data.data;
	    	id = data[i].id;
	      	name = data[i].name;
	      	//console.log(data[i]);
	      	course.push("<tr class = 'slidedown_head'><td>" + (i + 1) + "</td><td>" + name + "</td></tr>");
			 + $.get("http://demo6370041.mockable.io/course/"+ (i + 1) ).done(function(data) {
			 	$("tbody").append(`${course[i]}<tr class = "slidedown_none"><td colspan="2"><div>${data.textbook}</div></td></tr>`);
		});

	});
		}
		$(document).on("click",'.slidedown_head',function(e) {
			e.preventDefault();
			$(this).next(".slidedown_none").toggleClass("slidedown_body");
		});
});




	
	















