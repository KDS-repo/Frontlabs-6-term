window.addEventListener("load", () => {
	let space = document.querySelector("a.acc")
	space.innerHTML = (window.sessionStorage.usr == null)? "Account" : window.sessionStorage.usr
})