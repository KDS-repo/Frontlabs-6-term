
document.addEventListener("DOMContentLoaded", () => {
let btn = document.querySelector("input#login");

btn.addEventListener('click', () => {
	let showing = document.querySelector("div#login");
	let hiding = document.querySelector("div#register");
	showing.setAttribute("class", "login-form");
	hiding.setAttribute("class", "login-form hide");
	}
);

btn = document.querySelector("input#register");
btn.addEventListener('click', () => {
	let showing = document.querySelector("div#register");
	let hiding = document.querySelector("div#login");
	showing.setAttribute("class", "login-form");
	hiding.setAttribute("class", "login-form hide");
	}
);

btn = document.querySelector("input#login-button")
let logfield = document.querySelector("input#username")
btn.addEventListener("click", () => {
	console.log(logfield)
	console.log(logfield.value)
	window.sessionStorage.setItem("usr", logfield.value)
})
})