
import { PortfolioService } from './portfolio-service';

export class PortfolioController {

    constructor() {
        this.portfolios = [];
        this.portfolioService = new PortfolioService();
        this.getPortfolios();
    }

    getPortfolios() {
        this.portfolios = this.portfolioService.getPortfolios();
    }


    loadProtfolio() {
        let portfolioHtml;
        this.portfolios.forEach(portfolio => {
            portfolioHtml += `<li> ${portfolio.title} --  ${portfolio.category} </li>`;
        }, this);
        document.getElementById('main-container').innerHTML = portfolioHtml;
    }

}