import { newsApiKey } from '../keys';

export default async (fetchType, coin) => {
    /*
    * Initialize data variable :
    *   1. set error variable
    *   2. set error message based on fetchType
    * */
    let data = {
        error: {
            result: false,
            message: `${fetchType.charAt(0).toUpperCase() + fetchType.slice(1)} was not found`
        },
    };

    /*
    * @try :
    *   1. fetch api based on fetchType
    *   2. parse api
    *   3. if no fetched data is returned set error to true, else set data to fetched data
    *
    * @catch :
    *   1. set error variable to true
    *   2. set errormessage to the returned error from javascript
    * */
    try {
        const response = await fetch(
            fetchType === 'news'
            ? `http://newsapi.org/v2/top-headlines?country=nl&apiKey=${newsApiKey}`
            : `https://api.coingecko.com/api/v3/coins/${coin || 'bitcoin'}/tickers`
        );
        const parsed = await response.json();
        parsed == null
            ? data.error.result = true
            : data.response = parsed;
        if(!data.error.result) data.error.message = `${fetchType} data received`;
    } catch (e) {
        data.error.result = true;
        data.error.message = e;
    }

    /*
    * @return :
    *   let data (object)
    * */
    return data;
};