
import { aboutService } from './about-service';

export class aboutController {

    constructor() {
        this.about = [];
        this.aboutService = new aboutService();
        this.getAbout();
    }

    getAbout() {
        this.about = this.aboutService.getAbout();

    }

    loadAbout() {
        document.getElementById('main-container').innerHTML = this.about;
    }

}