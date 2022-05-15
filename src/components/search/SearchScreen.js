import React, { useMemo } from 'react'
import { useNavigate, useLocation } from 'react-router-dom';
import queryString from 'query-string'

import { useForm } from '../../hooks/useForm';
import { getHeroByName } from '../../selectors/getHeroByName';
import HeroCard from '../hero/HeroCard';

const SearchScreen = () => {

      const navigate = useNavigate();
      const location = useLocation();

      const { q = '' } = queryString.parse(location.search);
      // console.log(q);

      const [formValues, handleInputChange] = useForm({
            // como quiero que luzca el estado inicial
            searchText: q,
      });

      // extraigo el estado
      const { searchText } = formValues;

      // useMemo para no volver a renderizar todo el arreglo de heroes cada vez que cambia una letra en el input, ya que de ser asi, se renderiza muchas veces

      const heroesFilter = useMemo(() => getHeroByName(q), [q])

      const handleSearch = (e) => {
            e.preventDefault();

            navigate(`?q=${searchText}`)

            // console.log(searchText)
      }

      return (
            <>
                  <h1>Search Screen</h1>
                  <hr />

                  <div className='row'>

                        <div className='col-5'>
                              <h4>Buscar</h4>
                              <hr />

                              <form onSubmit={handleSearch}>
                                    <input
                                          type="text"
                                          placeholder='Buscar un heroe'
                                          className='form-control'
                                          name='searchText'
                                          autoComplete='off'
                                          value={searchText}
                                          onChange={handleInputChange}
                                    />

                                    <button
                                          type='submit'
                                          className='btn btn-outline-primary mt-2'
                                    >
                                          Buscar heroe...
                                    </button>

                              </form>

                        </div>

                        <div className='col-7'>
                              <h4>Resultados</h4>
                              <hr />

                              {
                                    (q === '')
                                          ? <div className='alert alert-info'>
                                                Buscar un heroe
                                          </div>
                                          // heroes filtrados igual a cero significa que no se encontro nada
                                          : (heroesFilter.length === 0) && <div
                                                className='alert alert-danger'
                                          >No hay resultados sobre: {q}</div>
                              }

                              {
                                    heroesFilter.map(hero => (
                                          <HeroCard
                                                key={hero.id}
                                                {...hero}
                                          />
                                    ))
                              }
                        </div>

                  </div>

            </>
      )
}

export default SearchScreen