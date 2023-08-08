//Glavna logika Redux Sage

const urlQuotesLocalhost3001 = "http://localhost:3001/quotes/";
const urlImagesLocalhost3002 = "http://localhost:3002/images/";

export const sortQuoteAPI = async (quoteType) => {
    const response = await fetch(urlQuotesLocalhost3001);
    const data = await response.json();

    const sortedData = data.filter( quote => quote.type === quoteType);
    
    return sortedData;
}

export const findQuoteAPI = async (inputString) => {
    try {
        const response = await fetch(urlQuotesLocalhost3001);
        const data = await response.json();
        
        const filteredData = data.filter( quote => {
            const quoteText = quote.text.toUpperCase();
            const inputString2 = inputString.toUpperCase();

            return quoteText.search(inputString2) !== -1;
        });
        
        return filteredData;

    } catch (error) {
        console.log(error);
    }
}
export const fetchQuoteData = async () => {
    try {
        const response = await fetch(urlQuotesLocalhost3001);
        const data = await response.json();

        return data;

    } catch (error) {
        console.log(error);
    }
}
export const fetchQuoteDataImages = async () => {
    try {
        const response = await fetch(urlImagesLocalhost3002);
        const dataImages = await response.json();

        // console.log("fetchQuoteDataImages() dataImages: ",dataImages);
        return dataImages;
    } catch (error) {
        console.log(error);
    }
}

export const addQuoteAPI = async (quote) => {
    try {
        // console.log("addQuoteAPI quote:", quote);

        const response = await fetch(urlQuotesLocalhost3001,{
            method: 'post',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(quote)
        });

        const response2 = await fetch(urlQuotesLocalhost3001); 
        const data=await response2.json();

        return data;
    } catch (error) {
        console.log(error);
    }
}

export const likeQuoteAPI = async (quote) => {
    try {
        // console.log("addQuoteAPI quote:", quote);
        quote.likes++;
        
        const response = await fetch(urlQuotesLocalhost3001 + quote.id,{
            method: 'put',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(quote)
        });

        const response2 = await fetch(urlQuotesLocalhost3001); 
        const data=await response2.json();

        return data;
    } catch (error) {
        console.log(error);
    }
}

export const addImageAPI = async (image) => {
    try {
        console.log("za slanje - addImageAPI image:", image);

        const response = await fetch(urlImagesLocalhost3002,{
            method: 'post',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(image)
        });

        const response2 = await fetch(urlImagesLocalhost3002); 
        const data=await response2.json();

        console.log("Pristigla data: ", data);

        return data;
    } catch (error) {
        console.log(error);
    }
}
