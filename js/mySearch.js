/**
* Retrieves user input from search box upon keyup, finds images with captions containing user input, 
* and sets all other images display value to ''
*/
function searchGallery() {
	let userInput = document.querySelector('.userSearch').value.toLowerCase();	
	let captions = document.getElementsByClassName("image-tile"); //get all images from the gallery so they can be searched
	 for (let i = 0; i < captions.length ; i++ ) {		 	
	 	if ( captions[i].getAttribute("data-caption").toLowerCase().indexOf(userInput) > -1) {
	 		// captions[i].getAttribute("data-caption") corresponds to the caption in photoList from app.js
	 		// if any matching text is found this will be higher than -1 and triger this code block, making it visible
			captions[i].style.display = '';
		} else {
			captions[i].style.display = 'none';
		}
	 }
}