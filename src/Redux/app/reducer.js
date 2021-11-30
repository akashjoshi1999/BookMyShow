import { loadData, saveData } from "../LocalStorage";

const initState = {
    city: "",
    isAuth: loadData("auth") || false
}
export const reducer = (state = initState, { type, city, auth }) => {
    switch (type) {
        case "cityChange": {
            return {
                ...state,
                city: city
            }
        }
        case "LOGIN-AUTH": {
            const updated = { auth: auth }
            saveData("auth", updated)
            return {
                ...state,
                isAuth: updated.auth
            }
        }
        default:
            return state
    }
}