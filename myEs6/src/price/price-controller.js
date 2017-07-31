
import { priceService } from './price-service';

export class priceController {

    constructor() {
        this.price = [];
        this.priceService = new priceService();
        this.getPrice();
    }

    getPrice() {
        this.price = this.priceService.getPrice();
    }


    loadPrice() {
        document.getElementById('main-container').innerHTML = this.price;
}
}