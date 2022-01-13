import {main} from "./main"

const home = document.createElement("div");
home.className = "home";

function makeHome() {

    const txtContainer = document.createElement("div");
    txtContainer.className = "txt-container";

    const container = document.createElement("div");
    container.className = "container";

    home.appendChild(txtContainer);
    home.appendChild(container);

    const makeTxt = () => {
        //welcome
        let welcome = document.createElement("div");
        welcome.id = "welcome";
        welcome.innerHTML = "WELCOME";

        //msg
        let msg = document.createElement("div");
        msg.id = "msg";
        msg.innerHTML = "To Your Meaty Paradise";

        //append to txtContainer
        txtContainer.appendChild(welcome);
        txtContainer.appendChild(msg);
    }

    const footer = () => {
        //address
        let address = document.createElement("div");
        address.id = "address";
        address.innerHTML = "1800 Boardfish Road, San Diego California 92991";

        //contact
        let contact = document.createElement("div");
        contact.id = "contact";
        contact.innerHTML = "&#128222 929-EAT-MEAT";

        //append to container
        container.appendChild(address);
        container.appendChild(contact);
    }

    makeTxt();
    footer();

}

export {home, makeHome}
