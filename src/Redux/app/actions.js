export const cityRequest = (city) => {
    return {
        type: "cityChange",
        city
    }
}


// Auth----------------------------------------
export const storeAuth = (auth) => {
   return {type: "LOGIN-AUTH",
    auth}
}