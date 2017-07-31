
import { contactService } from './contact-service';

export class contactController {

    constructor() {
        this.contact = [];
        this.contactService = new contactService();
        this.getContact();
    }

    getContact() {
        this.contact = this.contactService.getContact();
    }


    loadContact() {
        document.getElementById('main-container').innerHTML = this.contact;
    }

    contact1(){
        
    }
}