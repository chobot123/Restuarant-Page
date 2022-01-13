//WRITE INITIAL PAGE LOAD 
import {makeHeader} from "./header"
import { makeMain } from "./main";


const initialize = () => {
    //initial header + main

    makeHeader();
    makeMain();

}

export {initialize}