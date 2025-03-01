import { useState } from 'react'
import './App.css'
import Header from './components/header/Header'
import Home from './sections/home/Home'
import LaboratoryAnalisys from './sections/laboratoryAnalisys/LaboratoryAnalisys'
import ResearchCenter from './sections/researchCenter/ResearchCenter'

function App() {
  
  

  const [activeSection, setActiveSection] = useState('home')

  return (
    <div className="appBody">
        <Header setActiveSection={setActiveSection}/>
        {/* <div className="appContent">
          {activeSection === 'home' && (<Home />)}
          {activeSection === 'analisys' && (<LaboratoryAnalisys />)}
          {activeSection === 'research' && (<ResearchCenter />)}          
        </div> */}

    </div>
  )
}

export default App
