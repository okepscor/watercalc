	/********************************************************************************************************************
	* Skeleton V1.0.2
	* Copyright 2011, Dave Gamache
	* www.getskeleton.com
	* Free to use under the MIT license.
	* http://www.opensource.org/licenses/mit-license.php
	* 5/20/2011
	********************************************************************************************************************/	

$(document).ready(function() {


	/********************************************************************************************************************
	Tabs Activiation
	********************************************************************************************************************/	
	var tabs = $('ul.tabs');
	
	tabs.each(function(i) {
		
	/********************************************************************************************************************
	Get all tabs
	********************************************************************************************************************/	
		var tab = $(this).find('> li > a');
		tab.click(function(e) {
			
			
	/********************************************************************************************************************
	Get Location of tab's content
	********************************************************************************************************************/	
			var contentLocation = $(this).attr('href') + "Tab";
			
			
	/********************************************************************************************************************
	Let go if not a hashed one
	********************************************************************************************************************/	
			if(contentLocation.charAt(0)=="#") {
			
				e.preventDefault();
			
		
	/********************************************************************************************************************
	Make Tab Active
	********************************************************************************************************************/				
				tab.removeClass('active');
				$(this).addClass('active');

	/********************************************************************************************************************
	Show Tab Content & add active class
	********************************************************************************************************************/				
				$(contentLocation).show().addClass('active').siblings().hide().removeClass('active');
				
			} 
		});
	}); 
	
	/********************************************************************************************************************
	READMORE TOGGLE
	********************************************************************************************************************/	
		$("button.readmore").click(function () {
		$("#toggle").toggle();
		$("p.ttext").toggle();
	});

	/**READMORE2 TOGGLE **/	
		$("button.readmore2").click(function () {
		$("#toggle2").toggle();
		$("p.ttext2").toggle();
	});

	/**READMORE3 TOGGLE **/	
		$("button.readmore3").click(function () {
		$("#toggle3").toggle();
		$("p.ttext3").toggle();
	});

	/**READMORE4 TOGGLE **/	
		$("button.readmore4").click(function () {
		$("#toggle4").toggle();
		$("p.ttext4").toggle();
	});

	/**READMORE5 TOGGLE **/	
		$("button.readmore5").click(function () {
		$("#toggle5").toggle();
		$("p.ttext5").toggle();
	});

	/********************************************************************************************************************
	READ TOGGLE  text based button
	********************************************************************************************************************/	
		$("div.read").click(function () {
		$("#toggletext").toggle();
		$("p.texttext").toggle();
		
	});	
	
	/** READ2 TOGGLE  text based button **/	
		$("div.read2").click(function () {
		$("#toggletext2").toggle();
		$("p.texttext2").toggle();
		
	});	
	
	/** READ3 TOGGLE  text based button **/	
		$("div.read3").click(function () {
		$("#toggletext3").toggle();
		$("p.texttext3").toggle();
		
	});	
	
	/** READ4 TOGGLE  text based button **/	
		$("div.read4").click(function () {
		$("#toggletext4").toggle();
		$("p.texttext4").toggle();
		
	});	
	
	/** READ5 TOGGLE  text based button **/	
		$("div.read5").click(function () {
		$("#toggletext5").toggle();
		$("p.texttext5").toggle();
		
	});	

		$("div.readspan1").click(function () {
		$("#toggletext").toggle();
		$("span.texttext").toggle();
		
	});	

		$("div.readspan2").click(function () {
		$("#toggletext2").toggle();
		$("span.texttext2").toggle();
		
	});	

		$("div.readspan3").click(function () {
		$("#toggletext2").toggle();
		$("span.texttext2").toggle();
		
	});	

		$("div.readspan3").click(function () {
		$("#toggletext2").toggle();
		$("span.texttext2").toggle();
		
	});	

	/********************************************************************************************************************
	SIMPLE ACCORDIAN STYLE MENU FUNCTION
	********************************************************************************************************************/	
	$('div.accordionButton').click(function() {
		$('div.accordionContent').slideUp('normal');	
		$('div.accordionContact').slideUp('normal');	
		$(this).next().slideDown('normal');
	});
	
	/********************************************************************************************************************
	CLOSES ALL DIVS ON PAGE LOAD
	********************************************************************************************************************/	
	$("div.accordionContent").hide();
	$("div.accordionContact").hide();
	

	
});

	/********************************************************************************************************************
	HOVER EFFECT FOR SIDEBAR MENU. MUST BE LOAD IN SEP. 
	FUNCTION AS TO NOT EFFECT INTIAL PAGE LOAD.
	
$(document).ready(function() {
	$('div.accordionButton').hover(function() {
		$('div.accordionContent').slideUp('normal');	
		$(this).next().slideDown('normal');
	});
});
	********************************************************************************************************************/