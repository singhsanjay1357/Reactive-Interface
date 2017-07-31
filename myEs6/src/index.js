import { aboutController } from './about/about-controller';
import { priceController } from './price/price-controller';
import { contactController } from './contact/contact-controller';

document.getElementById("about").addEventListener('click',about);
document.getElementById("price").addEventListener('click',price);
document.getElementById("contact").addEventListener('click',contact);


function about(){
	var abt = new aboutController();
	abt.loadAbout();
}


function price(){
	var prc = new priceController();
	prc.loadPrice();
}

function contact(){
	var ct = new contactController();
	ct.loadContact();
}