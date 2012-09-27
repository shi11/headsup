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
    $(".clientsExp .button").click(
        function () {
            var $clientsContainer = $(".clientsExp .container");
            if ($clientsContainer.is(":hidden")) {
                $clientsContainer.slideDown("slow");
                this.innerText = 'See Less Clients';
            } else {
                $clientsContainer.slideUp("slow");
                this.innerText = 'See More Clients';
            }
        });

});