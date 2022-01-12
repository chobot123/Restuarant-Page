

const header = document.createElement("div");
header.className = "header";

const nav = document.createElement("div");
nav.className = "nav";


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
        let home = document.createElement("button");
        home.id = "home";
        home.innerHTML = "Home";

        let menu = document.createElement("button");
        menu.id = "menu";
        menu.innerHTML = "Menu";

        let about = document.createElement("button");
        about.id = "about";
        about.innerHTML = "About";

        //append to nav which appends to header
        nav.appendChild(home);
        nav.appendChild(menu);
        nav.appendChild(about);
        header.appendChild(nav);
    }

    let makeHeader = () => {
        restuarantName();
        navbar();
        content.appendChild(header);
    }

    export {header, nav, makeHeader}

