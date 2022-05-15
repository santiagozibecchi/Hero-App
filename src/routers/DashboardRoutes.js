
import { Route, Routes } from 'react-router-dom';

import DcScreen from '../components/dc/DcScreen';
import Hero from '../components/hero/HeroScreen';
import MarvelScreen from '../components/marvel/MarvelScreen';
import SearchScreen from '../components/search/SearchScreen';
import { Navbar } from '../components/ui/NavBar';


const DashboardRoutes = () => {
      return (
            <>
                  <Navbar />

                  <div className='container'>
                        <Routes>
                              <Route path="/" element={<MarvelScreen />} />
                              <Route path="dc" element={<DcScreen />} />
                              <Route path="marvel" element={<MarvelScreen />} />
                              <Route path="search" element={<SearchScreen />} />
                              <Route path="hero/:heroeId" element={<Hero />} />
                        </Routes>
                  </div>

            </>
      )
}

export default DashboardRoutes;