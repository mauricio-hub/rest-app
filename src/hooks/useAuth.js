import { useContext } from "react";
import { AuthContext } from "../context";

//useContext obtiene el valor del contexto en este caso retorna el AuthContext
//esto se debe reutilizar cuando se quiera pasar informacion de autenticacion o del usuario
//para otros coponentes
export const useAuth = ()=> useContext(AuthContext)