$(document).ready(function(){


    // Burger Menu Activation

    $(".burger-menu-button").click(function(){
        $("#burger-menu").toggleClass("closed");
    });
    $(".burger-menu-close-button").click(function(){
        $("#burger-menu").toggleClass("closed");
    });


    // Homepage Portfolio Toggle

    $(".section-client").click(function(){
        $(".section-quote").removeClass("active");
        $(".section-client").removeClass("active");
        $(this).addClass("active");
        $("#" + $(this).attr("data-quote-id")).addClass("active");
    });

    $(".open-biog").click(function(){
        $("#portfolio-biog").toggleClass("closed");
    });


    // People Accordion

    $('.dropdown').click(function() {
    		//event.stopPropagation(); 
    		//event.preventDefault();
        //Hide all other drop downs that are visible, and remove the class 'selected'
      $(this).siblings('.selected').removeClass('selected').find('ul:visible').slideUp('fast', function() {
    			$(this).closest("div").find("i").toggleClass("fa-plus-circle fa-minus-circle");
    });

        //Show/Hide dropdowns
        $(this).toggleClass('selected').find("i").toggleClass("fa-plus-circle fa-minus-circle");
        $('ul:first', this).stop(true, true).slideToggle('fast');
    });

    $('ul.contents').click(function (e) {
        e.stopPropagation();
    });

    $('ul.contents li a').click(function() {
    	});


    // Open Person Preview

    $(".open-preview",).click(function(){
        $(".people-preview").toggleClass("closed");
    });

    $(".close-preview",).click(function(){
        $(".people-preview").toggleClass("closed");
    });

    // Open Person Profile

    $(".open-portfolio",).click(function(){
        $(".portfolio-window").toggleClass("closed");
    });

    $(".close-portfolio",).click(function(){
        $(".portfolio-window").toggleClass("closed");
    });


    // Open Portfolio Profile

    $(".open-portfolio",).click(function(){
        $(".pop-up-portfolio").toggleClass("open");
    });

    $(".close-portfolio",).click(function(){
        $(".pop-up-portfolio").toggleClass("open");
    });



    // Open Person Profile Homepage  

    $(".open-pop-up").click(function(){
        $(this).parents(".staff").find(".pop-up-staff").toggleClass("open");
    });
    
    
    // click event for closing popups
    
    $(".close-lightbox").on("click", function(){
        //console.log("boo!");
      $.featherlight.close();
    });
   



    // Open News Article

    $(".open-news",).click(function(){
        $(".pop-up-news").toggleClass("open");
    });

    $(".close-news",).click(function(){
        $(".pop-up-news").toggleClass("open");
    });


    // ESG Toggle

    $("#enviromental-button").click(function(){
        $(".esg-story").removeClass("active");
        $(".esg-button").removeClass("active");
        $("#enviromental-story").addClass("active");
        $("#enviromental-button").addClass("active");
    });

    $("#social-button").click(function(){
        $(".esg-story").removeClass("active");
        $(".esg-button").removeClass("active");
        $("#social-story").addClass("active");
        $("#social-button").addClass("active");
    });

    $("#governance-button").click(function(){
        $(".esg-story").removeClass("active");
        $(".esg-button").removeClass("active");
        $("#governance-story").addClass("active");
        $("#governance-button").addClass("active");
    });


    // News Hover

    $(".news-entry").hover(function(){
        $(".news-entry").addClass("hover");
    });

});