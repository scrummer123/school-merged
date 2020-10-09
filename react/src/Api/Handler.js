import apiCall from './apiCall';

/*
* sandler for api calls
* */
export default class Handler {
    static coinData = null;
    static coinDataError = false;

    static news = null;
    static newsError = false;

    static newRequest = false;

    /*
    * @param coin :
    *   coin id form api
    * 
    * sets the coin data and saves it in class variable
    * */
    static async setCoins(coin) {
        console.log(coin);
        Handler.coinData = await apiCall('Coin', coin);
    }

    /*
    * 1. check for coin data in class
    * 2. sets error which belongs to the coin
    * */
    static async validateCoin(coin) {
        if(Handler.coinData == null || Handler.newRequest) await Handler.setCoins(coin);
        Handler.newRequest = false;
        Handler.coinDataError =  Handler.coinData.error.result;
    }

    /*
    * sets the news and saves it in class variable
    * */
    static async setNews() {
        Handler.news = await apiCall('news');
    }

    /*
    * 1. check for news data in class
    * 2. sets error which belongs to the news
    * */

    static async validateNews() {
        if(Handler.news == null) await Handler.setNews();
        Handler.newsError = Handler.news.error.result;
    }

    // ! ----------------------
    // ! callable api functions (exported from Api/index.js)
    // ! ----------------------

    /*
    * @param coin :
    *   coin id form api
    * @return :
    *   data with error info
    * */
    static async getCurrency(coin) {
        await Handler.validateCoin(coin);
        return Handler.coinData;
    }

    /*
    * @return :
    *   data with error info
    * */
    static get getNewsArticles() {
        return (async () => {
            await Handler.validateNews();
            return Handler.news;
        })();
    }

    /* 
    * @return :
    *   error message from fetch
    * */
    static getErrorFrom(fetchType = null) {
        return (
            fetchType === 'news'
                ? Handler.newsError
                : Handler.coinDataError
        );
    }
    
    static setNewRequest(newVal) {
        if(typeof newVal === 'boolean') Handler.newRequest = newVal;
    }
}
