
let dragged = null;

document.addEventListener("dragstart", event => {
	// store a ref. on the dragged elem
	dragged = event.target;
});

document.addEventListener("dragover", event => {
	// prevent default to allow drop
	event.preventDefault();
});

document.addEventListener("drop", event => {
	event.preventDefault();
	console.log("target = " + event.target)
	if (event.target.className.includes("dropzone")) {
		let parent = dragged.parentNode
		console.log("Replacing " + event.target + " with " + dragged)
		let tmp = parent.replaceChild(dragged.cloneNode(), event.target)
		parent.replaceChild(tmp, dragged)
	}
});