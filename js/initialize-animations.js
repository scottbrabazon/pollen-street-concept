// var animations = {};

// $(document).ready(function(){
// //initialise animations

// $(".js-anim").each(function(){

// 	var animationName = $(this).attr("data-animation-name");
// 	var animationFile = $(this).attr("data-animation-file");
// 	var animationAutoplay = false;

// 	if ($(this).attr("data-animation-autoplay") === "true") {
// 		animationAutoplay = true;
// 	}

// 	if ( "bodymovin" in window ) {
// 			animations[ animationName ] = bodymovin.loadAnimation({
// 				container: this,
// 				renderer: 'svg',
// 				loop: false,
// 				autoplay: animationAutoplay,
// 				path: animationFile
// 			});
// 		}

// });

// var controller = new ScrollMagic.Controller();

// // 01 The Difference 
// var homePanel1 = new ScrollMagic.Scene({
// 	triggerElement: "#homepage-the-difference",
// 	triggerHook: 0,
// 	duration: "100%"
// })
// .setPin("#homepage-the-difference")
// .addTo(controller);

// homePanel1.on("progress",function(event){

// 	var scrollable = $("#scrollable-the-difference");
// 	var scrollableContent = $("#scrollable-the-difference .scrollable-content");
// 	var totalMargin = scrollableContent.height() - scrollable.height();

// 	scrollableContent.css("margin-top", -totalMargin * event.progress + "px");

// });

// // 02 Investment Strategy
// var homePanel2 = new ScrollMagic.Scene({
// 	triggerElement: "#homepage-investment-strategy",
// 	triggerHook: 0,
// 	duration: "200%"
// })
// .setPin("#homepage-investment-strategy")
// .addTo(controller);

// homePanel2.on("progress",function(event){

// 	var animationProgress = Math.ceil(animations.partnerships.totalFrames * event.progress);
// 	animations.partnerships.goToAndStop( animationProgress, true);

// 	var scrollable = $("#scrollable-partnership");
// 	var scrollableContent = $("#scrollable-partnership .scrollable-content");
// 	var totalMargin = scrollableContent.height() - scrollable.height();

// 	scrollableContent.css("margin-top", -totalMargin * event.progress + "px");

// });

// // 03 People
// var homePanel3 = new ScrollMagic.Scene({
// 	triggerElement: "#homepage-people",
// 	triggerHook: 0,
// 	duration: "100%"
// })
// .setPin("#homepage-people")
// .addTo(controller);

// homePanel3.on("progress",function(event){

// 	var scrollable = $("#scrollable-people");
// 	var scrollableContent = $("#scrollable-people .scrollable-content");
// 	var totalMargin = scrollableContent.height() - scrollable.height();

// 	scrollableContent.css("margin-top", -totalMargin * event.progress + "px");

// });

// // 04 From the Portfolio
// var homePanel4 = new ScrollMagic.Scene({
// 	triggerElement: "#homepage-portfolio",
// 	triggerHook: 0,
// 	duration: "50%"
// })
// .setPin("#homepage-portfolio")
// .addTo(controller);


// // 05 News
// var homePanel5 = new ScrollMagic.Scene({
// 	triggerElement: "#homepage-news",
// 	triggerHook: 0,
// 	duration: "50%"
// })
// .setPin("#homepage-news")
// .addTo(controller);


// // 06 Sustainable Investing
// var homePanel6 = new ScrollMagic.Scene({
// 	triggerElement: "#homepage-sustainable-investing",
// 	triggerHook: 0,
// 	duration: "300%"
// })
// .setPin("#homepage-sustainable-investing")
// .addTo(controller);

// homePanel6.on("progress",function(event){

// 	var scrollable = $("#scrollable-sustainable-investing");
// 	var scrollableContent = $("#scrollable-sustainable-investing .scrollable-content");
// 	var totalMargin = scrollableContent.height() - scrollable.height();

// 	scrollableContent.css("margin-top", -totalMargin * event.progress + "px");

// });

// // 07 Next
// var homePanel7 = new ScrollMagic.Scene({
// 	triggerElement: "#next",
// 	triggerHook: 0,
// 	duration: "50%"
// })
// .setPin("#next")
// .addTo(controller);

















// 		// Homepage header background
// 		if ( "bodymovin" in window ) {
// 			var logoAnim = bodymovin.loadAnimation({
// 				container: document.getElementById("headerbackground"),
// 				renderer: 'svg',
// 				loop: false,
// 				autoplay: true,
// 				path: "/assets/img/animations/00_start.json"
// 			});
// 		}

// 		// Homepage header scroll button
// 		if ( "bodymovin" in window ) {
// 			var logoAnim = bodymovin.loadAnimation({
// 				container: document.getElementById("scroll-down-white"),
// 				renderer: 'svg',
// 				loop: false,
// 				autoplay: true,
// 				path: "/assets/img/animations/scrollDownHex_animations.json"
// 			});
// 		}

// 		// Close burger menu button
// 		$(".burger-menu-close-button").each(function(){

// 			var scrollAnim;

// 			if ( "bodymovin" in window ) {
// 				scrollAnim = bodymovin.loadAnimation({
// 					container: this,
// 					renderer: 'svg',
// 					loop: false,
// 					autoplay: false,
// 					path: "/assets/img/animations/btn_close_white.json"
// 				});
// 			}

// 			$(this).on("mouseenter",function(){
// 				//scrollAnim.stop();
// 				scrollAnim.playSegments([0,62], true);
// 			});

// 			$(this).on("mouseleave",function(){
// 				scrollAnim.goToAndStop(0)
// 			});

// 		});

// 		// Orange section scroll button
// 		$(".scroll-down-button-orange").each(function(){

// 			var scrollAnim;

// 			if ( "bodymovin" in window ) {
// 				scrollAnim = bodymovin.loadAnimation({
// 					container: this,
// 					renderer: 'svg',
// 					loop: false,
// 					autoplay: false,
// 					path: "/assets/img/animations/btn_closeArticle.json"
// 				});
// 			}

// 			$(this).on("hover",function(){
// 				scrollAnim.stop();
// 				scrollAnim.playSegments([0,62], true);

// 			});

// 		});

// 		// Scroll down indicator
// 		$(".scroll-down").each(function(){

// 			var scrollAnim;

// 			if ( "bodymovin" in window ) {
// 				scrollAnim = bodymovin.loadAnimation({
// 					container: this,
// 					renderer: 'svg',
// 					loop: true,
// 					autoplay: true,
// 					path: "/assets/img/animations/scrollDownTxt_animations.json"
// 				});
// 			}

// 		});

// 		// Diagram strategy
// 		/*
// 		if ( "bodymovin" in window ) {
// 			var logoAnim = bodymovin.loadAnimation({
// 				container: document.getElementById("partnerships-alignment-of-interests-and-control"),
// 				renderer: 'svg',
// 				loop: true,
// 				autoplay: true,
// 				path: "/assets/img/animations/diagram_strategy.json"
// 			});
// 		}
// 		*/

// 		// Diagram returns
// 		if ( "bodymovin" in window ) {
// 			var logoAnim = bodymovin.loadAnimation({
// 				container: document.getElementById("diagram_returns"),
// 				renderer: 'svg',
// 				loop: false,
// 				autoplay: true,
// 				path: "/assets/img/animations/diagram_returns.json"
// 			});
// 		}

// 		// Close profile
// 		/*
// 		if ( "bodymovin" in window ) {
// 			var logoAnim = bodymovin.loadAnimation({
// 				container: document.getElementById("close-profile"),
// 				renderer: 'svg',
// 				loop: false,
// 				autoplay: true,
// 				path: "/assets/img/animations/btn_close_grey.json"
// 			});
// 		}
// 		*/

// });