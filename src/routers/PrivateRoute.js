import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../auth/authContext";
// import queryString from 'query-string'


// TODAS LAS RUTAS PRIVADAS PASAN POR ACA


const PrivateRoute = ({ children }) => {

      const { user } = useContext(AuthContext);

      // const location = useLocation();
      const {pathname, search} = useLocation();
      // console.log(location);

      // const { q = '' } = queryString.parse(location.search);
      // console.log(q);


      //Guardo en el localStorage
      localStorage.setItem('lastPath', pathname+ search)

      return user.logged
            ? children
            // En caso de no estar autenticado me permite navegar hacia la ruta que yo quiero
            : <Navigate to="/login" />
}

export default PrivateRoute;