import { content} from "../index";

//header element
const header = document.createElement("div");
header.className = "header";

//nav element
const nav = document.createElement("div");
nav.className = "nav";

//nav bar buttons
const home = document.createElement("button");
let menu = document.createElement("button");
let about = document.createElement("button");


const makeHeader = () => {

    const header = document.createElement("div");
    header.className = "header";

    const nav = document.createElement("div");
    nav.className = "nav";

    content.appendChild(header);

    let restuarantName = () => {
        //make restaurant name element
        let name = document.createElement("div");
        name.id = "name";
        name.innerHTML = "Beef";

        //append to header
        header.appendChild(name);
    }

    let navbar = () => {

        //make home, menu, about tab
        home.id = "home-nav";
        home.innerHTML = "Home";

        menu.id = "menu-nav";
        menu.innerHTML = "Menu";

        about.id = "about-nav";
        about.innerHTML = "About";

        //append to nav which appends to header
        nav.appendChild(home);
        nav.appendChild(menu);
        nav.appendChild(about);
        header.appendChild(nav);
    }

    restuarantName();
    navbar();
}

    export {home, menu, about, makeHeader}

