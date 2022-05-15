import { useMemo } from 'react';

import HeroCard from './HeroCard';
import { getHeroByPublisher } from '../../selectors/getHeroByPublisher';


// mostrar la lista de los heroes
const HeroList = ({ publisher = '' }) => {

      const heroes = useMemo(() => getHeroByPublisher(publisher), [publisher])

      return (
            <div className='row rows-col-1 row-cols-md-3 g-3 animate__animated animate__fadeIn'>
                  {
                        heroes.map(hero => (
                              <HeroCard key={hero.id}
                                    // Puedo desestructurar todas las propiedades que 
                                    // vienen en el heroe heroes {properties}
                                    {...hero}
                              />
                        ))
                  }
            </div>
      )
}

export default HeroList