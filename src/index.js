import _ from 'lodash';

//styles
import './styles/main.css'
import './styles/header.css'
import './styles/home.css'
import './styles/menu.css'
import './styles/about.css'

import { initialize } from './modules/loadPage';
import {home, menu, about} from './modules/header'
import { toggle} from './modules/main';

const content = document.getElementById("content");

initialize();

//event listeners for tabs
home.addEventListener("click", toggle);
menu.addEventListener("click", toggle);
about.addEventListener("click", toggle);




export {content}
