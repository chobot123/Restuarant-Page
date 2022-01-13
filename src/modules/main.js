import { content } from "..";
import {home, makeHome} from "./home"
import {about, makeAbout} from "./about"
import '../styles/styleMENU.css'


const main = document.createElement("div")
main.className = "main";

const makeMain = () => {
    makeHome();
    makeAbout();
    main.appendChild(home);
    //main.appendChild(menu);
    main.appendChild(about);
    content.appendChild(main);
}

const toggle = (e) => {
    let choice = e.target.id;
    let list = main.childNodes;

    list.forEach(function(currentValue){ //current Value = "home", "about"
        let test = `${currentValue.className}-nav`;
        let btn = document.getElementById(test);
        if(choice === test){
            console.log(`test1`)
            currentValue.style.display = "flex";
            btn.classList.add("active");
        }
        else {
            currentValue.style.display = "none";
            console.log(btn);
            btn.classList.remove("active");
        }
    })
}

export {toggle, makeMain}