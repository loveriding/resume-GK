
var content = [];
var des = [];

	function emptyTable() {
		$("#course-list").empty();
		$("#course-list").append("<tr><th>ID</th><th>NAME</th></tr>");

	}

	function printTable(stt) {
		var count = 0;
		for(let i = 4 * stt; i < arr.length; i++) {
			getCourse(i).then(function() {
			$.get("http://demo6370041.mockable.io/course/" + (i + 1), function(res) {
			$("#course-list").append("<tr><td colspan =" + 2 +">" + res.textbook + "</td></tr>");
			})

		});
			if(count === 3) 
				break;
			count ++;
		}
	}

	$(document).ready(function() {
		
		
		
		
		var i = 2;
		
		// getDes("http://demo6370041.mockable.io/course/2").then(function(){
		// 	$.get("http://demo6370041.mockable.io/getcourses",function(res) {
	 //    	data = res.data;
	 //    	id = data[i].id;
	 //        name = data[i].name;
	 //        var string = "<tr><td>" + id + "</td><td>" + name + "</td></tr>";
	 //    	$("#course-list").append(string);
	 //    	}
		// );
		// });
		//getCourse(1);
		getCourse(0).then(function() {
			$.get("http://demo6370041.mockable.io/course/" + i, function(res) {
			$("#course-list").append("<tr><td colspan =" + 2 +">" + res.textbook + "</td></tr>");
			})

		});
	});



	function getCourse(i) {
			return pro = new Promise(function(resolve) {
				$.get("http://demo6370041.mockable.io/getcourses",function(res) {
					console.log(res);
		    	data = res.data;
		    	id = data[i].id;
		        name = data[i].name;
		        var string = "<tr><td>" + id + "</td><td>" + name + "</td></tr>";
		    	$("#course-list").append(string);
		    	resolve();
	    		}
				);
			})
	};

	function getDes(url) {
		return pro = new Promise(function(resolve) {
			$.get(url, function(res) {
			$("#course-list").append("<tr><td colspan =" + 2 +">" + res.textbook + "</td></tr>");
			resolve();
			}); 
		})
	}










