import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
    constructor(params) {
        super(params);
        this.setTitle("Excercise");
    }

    async getHtml() {		
		window.addEventListener("load", () => {
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
		}
		);
        return `
				<p>Aenean eleifend odio vel turpis imperdiet commodo quis nec massa. Donec molestie porta dolor, a volutpat purus vulputate at. In rhoncus, enim eget bibendum iaculis, massa ipsum aliquam leo, a dapibus elit nisi id odio. Donec bibendum id felis vitae ullamcorper. Fusce non turpis vel dolor aliquam volutpat ut sed massa. Pellentesque a felis ante. Vivamus a mi placerat ligula tempus consectetur id quis ipsum. Etiam a sollicitudin lectus. Mauris at maximus nulla. In pretium iaculis porta. Mauris auctor, eros at pharetra condimentum, arcu ipsum malesuada mauris, vitae tincidunt risus odio eget erat. Nulla accumsan fringilla diam, ut pretium nulla gravida quis. Maecenas at ultricies ipsum.</p>
				<img style="border: 1px solid black; width: 40%; height: 20em;">
				<br />
				<input type="text">
				<ul>
					<li><input type="radio" name="answer">Answer A </li>
					<li><input type="radio" name="answer">Answer B</li>
					<li><input type="radio" name="answer">Answer C</li>
					<li><input type="radio" name="answer">All of the above</li>
				</ul>
				<span class="horizontal">
					<img class="dropzone answer-images" draggable="true" src="images/ph-a.jpg">
					<img class="dropzone answer-images" draggable="true" src="images/ph-F.jpg">
					<img class="dropzone answer-images" draggable="true" src="images/ph-u.jpg">
					<img class="dropzone answer-images" draggable="true" src="images/ph-p.jpg">
				</span>
        `;
    }
}