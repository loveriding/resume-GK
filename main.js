
	$(document).ready(function() {
		$.get("http://demo6370041.mockable.io/getcourses").then(function(data) {
			console.log(data.data[0].id
			 + $.get("http://demo6370041.mockable.io/course/2").then(function(data) {
				return (data);
		}));

	})
});

	function getCource(i) {
		return $.get("http://demo6370041.mockable.io/getcourses").then(function(data) {
			console.log(data.data[i].id);
		});
	};

	function getSourse(i) {
		return $.get("http://demo6370041.mockable.io/course/" + (i + 1)).then(function(data) {
			console.log(data);
		})
	}
	function print(i) {
		var urlCourse = "http://demo6370041.mockable.io/getcourses";

		var a = $.get(urlCourse);
		// b = a.then(function(data){
		// 	return $.get("http://demo6370041.mockable.io/course/2",function(res) {
		// 		console.log(res);
		// 	})
		// })
		var b = $.get("http://demo6370041.mockable.io/course/" + i);

			$.when(a.done(function(data) {
			data = data.data;
			var id = data[i].id;
			var name = data[i].name;
			console.log(id,name);
		})).done(b.done(function(data) {
				console.log(data);
			}));
	}
	// 	var a =  $.get(urlCourse, function(res) {
	// 		data = res.data;
	// 		//console.log(data);
	// 		return data;
	// 	});
	
	// 	b = $.get("http://demo6370041.mockable.io/course/2", function(res) {
	// 		console.log(res);
	// 	});

	
	// 	$.when(a,b).done(function(r1,r2) {
	// 		console.log(r1);
	// 	});
	// });
	
	















