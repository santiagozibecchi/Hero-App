import { useMemo } from "react";
import { useParams, Navigate, useNavigate } from "react-router-dom";
import { heroImages } from "../../helpers/heroImages";
import { getHeroById } from '../../selectors/getHeroById'

// importacion de img para un recurso estatico
// import batman from '../../assets/dc-batman.jpg';

// importacion dinamica
// const heroImages = require.context('../../assets', true);


const Hero = () => {

      // para recibir el id del heroe
      const { heroeId } = useParams();

      const navigate = useNavigate()

      const hero = useMemo( () => {
            
            return getHeroById(heroeId);
      }, [heroeId] );
      

      const handleReturn = () => {
            // regresa a la pagina anterior
            navigate(-1)
      }

      // si no exite en heroe regreso a tal ruta
      if (!hero) {
            return <Navigate to='/' />
      }

      const { id ,superhero, publisher, alter_ego, first_appearance, characters } = hero

      // const imgPath = `../../assets/${id}.jpg`;


      return (
            <div className='row mt-5'>
                  <div className='col-4'>
                        <img
                              src={heroImages(`./${heroeId}.jpg`)}
                              // src={batman}
                              // parace que cambio la conf. de webpack
                              // src={heroImages(`./${heroeId}.jpg`).default }
                              alt={superhero}
                              className='img-thumbnail animate__animated animate__fadeInBottomLeft'
                        />
                  </div>

                  <div className='col-8'>
                        <h3>{superhero}</h3>
                        <ul className='list-group list-group'>
                              <li className='list-group-item'>
                                    <b> Alter ego:</b>
                                    {alter_ego}
                              </li>
                              <li className='list-group-item'>
                                    <b>Publisher:</b>
                                    {publisher}
                              </li>
                              <li className='list-group-item'>
                                    <b> Primera aparacion:</b>
                                    {first_appearance}
                              </li>
                        </ul>

                        <h5 className='mt-4'> Personajes </h5>
                        <p>{characters}</p>

                        <button
                              className='btn btn-outline-info'
                              onClick={handleReturn}
                        >Regresar
                        </button>

                  </div>
            </div>
      )
}

export default Hero;