import { useState } from "react";
import { getMeApi, getUserApi } from "../api/user";
import {useAuth} from './useAuth'
export function useUser() {
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [users, setUsers] = useState(null)

  //de auth obtenemos el token 
  const {auth} = useAuth()

  //ejecuta la funcion  getMeApi() que apunta 
  //al endpoint  que retorna los datos del usuario
  const getMe = async (token) => {
    
    try {
      const response = await getMeApi(token);
      return response;
    } 
    catch (error) {
      throw error;
    }
  };

  const getUsers = async () =>{
    try {
      setLoading(true)
      const response = await getUserApi(auth.token)
      setLoading(false)
      console.log('res..',response);
      setUsers(response)
    } catch (error) {
      setLoading(false)
      setError(error)
    }
  }

  return {
    loading,
    error,
    users,
    getMe,
    getUsers
  };
}
