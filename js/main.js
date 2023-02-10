// Type: Module (with side-effects)

// Set title (tooltip) for project link containers and also add hover event listeners for displaying overlay
for (const el of document.getElementsByClassName('my-project')) {
	el.title = "Click to go to the project page or go to the site or repository directly using the buttons above" ;

	setTextOverlayVisiblity(el, false) ;

	el.addEventListener('mouseenter', (e) => {
		setTextOverlayVisiblity(e.target, true) ;
	}) ;
	el.addEventListener('mouseleave', (e) => {
		setTextOverlayVisiblity(e.target, false) ;
	}) ;
}

function setTextOverlayVisiblity(parentEl, isVisible) {
	const overlayEl = parentEl.querySelector('.project_overlay') ;
	if (overlayEl) overlayEl.classList.toggle('d-none', !isVisible) ;
}

// Add click event handlers for overlay buttons
for (const el of document.getElementsByClassName('my-button-overlay')) {
	el.addEventListener('click', (e) => {
		window.open(e.target.dataset.url, '_blank') ;
		e.preventDefault() ;
 }) ;
}