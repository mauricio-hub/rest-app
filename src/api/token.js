import {TOKEN} from "../utils/constants"
//funcion para setear en el local storage con el token del usuario 
export function setToken(token){
    localStorage.setItem(TOKEN,token)
}

export function getToken(){
   return localStorage.getItem(TOKEN)
}

export function removeToken() {
    localStorage.removeItem(TOKEN)
}