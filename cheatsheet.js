//Cheatsheet for jQuery

//Using external JavaScript libraries
	//A library is a bunch of functions that someone was already written-so tasks are easier to perform.

//Common Library problems
	//Command option j = brings up console
		//errors will be shown in console
		//type jQuery in console to test if it is included

//jQuery = "write less, do more"
	//Can be slower than native JavaScript
		//Cross-browser-friendly !!!
	//Including jQuery Library
		//in head of section :
			// <script src="http://ajax.googleapis.com/ajax/libs/jquery/1.10.2/jquery.min.js">
			//	</script>
				//this copy of the library is from google!
//DOM = Document Obkject Model
	//standard for interacting and representing HTML/XHTML/XML
	//jquery makes it easy to select elements in DOM
		//practically all HTML tags are included
	//selecting elements in the DOM
		//$("body")
		//$("p")
		//$("nav")
		// $ is a shorthand for calling jQuery

$(document).ready( function(){	
	//example of selection
	$("h1").hide();
		//hide
	$("h1").fadeIn(4000);
		//fade in over 4 seconds
		//in order to fade in, the h1 must be hidden first!!!
	$("h1").fadeOut(1000);
		//fade out over 1 second
	$("h1").show(1000);
		//show over 1 second
	$("p").hide()
		//hide before sliding in
	$("p").slideDown(5000);
		//another way to fadeIn
			//slide in is another way of fading out!
	$("address").animate({opacity:.5},5000);
		//animation can take numeric values!
	$("p").click(function(){
		alert("I WAS JUST CLICKED! OMG!");
		//this will trigger an event once an the item is clicked!
	})
})
