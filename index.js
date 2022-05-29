import Home from "./views/Home.js";
import Lecture from "./views/Lecture.js";
import Excercise from "./views/Excercise.js";
import Register from "./views/Register.js";

const pathToRegex = path => new RegExp("^" + path.replace(/\//g, "\\/").replace(/:\w+/g, "(.+)") + "$");

const getParams = match => {
    const values = match.result.slice(1);
    const keys = Array.from(match.route.path.matchAll(/:(\w+)/g)).map(result => result[1]);

    return Object.fromEntries(keys.map((key, i) => {
        return [key, values[i]];
    }));
};

const navigateTo = url => {
    history.pushState(null, null, url);
    router();
};

const router = async () => {
    const routes = [
        { path: "/Frontlabs-6-term/", view: Home },
        { path: "/Frontlabs-6-term/lecture", view: Lecture },
        { path: "/Frontlabs-6-term/excercise", view: Excercise },
        { path: "/Frontlabs-6-term/register", view: Register }
    ];

    // Test each route for potential match
    const potentialMatches = routes.map(route => {
        return {
            route: route,
            result: location.pathname.match(pathToRegex(route.path))
        };
    });

    let match = potentialMatches.find(potentialMatch => potentialMatch.result !== null);

    if (!match) {
        match = {
            route: routes[0],
            result: [location.pathname]
        };
        console.log(match.result)
    }

    const view = new match.route.view(getParams(match));

    document.querySelector("main article").innerHTML = await view.getHtml();
};

window.addEventListener("popstate", router);

document.addEventListener("DOMContentLoaded", () => {
    document.body.addEventListener("click", e => {
        if (e.target.matches("[data-link]")) {
            e.preventDefault();
            console.log(e.target.href);
            navigateTo(e.target.href);
        }
    });

    router();
});