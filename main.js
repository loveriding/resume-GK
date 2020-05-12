
var course = [];
var visible = 0;
$(document).ready(function() {
	var count = 2;
	//show course
	printTable(0);
	printTable(1);
	showing(visible);
	//show des and textbook.
		$(document).on("click",'.slidedown_head',function(e) {
			e.preventDefault();
			$(this).next(".slidedown_none").toggleClass("slidedown_body");
		});


	//UITABS selcct
	$('ul.tabs li').click(showDiv);

	//pre-next
	var tab = document.getElementsByClassName('tab-link');

	$("button.pre").click(previous);
	$("button.next").click(function() {
		if(visible < count - 1) {
			$('ul.tabs li:eq('+ visible +')').removeClass('current');
			$('.tab-content').removeClass('current');
			$(".tab-link:eq(" + (visible + 1) + ")").addClass("current");
			$("#tab-" + (visible + 2)).addClass("current");
			visible ++;
			console.log(visible);
			showing(visible);
		}
	})

		


});

	function previous() {
		if(visible !== 0) {
			$('ul.tabs li:eq('+ visible +')').removeClass('current');
			$('.tab-content').removeClass('current');
			$(".tab-link:eq(" + (visible -1) + ")").addClass("current");
			$("#tab-" + (visible)).addClass("current");
			visible --;
			showing(visible);
		}
	}

	function showDiv(e) {
		var tab_id = $(this).attr('data-tab');
		visible = parseInt(tab_id.substr(4)) - 1;
		showing(visible);
		$('ul.tabs li').removeClass('current');
		$('.tab-content').removeClass('current');
		$(this).addClass('current');
		$("#"+tab_id).addClass('current');
	}


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

	function showing(i) {
		$(".show-of").html(`Showing ${(i * 4) + 1} to ${(i + 1) * 4} of 8 entries`)
	}




	
	















