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
				easing: 'easeOutBounce',
				easingcss3: 'ease',

				lazyLoading: true,
			});
		});

/*=================================== menu head ===========================*/
$(window).scroll(function() {
    if ($(this).scrollTop() > 1){  
        $('#header').addClass("sticky");
    }
    else{
        $('#header').removeClass("sticky");
    }
});

/*========================== image for section ==============================


var morphTimeline = new TimelineMax({
  repeat:-1,
  repeatDelay:2
});

morphTimeline
  .timeScale(1.5)
  .to($('#megaphone'),2,{morphSVG:{shape:"#links"}, fill:"none",opacity:1})
  .to($('#megaphone'),2,{morphSVG:{shape:"#computer"}, fill:"none"},"+=2")
  .to($('#megaphone'),2,{morphSVG:{shape:"#light"}, fill:"none"},"+=2")
  .to($('#megaphone'),2,{morphSVG:{shape:"#megaphone"}, fill:"none"},"+=2")
;
*/
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


