import { heroes } from "../data/heroes";

// retorno los heroes que cumplan con la condicion del publisher que voy a recibir
export const getHeroByPublisher = (publisher) => {

      const validPublishers = ['DC Comics', 'Marvel Comics'];

      if (!validPublishers.includes(publisher)) {
            throw new Error(` ${publisher} no es un publisher valido`)
      }

      return heroes.filter(hero => hero.publisher === publisher);
}
