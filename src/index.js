import _ from 'lodash';
import {header, nav, makeHeader} from './modules/header';
const content = document.getElementById("content");

content.appendChild(makeHeader());