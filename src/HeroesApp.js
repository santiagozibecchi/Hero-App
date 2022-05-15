import { useEffect, useReducer } from "react"
import { AuthContext } from "./auth/authContext"
import { authReducer } from "./auth/authReducer"
import AppRouter from "./routers/AppRouter"


const init = () => {
      // si el primero es nulo regresa la segunda condicion
      return JSON.parse(localStorage.getItem('user')) || { logged: false }
}


const HeroesApp = () => {

      // la funcion init(inicializadora es la primera que se llama)
      const [user, dispatch] = useReducer(authReducer, {}, init);

      // Pendiente de los cambios del objeto user
      useEffect(() => {

            if (!user) return;

            localStorage.setItem('user', JSON.stringify(user));

      }, [user])



      return (

            <AuthContext.Provider value={{
                  user,
                  dispatch
            }}>

                  <AppRouter />

            </AuthContext.Provider>

      )
}

export default HeroesApp