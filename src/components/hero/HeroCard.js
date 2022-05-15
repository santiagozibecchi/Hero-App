import React from 'react'
import { Link } from 'react-router-dom';
import { heroImages } from '../../helpers/heroImages';

// const heroImages = require.context('../../assets', true);


// Regreso una tarjeta por heroe
const HeroCard = ({
      id,
      superhero,
      publisher,
      alter_ego,
      first_appearance,
      characters,
}) => {

      // const imgPath = `../../assets/${id}.jpg`;


      return (
            <div className='col'>

                  <div className='card'>

                        <div className='row no-gutters'>
                              <div className='col-4'>
                                    <img
                                          // src={heroImages(`./${id}.jpg`).default}
                                          src={heroImages(`./${id}.jpg`)}
                                          className='card-img' alt={superhero} />
                              </div>
                              <div className='col-8'>

                                    <div className='card-body'>

                                          <h5 className='card-title'>{superhero}</h5>
                                          <p className='card-text'>{alter_ego}</p>

                                          {
                                                (characters !== alter_ego) &&
                                                <p className='text-muted'>{characters}</p>
                                          }

                                          <Link to={`/hero/${id}`}>
                                                Mas...
                                          </Link>

                                    </div>

                              </div>
                        </div>

                  </div>

            </div>
      )
}

export default HeroCard;