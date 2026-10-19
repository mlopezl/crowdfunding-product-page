import './index.css'
import Header from './components/header/Header'
import MainContainer from './components/Main/MainContainer'
import BackProjectModal from './components/Main/BackProjectModal'
import { useState } from 'react'

function App() {
  const [isHidden, setIsHidden] = useState(true);
  return (
    <>
    <div className='font-Commissioner relative'>
      <Header/>
      <MainContainer setIsHidden={setIsHidden}/>
    </div>
    <BackProjectModal isHidden={isHidden} setIsHidden={setIsHidden}/>
    </>
  )
}

export default App
