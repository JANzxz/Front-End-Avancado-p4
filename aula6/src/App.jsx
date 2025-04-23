import React from 'react'
import { BrowserRouter, Route, Routes} from 'react-router-dom'
import Inicial from './pages/Inicial'
import Contato from './pages/Contato'
import Dpol from './pages/Dpol'
import Faculdade from './pages/Faculdade'
import Noticias from './pages/Noticias'
import Navbar from './components/Navbar'

const App = () => {
  return (
    <BrowserRouter>

    <Navbar />
    
    <Routes>
      <Route path="/" element={<Inicial />}/>
      <Route path="/noticias" element={<Noticias />}></Route>
      <Route path="/contato" element={<Contato />}></Route>
      <Route path="/dpo-lgpd" element={<Dpol />}></Route>
      <Route path="/faculdade" element={<Faculdade />}></Route>
    </Routes>

    </BrowserRouter>
  )
}

export default App