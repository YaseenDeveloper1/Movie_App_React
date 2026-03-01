import { Route,Routes } from 'react-router-dom'
import './css/App.css'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Favorites from './pages/Favorites'
import { FavoriteProvider } from './contexts/FavoriteContext'

function App() {  
  return (
    <FavoriteProvider>
  
    <Navbar />
    <main className='main-content'>
 <Routes>
  <Route path="/" element={<Home />} />
  <Route path="/favorites" element={<Favorites />} />
  
 </Routes>
 </main>
 </FavoriteProvider>
  ) 
}
export default App
