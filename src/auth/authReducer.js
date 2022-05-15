import { types } from "../types/types"

// const state = {
//       name: 'Santiago',
//       logged: true
// }

// forma de la accion 
// const loginAction = {
//       type: types.login,
//       payload: { 
//             name: '',
//             email: ''
//       }
// }

export const authReducer = (state = {}, action) => {

      switch (action.type) {
            case types.login:
                  return {
                        ...action.payload,
                        logged: true
                  }                   
            case types.logout:
                  return {
                        // Se borran las propiedades en el state y solo queda logged, 
                        // Punto de entrada para saber si el usuario esta autenticado o no
                        logged: false
                  }

            default:
                  return state;
      }


}