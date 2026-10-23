import './index.css'
import Header from './components/header/Header'
import MainContainer from './components/Main/MainContainer'
import BackProjectModal from './components/Main/BackProjectModal'
import CompletedModal from './components/Main/CompletedModal'
import { useState } from 'react'

function App() {
  const [isHidden, setIsHidden] = useState(true)
  const [isCompletedOpen, setIsCompletedOpen] = useState(false)

  const handleContinue = () => {
    setIsHidden(true)
    setIsCompletedOpen(true)
  }

  return (
    <>
      <div className="font-Commissioner relative">
        <Header />
        <MainContainer setIsHidden={setIsHidden} />
      </div>

      {(!isHidden || isCompletedOpen) && (
        <div
          className="fixed inset-0 bg-black/50 z-[40]"
          onClick={() => {
            setIsHidden(true)
            setIsCompletedOpen(false)
          }}
        />
      )}

      <BackProjectModal
        isHidden={isHidden}
        setIsHidden={setIsHidden}
        onContinue={handleContinue}
      />

      {isCompletedOpen && (
        <CompletedModal onClose={() => setIsCompletedOpen(false)} />
      )}
    </>
  )
}

export default App