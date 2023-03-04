import fetch from "unfetch";

const url = "/api/v1/country";

const checkStatus = response => {

    if(response.ok) {
        return response;
    }

    //convert non-2xx HTTP responses to errors
    const error = new Error(response.statusText);
    error.response = response;
    return Promise.reject(error);
}

export const getGeneratedCountry = () => {

    return fetch(url)
         .then(checkStatus);
 }