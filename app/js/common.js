/*=================== one page scroll ====================================*/
$(document).ready(function() {
			$('#fullpage').fullpage({
				menu: '#menu',
				lockAnchors: false,
				anchors : [ ' main ' , ' about ' , ' why ' , ' price ' , ' contacts ' ],
				navigation: true,
				navigationPosition: 'right',
				showActiveTooltip: true,
				slidesNavigation: false,
				verticalCentered: true,
				controlArrows: true,

				loopBottom: true,
				loopTop: true,
				loopHorizontal: true,
				autoScrolling: true,

				lazyLoading: true,
			});
		});






/* =================== popup ======================= */
$(function() {

	$(".popup").magnificPopup();

	//E-mail Ajax Send
	$("#form").submit(function() { //Change
		var th = $(this);
		$.ajax({
			type: "POST",
			url: "mail.php", //Change
			data: th.serialize()
		}).done(function() {
			alert("Спасибо мы с вами свяжемся в течении 2 минут!");
			setTimeout(function() {
				$.magnificPopup.close();
				th.trigger("reset");
			}, 1000);
		});
		return false;
	});
		debugger;

		});

/*============================toggle mobile ==========================*/

$(document).ready(function(){
    $("#hide").click(function(){
        $("ul").toggle();
    });
});

