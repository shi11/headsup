/* 
* Skeleton V1.0.2
* Copyright 2011, Dave Gamache
* www.getskeleton.com
* Free to use under the MIT license.
* http://www.opensource.org/licenses/mit-license.php
* 5/20/2011
*/	
	

$(document).ready(function() {

	/* Tabs Activiation
	================================================== */
	var tabs = $('ul.tabs'),
	    tabsContent = $('ul.tabs-content');
	
	tabs.each(function(i) {
		//Get all tabs
		var tab = $(this).find('> li > a');
		tab.click(function(e) {
			
			//Get Location of tab's content
			var contentLocation = $(this).attr('href') + "Tab";
			
			//Let go if not a hashed one
			if(contentLocation.charAt(0)=="#") {
			
				e.preventDefault();
			
				//Make Tab Active
				tab.removeClass('active');
				$(this).addClass('active');
				
				//Show Tab Content
				$(contentLocation).show().siblings().hide();
				
			} 
		});

	});

    /* slide clients expanded */
    $(".clientsExp .container").hide();
    $(".clientsExp .button").toggle(function(){openClientsExp(this)}, function(){closeClientsExp(this)});
    var $clientsContainer = $(".clientsExp .container");

    function openClientsExp(el){
        $clientsContainer.slideDown("slow");
        el.innerText = 'See Fewer Clients';
    }

    function closeClientsExp(el){
        $clientsContainer.slideUp("slow");
        el.innerText = 'See More Clients';
    }

    /*NAVIGATION*/
    var NAV_HEIGHT = 110;
    function filterPath(string) {
        return string
            .replace(/^\//,'')
            .replace(/(index|default).[a-zA-Z]{3,4}$/,'')
            .replace(/\/$/,'');
    }
    var locationPath = filterPath(location.pathname);
    var scrollElem = scrollableElement('html', 'body');

    /*animate to selected section*/
    $('a[href*=#]').each(function() {
        var thisPath = filterPath(this.pathname) || locationPath;
        if (  locationPath == thisPath
            && (location.hostname == this.hostname || !this.hostname)
            && this.hash.replace(/#/,'') ) {
            var $target = $(this.hash), target = this.hash;
            if (target) {
                var targetOffset = $target.offset().top - NAV_HEIGHT;
                var closedHeight = $(".clientsExp").height();

                $(this).click(function(event) {
                    event.preventDefault();

                    //check to see if subpages are expanded
                    //and if so, account for their height
                    var $clientsContainer = $(".clientsExp .container");
                    var expHeight = 0;
                    if(( $(this.parentElement).index() > $("#clientNavItem").index() ) && ( $clientsContainer.is(":hidden") == false )){
                        expHeight = $(".clientsExp").height() - closedHeight;
                    }
                    $(scrollElem).animate({scrollTop: targetOffset + expHeight}, 400, function() {
                        var scrollMem = $(scrollElem).scrollTop();
                        location.hash = target;
                        $(scrollElem).scrollTop( scrollMem );
                    });
                });
            }
        }
    });

    // use the first element that is "scrollable"
    function scrollableElement(els) {
        for (var i = 0, argLength = arguments.length; i <argLength; i++) {
            var el = arguments[i],
                $scrollElement = $(el);
            if ($scrollElement.scrollTop()> 0) {
                return el;
            } else {
                $scrollElement.scrollTop(1);
                var isScrollable = $scrollElement.scrollTop()> 0;
                $scrollElement.scrollTop(0);
                if (isScrollable) {
                    return el;
                }
            }
        }
        return [];
    }

    $(".row1").click( function(){
       scrollDown(500);
    });
    $(".row2").click( function(){
        scrollDown(800);
    });
    $(".row3").click( function(){
        scrollDown(1000);
    });
    $(".row4").click( function(){
        scrollDown(1200);
    });
    $(".row5").click( function(){
        scrollDown(1500);
    });
    function scrollDown(px){
        openClientsExp( $(".clientsExp .button") );
        console.log("scroll to row " + px);
        $(scrollElem).animate({scrollTop: $(scrollElem).scrollTop() + px}, 400, function() {
            var scrollMem = $(scrollElem).scrollTop();
            $(scrollElem).scrollTop( scrollMem );
        });
    }

});