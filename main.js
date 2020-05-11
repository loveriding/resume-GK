
var course = [];

	$(document).ready(function() {
		for(let i = 0; i < 4; i++) {
			$.get("http://demo6370041.mockable.io/getcourses").done(function(data) {
			data = data.data;
	    	id = data[i].id;
	      	name = data[i].name;
	      	console.log(data[i]);
	      	course.push("<tr><td>" + id + "</td><td>" + name + "</td></tr>");
			 + $.get("http://demo6370041.mockable.io/course/"+ (i + 1) ).done(function(data) {
			 	$("tbody").append(`${course[i]}<tr><td colspan="2"><div>${data.textbook}</div></td></tr>`)
		});

	});
		}
		
});


	
	















