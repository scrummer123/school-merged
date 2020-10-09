import Handler from "./Handler";

/*
* getter :
*   get currency from Handler class
* */
const getCurrency = Handler.getCurrency;

/* 
* getter : 
*   get news articles from Handler class
* */
const articles = Handler.getNewsArticles;

/* 
* getter : 
*   get error based on param
* */
const getErrorFrom = Handler.getErrorFrom;

/* 
* setter :
*   set new request variable in class
* */
const setNewRequest = Handler.setNewRequest;

export {
    getCurrency,
    articles,
    getErrorFrom,
    setNewRequest
};