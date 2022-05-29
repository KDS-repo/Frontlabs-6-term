import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
    constructor(params) {
        super(params);
        this.setTitle("Register");
    }

    async getHtml() {
        return `
    		<div class="center">
    			<header>
    				<input id="register" type="button" value="Register" class="header-button header-text">
    				<input id="login" type="button" value="Login" class="header-button header-text">
    			</header>
    			<div id="register" class="login-form hide">
    				<span class="login-item formtext">Register new user</span>
    				<input type="text" placeholder="E-mail address" class="login-item">
    				<input type="text" placeholder="Username" class="login-item">
    				<input type="text" placeholder="Password" class="login-item">
    				<input type="button" value="Register" class="login-item">
    			</div>
    			<div id="login" class="login-form">
    				<span class="login-item formtext">Login</span>
    				<input id="username" type="text" placeholder="Username" class="login-item">
    				<input id="password" type="text" placeholder="Password" class="login-item">
    				<input id="login-button" type="button" value="Login" class="login-item">
    			</div>
    		</div>
		<script>
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
		</script>
        `;
    }
}