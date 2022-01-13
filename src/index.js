import _ from 'lodash';
import './styles/styleMENU.css'
import { initialize } from './modules/loadPage';
import {home, menu, about} from './modules/header'
import { toggle} from './modules/main';

const content = document.getElementById("content");

initialize();


home.addEventListener("click", toggle);
//menu.addEventListener("click", )
about.addEventListener("click", toggle);




export {content}
