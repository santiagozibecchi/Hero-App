import { Route, Routes, BrowserRouter } from 'react-router-dom';
import LoginScreen from '../components/login/LoginScreen';
import DashboardRoutes from './DashboardRoutes';
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';


const AppRouter = () => {
      return (
            <BrowserRouter>

                  {/* Dentro del obj. Routes solo pueden haber Route */}
                  <Routes>
                        {/* Esta ruta es publica */}
                        {/* <Route path="/login" element={<LoginScreen />} /> */}

                        <Route path="/login" element={
                              <PublicRoute>
                                    <LoginScreen />
                              </PublicRoute>
                        }
                        />


                        {/* Todas las rutas hijas de este routes son privadas */}
                        {/* Creo una nueva ruta, /* indica que si no es la ruta del login es la nueva */}

                        <Route path="/*" element={
                              <PrivateRoute>
                                    <DashboardRoutes />
                              </PrivateRoute>

                        }
                        />

                        {/* <Route path="/*" element={<DashboardRoutes />} /> */}


                  </Routes>

            </BrowserRouter>
      )
}

export default AppRouter