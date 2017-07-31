import { portfolios } from './portfolio-data';

export class PortfolioService {


    constructor() {

    }

    getPortfolios() {
        console.log(portfolios[0].title);
        return portfolios;
    }

    createPortfolio() {

    }

    removePortfolio() {

    }

}