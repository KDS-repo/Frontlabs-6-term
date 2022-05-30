document.addEventListener("click", event => {
	if(event.target.matches("input#login")) {
		let showing = document.querySelector("div#login");
		let hiding = document.querySelector("div#register");
		showing.setAttribute("class", "login-form");
		hiding.setAttribute("class", "login-form hide");
	}
	
	if(event.target.matches("input#register")) {
		let showing = document.querySelector("div#register");
		let hiding = document.querySelector("div#login");
		showing.setAttribute("class", "login-form");
		hiding.setAttribute("class", "login-form hide");
	}
	
	if(event.target.matches("input#login-button")) {
		let logfield = document.querySelector("input#username")
		console.log(logfield)
		console.log(logfield.value)
		window.sessionStorage.setItem("usr", logfield.value)
	}
})