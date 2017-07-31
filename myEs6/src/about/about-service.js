import { about } from './about-data';


export class aboutService {


    constructor() {

    }

    getAbout() {
        console.log(about[0].title);
        return about;
    }

    createAbout() {

    }

    removeAbout() {

    }

}