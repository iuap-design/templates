u.on(window, 'load', function() {
	var selectPicDialog = document.body.querySelector("#selectPicDialog");
	u.on(selectPicDialog,'click', function(){
		window.md = u.dialog({id:'testDialg',content:"#picSelector_dialog_content",hasCloseMenu:true});
	});
	

})