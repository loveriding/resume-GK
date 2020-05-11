
var course = [];



$(document).ready(function() {

	//show course
	printTable(0);
	printTable(1);

	//show des and textbook.
		$(document).on("click",'.slidedown_head',function(e) {
			e.preventDefault();
			$(this).next(".slidedown_none").toggleClass("slidedown_body");
		});


	//UITABS selcct

	$('ul.tabs li').click(function(){
		var tab_id = $(this).attr('data-tab');
		$('ul.tabs li').removeClass('current');
		$('.tab-content').removeClass('current');
		$(this).addClass('current');
		$("#"+tab_id).addClass('current');
	})

	//pre-next

		


});




	function printTable(stt) {
			for(let i = 4 * stt; i < 4 * (stt + 1); i++) {
			$.get("http://demo6370041.mockable.io/getcourses").done(function(data) {
			data = data.data;
	    	id = data[i].id;
	      	name = data[i].name;
	      	course.push("<tr class = 'slidedown_head'><td>" + id + "</td><td>" + name + "</td></tr>");
			 + $.get("http://demo6370041.mockable.io/course/"+ (i + 1) ).done(function(data) {
			 	$("#table-" + (stt + 1)).append(`${course[i]}<tr class = "slidedown_none"><td colspan="2"><div>Description:${data.description}<br><br>Textbook:${data.textbook}</div></td></tr>`);
		});

	});
		}
	}




	
	















