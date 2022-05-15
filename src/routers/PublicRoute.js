// Solo usuarios no autenticados puden ver el login

import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../auth/authContext";

// dentro del children solo estoy recibiendo el login
const PublicRoute = ({ children }) => {

      const { user } = useContext(AuthContext);

      return user.logged
            ? <Navigate to="/mavel" />
            : children

}

export default PublicRoute