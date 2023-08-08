export const QUOTE_COMMENT = "QUOTE_COMMENT";
export const QUOTE_FIND = "QUOTE_FIND";
export const QUOTE_ADD = "QUOTE_ADD";
export const QUOTE_SORT = "QUOTE_SORT";

export const REQUEST_API_DATA="REQUEST_API_DATA";
export const RECEIVE_API_DATA="RECEIVE_API_DATA";

export const REQUEST_API_DATA_IMAGES = "REQUEST_API_DATA_IMAGES";
export const RECEIVE_API_DATA_IMAGES = "RECEIVE_API_DATA_IMAGES";

export const IMAGE_ADD_SAGA = "IMAGE_ADD_SAGA";

export const QUOTE_ADD_SAGA = "QUOTE_ADD_SAGA";
export const QUOTE_FIND_SAGA = "QUOTE_FIND_SAGA";
export const QUOTE_SORT_SAGA = "QUOTE_SORT_SAGA";
export const QUOTE_LIKE_SAGA = "QUOTE_LIKE_SAGA";


export function sortQuote(quoteType){

    return{
        type:QUOTE_SORT,
        payload: quoteType
    }
}
export function addQuote(quote){
    return{
        type: QUOTE_ADD,
        payload: quote
    }
}

export function commentQuote(){
    return{
        type: QUOTE_COMMENT,
        payload: "Komentar"
    }
}

export function findQuote(inputString){
    console.log(QUOTE_FIND);
    return{
        type: QUOTE_FIND,
        payload: inputString
    }
}

//Redux Saga:

//Quotes
export const requestApiData = () => {
    return {
        type: REQUEST_API_DATA
    }
}
export const receiveApiData = (data) => {
    // console.log("receiveApiData");
    return {
        type: RECEIVE_API_DATA, data
    }
}
//Images
export const requestApiDataImages = () => {
    // console.log("requestApiDataImages");    
    return {
        type: REQUEST_API_DATA_IMAGES
    }
}
export const receiveApiDataImages = (dataImages) => {
    // console.log("receiveApiData");
    return {
        type: RECEIVE_API_DATA_IMAGES, dataImages
    }
}

export const addQuoteSaga = (quote) => {
    // console.log("addQuoteSaga quote: ", quote);
    return {
        type: QUOTE_ADD_SAGA,
        payload: quote
    }
}

export const findQuoteSaga = (inputString) => {
    // console.log("findQuoteSaga inputString: ", inputString);
    return { 
        type: QUOTE_FIND_SAGA,
        payload: inputString
    }
}

export const sortQuoteSagaAction = (quoteType) => {
    // console.log("sortQuoteSagaAction quoteType: ", quoteType);
    return{
        type: QUOTE_SORT_SAGA,
        payload: quoteType
    }
}

export const likeQuoteSaga = (quote) => {
    // console.log("likeQuoteSaga quote: ", quote);
    return{
        type: QUOTE_LIKE_SAGA,
        payload: quote
    }
}

export const addImageSaga = (image) => {
    console.log("addImageSaga image: ", image);    
    return{
        type: IMAGE_ADD_SAGA,
        payload: image
    }
}