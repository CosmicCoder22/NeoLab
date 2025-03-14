import { useEffect, useState } from 'react'
import './App.css'
import Header from './components/header/Header'
import Home from './sections/home/Home'
import LaboratoryAnalisys from './sections/laboratoryAnalisys/LaboratoryAnalisys'
import ResearchCenter from './sections/researchCenter/ResearchCenter'
import Footer from './components/footer/Footer'

function App() {

  const [isDarkText, setisDarkText] = useState(true)
  
  const [activeHeaderBtn, setActiveHeaderBtn] = useState('home')

  const [activeSection, setActiveSection] = useState('home')

  return (
    <div className="appBody">
        <Header isDarkText={isDarkText} setisDarkText={setisDarkText} setActiveSection={setActiveSection} setActiveHeaderBtn={setActiveHeaderBtn} activeHeaderBtn={activeHeaderBtn}/>
        <div className="appContent">
          {activeSection === 'home' && (<Home />)}
          {activeSection === 'analisys' && (<LaboratoryAnalisys />)}
          {activeSection === 'research' && (<ResearchCenter />)}          
        </div>
        <Footer isDarkText={isDarkText} setActiveSection={setActiveSection} setActiveHeaderBtn={setActiveHeaderBtn}/>
        
    </div>
  )
}

export default App
