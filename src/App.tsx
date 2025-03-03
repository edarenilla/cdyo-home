
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import { Navigate } from 'react-router-dom'
import Header from './components/Header'
import HomePage from './pages/HomePage'
import LoginPage from './pages/LoginPage'
import SearchPage from './pages/SearchPage'
import LanguagePage from './pages/LanguagePage'
import AboutPage from './pages/AboutPage'
import UnetePage from './pages/UnetePage' 
import ComoorarPage from './pages/ComoorarPage'
import BlogPage from './pages/BlogPage'
import DonaPage from './pages/DonaPage'
import RecursosPage from './pages/RecursosPage'


function App() {
  return (
   
        <BrowserRouter>

                  <Header />

              <Routes>
                  <Route path="/" element={<Navigate to="/inicio" />} />

                  <Route path='/inicio' element={ <HomePage /> } />
                  <Route path='/iniciar-sesion' element={ <LoginPage /> } />
                  <Route path='/buscar' element={ <SearchPage /> } />   
                  <Route path='/lenguaje' element={ <LanguagePage /> } />
                  <Route path ='/acerca-de' element={ <AboutPage /> } />
                  <Route path ='/unete' element ={ <UnetePage /> } /> 
                  <Route path='/como-orar' element={ <ComoorarPage /> } />
                  <Route path='/blog' element ={<BlogPage />} />
                  <Route path='/recursos' element={<RecursosPage />} />
                  <Route path='/dona' element ={<DonaPage />} />

            </Routes>

        </BrowserRouter>

  )}
export default App
