import { content } from "..";
import {home, makeHome} from "./home"
import {about, makeAbout} from "./about"
import {menu, makeMenu} from "./menu"


const main = document.createElement("div")
main.className = "main";

//append all tabs to main but only have home display on (default)
const makeMain = () => {
    makeHome();
    makeMenu();
    makeAbout();

    main.appendChild(home);
    main.appendChild(menu);
    main.appendChild(about);

    //append main to content
    content.appendChild(main);
}

//toggle between tabs via display on/off
const toggle = (e) => {

    let choice = e.target; //button selected
    let list = main.childNodes; //gets nodelist of tabs

    //loop through nodelist
    list.forEach(function(currentValue){ 

        let test = `${currentValue.className}-nav`; //gets string name of tab; -nav to compare with btn
        let btn = document.getElementById(test); //get btn element to loop through

        //if the chosen button corresponds to the tab, display that tab and show selected button
        if(choice.id === test){

            currentValue.style.display = "flex"; 
            btn.classList.add("active"); //button active

        }
        else { //hide display and button selection

            currentValue.style.display = "none";
            btn.classList.remove("active");

        }
    })
}

export {toggle, makeMain}