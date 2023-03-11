import React, { useEffect,useState,createContext } from "react";
import { setToken,getToken,removeToken } from "../api/token";
import { useUser } from "../hooks";

export const AuthContext = createContext({
  auth: undefined,
  login: () => null,
  logout: () => null,
});

export function AuthProvider(props) {

  const [auth, setAuth] = useState(undefined)

  const { children } = props;
  const { getMe } = useUser();


  //funcion para recuperar la session del usuario cuando
  //recarga la pagina
  //funcion auto ejecutable para obtener el token del localstorage 
  //y la data del usuario del enpoint
   useEffect(() => {
    (async ()=> {
      //extrae el token del localstorage
      const token = getToken()
      if (token) {
        //si existe el token extrae los datos del usuario del endpoint
        const dataUser = await getMe(token)
        setAuth({token,dataUser})
      } else {
        setAuth(null)
      }
      
    })()
  }, [])
  


  const login = async (token) => {
    //setamos el token en local storage
    setToken(token);
    const dataUser = await getMe(token);
    //cambiamos el estado del auth pasando el token y los datos del usuario
    setAuth({token,dataUser})/*  */
  };

  const logout = () => {
    if (auth) {
      removeToken()
      setAuth(null)
    }
  }

  const valueContext = {
    auth,
    login,
    logout
  };


  if (auth === undefined) return <><h1>Loading...</h1></> 

  return (
    <AuthContext.Provider value={valueContext}>{children}</AuthContext.Provider>
  );
}
