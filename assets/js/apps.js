//*check off specfic todos by  clicking*/
$('ul').on('click', 'li', function() {
	//! we are adding the event listner to the whole ul cuz jQuery  listens to elements already exists when the page loads the first time, then we added "li"after "click" so this events fires ONLY when li item is clicked, so we are listening to the li not ul
	console.log('this item is completed');
	$(this).toggleClass('completed');
});

//* Click on X to delete todo*/
$('ul').on('click', 'span', function(event) {
	$(this).parent().fadeOut(500, function() {
		$(this).remove();
	});
	event.stopPropagation(); //!jQuery method that will stop events from bubbling up, this will prevent the li event from firing  making the text grey and lined-through
});

$("input[type='text']").keypress(function() {
	if (event.which === 13) {
		//grabbing new todo text from input
		var todoText = $(this).val();
		$(this).val('');
		//create new li and add it to the ul
		$('ul').append('<li><span><i class="fas fa-trash"></i></span> ' + todoText + '</li>');
	}
});

/**plus icon toggle the input */
$(".fa-plus").on("click", function () {
    console.log("plus clicked");
    $("input[type=text]").slideToggle();
});

