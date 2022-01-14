import { content} from "../index";

//nav bar buttons
const home = document.createElement("button");
let menu = document.createElement("button");
let about = document.createElement("button");


const makeHeader = () => {
    
    //header element
    const header = document.createElement("div");
    header.className = "header";

    //nav element
    const nav = document.createElement("div");
    nav.className = "nav";

    //make restuarant name and append to header
    let restuarantName = () => {

        let name = document.createElement("div");
        name.id = "name";
        name.innerHTML = "Beef";

        header.appendChild(name);

    }
    //create 3 buttons in nav bar - home, menu, about
    let navbar = () => {

        //make home, menu, about tab
        home.id = "home-nav";
        home.innerHTML = "Home";
        home.classList.add("active");

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

    //append header to content
    content.appendChild(header);

}

    export {home, menu, about, makeHeader}

