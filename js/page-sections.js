//set up global namespace to hold sections and animations
var pollen = {};
//some defaults
pollen.scrollDuration = "100%";

//detect if element is visible or not
$.fn.isInViewport = function() {
  var elementTop = $(this).offset().top;
  var elementBottom = elementTop + $(this).outerHeight();

  var viewportTop = $(window).scrollTop();
  var viewportBottom = viewportTop + $(window).height();

  return elementBottom > viewportTop && elementTop < viewportBottom;
};

function buildAnimation( jqElement ) {

  var animationFile = jqElement.attr("data-animation-file");
  var animationAutoplay = false;
  var animationLoop = false;
  var animation = {};
  var dataAttr = "";
  var animationSegment = [];

  if ( jqElement.attr("data-animation-autoplay") === "true" ) {
    animationAutoplay = true;
  }

  if ( jqElement.attr("data-animation-loop") === "true" ) {
    animationLoop = true;
  }
  
  if ( jqElement.attr("data-animation-scroll") === "true") {
    animation.scroll = true;
  } else {
    animation.scroll = false;
  }

  if ( "bodymovin" in window ) {
    animation.animation = bodymovin.loadAnimation({
      container: jqElement[0],
      renderer: 'svg',
      loop: animationLoop,
      autoplay: animationAutoplay,
      path: animationFile
    });
  }

  //console.log( "set up: " + animationFile );

  if ( jqElement.attr("data-animation-hover") === "true" ) {
   
    jqElement.hover(
      function() {
        
        var animationSegment = [0, animation.animation.totalFrames];
        var dataAttr = "";

        if ( $(this).attr("data-animation-hover-frames") ) {
          dataAttr = jqElement.attr("data-animation-hover-frames");
          animationSegment[0] = parseInt(dataAttr.split(",")[0]);
          animationSegment[1] = parseInt(dataAttr.split(",")[1]);
        }
        
        animation.animation.loop = true;

        animation.animation.playSegments( animationSegment, true );
        
      }, 
     function() {

      var animationSegment = [0, animation.animation.totalFrames];
      var dataAttr = "";
     
      animation.animation.loop = false;

      if ( $(this).attr("data-animation-hover-frames") ) {
          dataAttr = jqElement.attr("data-animation-hover-frames");
          animationSegment[0] = parseInt(dataAttr.split(",")[0]);
          animationSegment[1] = parseInt(dataAttr.split(",")[1]);
        }

      animation.animation.goToAndStop( animationSegment[0] );

     });
  }

  if ( jqElement.attr("data-animation-click") === "true" ) {
    
    jqElement.click(function() {

      var animationSegment = [0, animation.animation.totalFrames];
      var dataAttr = "";

      if ( $(this).attr("data-animation-click-frames") ) {
        dataAttr = jqElement.attr("data-animation-click-frames");
        animationSegment[0] = parseInt(dataAttr.split(",")[0]);
        animationSegment[1] = parseInt(dataAttr.split(",")[1]);
      }

      //console.log( "click", animationSegment );
      animation.animation.loop = false;

      /*
      animation.animation.addEventListener('complete', function(){
        console.log(" animation finished ");
        $.featherlight.close();
      });
      */
      
      animation.animation.playSegments( animationSegment, true );

      
    });

  }

  return animation;

}

$(document).ready(function(){

  //loop through all the sections on the page 
  
  var sectionNav = {};
  
  //set up scroll magic controller
  pollen.scroller = new ScrollMagic.Controller();
  pollen.sections = {};

  $(".js-anim-single").each(function(){
    buildAnimation($(this));
  });
  
  
  
  //each section to be scroll locked is defined by the section navigation
  sectionNav = $(".section-nav");
  
  //each section nav href has the id of a section that is to be made scrollable
  sectionNav.find("li a").each( function(){
    
    var thisSection = $( $( this ).attr("href") );
    var thisSectionId = thisSection.attr("id");
    var thisLinkElement = $( this ).parent()[0];

    
    //set up this section
    pollen.sections[ thisSectionId ] = {};
    pollen.sections[ thisSectionId ].scrollboxes = [];
    pollen.sections[ thisSectionId ].animations = [];
    
    
    //set up any animations in this section
    
    thisSection.find(".js-anim").each(function(){

      //console.log($(this).attr("data-animation-file"));

      pollen.sections[ thisSectionId ].animations.push( buildAnimation($(this)) );

    });

    if ( thisSection.hasClass("section--no-scroll") ) {
      return;
    }

    pollen.sections[ thisSectionId ].scene = new ScrollMagic.Scene({
      triggerElement: "#" + thisSectionId,
      triggerHook: 0,
      duration: pollen.scrollDuration
    })
    .setClassToggle( thisLinkElement, "active");
    
    //console.log("Scroll magic scene added " + thisSectionId );
    
    thisSection.find(".scrollable").each( function () {
      
      var scrollbox = {};
      
      scrollbox.target = $(this).find(".scrollable-content");
      scrollbox.totalMovement = scrollbox.target.height() - $( this ).height();
      
      pollen.sections[ thisSectionId ].scrollboxes.push( scrollbox );
      
    });
  
    
    //progress event will move scrollables and any animations
    

  	//scrollableContent.css("margin-top", -totalMargin * event.progress + "px");
    
    pollen.sections[ thisSectionId ].scene.on("progress",function(event){
      
      var animationProgress = 0;
      var animation = {};
      var scrollbox = {};
      
      //console.log( thisSectionId + " - " + event.progress );
      
      
      //move animations
      for( var i = 0, il = pollen.sections[ thisSectionId ].animations.length; i < il; i++ ) {
        
        animation = pollen.sections[ thisSectionId ].animations[i];
        animationProgress = Math.ceil(animation.animation.totalFrames * event.progress);
 
        //only scroll if requested
        if ( animation.scroll ) {
          //console.log("Animate...");
          animation.animation.goToAndStop( animationProgress, true );
        }  
      }
      
      //move scroll boxes
      for( var j = 0, jl = pollen.sections[ thisSectionId ].scrollboxes.length; j < jl; j++ ) {  
      	scrollbox = pollen.sections[ thisSectionId ].scrollboxes[j];
        scrollbox.target.css("margin-top", - scrollbox.totalMovement * event.progress + "px"); 
      }
      
    });
    
  });

  
  
  $(".section-nav li a").on("click", function(event){
    
    var target = $(this.getAttribute('href'));
    var id = $(this).attr("href");
    if( target.length ) {
        event.preventDefault();
        $('html, body').stop().animate({
            scrollTop: target.offset().top
        }, 1500);
        
        // if supported by the browser we can even update the URL.
        if (window.history && window.history.pushState) {
          history.pushState("", document.title, id);
        }
        
    }
    
  });
  
  $(".section-nav__next").on("click", function(event){
    
    var id = $(".section-nav li.active").next().find("a").attr("href");
    var target = $( id );
    
    //console.log(id);
    
    if( target.length ) {
        event.preventDefault();
        $('html, body').stop().animate({
            scrollTop: target.offset().top
        }, 1500);
        
        // if supported by the browser we can even update the URL.
        if (window.history && window.history.pushState) {
          history.pushState("", document.title, id);
        }
        
    }
    
    
  });
  
  $(window).on('resize scroll', function() {
    // Number Count
    $('.counter').each(function() {
      var $this = $(this);
      var countTo = $this.attr('data-count');
      
      if ( $(this).isInViewport() ) {
        
        
        $({ countNum: $this.text()}).animate(
          {
            countNum: countTo
          },
          {
            duration: 1000,
            easing:'linear',
            step: function() {
              $this.text( Math.floor(this.countNum) );
            },
            complete: function() {
              $this.text(this.countNum);
              //alert('finished');
            }
          }); 
        
      }
       
    });
  });
  
  
  function setScrollNarrow() {
    
    //loop through the sections and remove and unpin
    for ( var section in pollen.sections ) {
      pollen.sections[section].scene.removePin();
    }
    
    //add the animation scenes to the controller so they animate when scrolling into view
    /*
    for ( var i = 0, il = pollen.animScenes.length; i < il; i++ ) {
      
      pollen.animScenes[i].addTo(pollen.scroller);
      
    }
    */

  }
  
  function setScrollWide() {
    
    //remove the animation scenes from the controller - they are animated via the section scenes at this screen size
    /*
    for ( var i = 0, il = pollen.animScenes.length; i < il; i++ ) {
      pollen.animScenes[i].remove();
    }
    */
    
    //loop through the sections and add to controller and pin the scene
    
    //loop through the sections and remove and unpin
    for ( var section in pollen.sections ) {
      
      //set the pin for this section to its own id and add to the scroller
      if ( pollen.sections[section].scene != undefined ) {
        pollen.sections[section].scene.setPin("#" + section);
      }   
      
    }
    
  }
  
  function setupScroll() {
    for ( var section in pollen.sections ) {
      //add to the scroller controller
      if ( pollen.sections[section].scene != undefined ) {
        pollen.sections[section].scene.addTo(pollen.scroller);
      }
      
    }
  }

  //switch on the different scroll behaviors using enquire.js

  enquire.register("screen and (min-width:860px)", {

    setup: function() {
      //console.log("screen setup");
      setupScroll();
    },

    match: function() {
      //console.log("screen match wide");
      setScrollWide();
    },

    unmatch: function() {
      //console.log("screen un-match wide");
      setScrollNarrow();
    },

  })
  
  
  
});