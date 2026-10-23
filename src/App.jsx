import { useState } from 'react'
import './index.css'
import Header from './components/header/Header'
import MainContainer from './components/Main/MainContainer'
import BackProjectModal from './components/Main/BackProjectModal'
import CompletedModal from './components/Main/CompletedModal'

const MINIMUM_PLEDGES = {
  noreward: 1,
  bamboo: 25,
  black: 75,
  mahogany: 200,
}

function App() {
  const [isHidden, setIsHidden] = useState(true)
  const [isCompletedOpen, setIsCompletedOpen] = useState(false)
  const [selectedProduct, setSelectedProduct] = useState(null)
  const [totalAmount, setTotalAmount] = useState(89914)
  const [totalBackers, setTotalBackers] = useState(5007)
  const [inventory, setInventory] = useState({
    bamboo: 101,
    black: 64,
    mahogany: 0,
  })

  const openProject = (productId = null) => {
    setSelectedProduct(productId)
    setIsHidden(false)
  }

  const handleContinue = (amount) => {
    const minimum = MINIMUM_PLEDGES[selectedProduct]
    const isReward = selectedProduct !== 'noreward'

    if (!Number.isInteger(amount) || !minimum || amount < minimum) {
      return
    }

    if (isReward && inventory[selectedProduct] <= 0) {
      return
    }

    setTotalAmount(current => current + amount)
    setTotalBackers(current => current + 1)

    if (isReward) {
      setInventory(current => ({
        ...current,
        [selectedProduct]: current[selectedProduct] - 1,
      }))
    }

    setSelectedProduct(null)
    setIsHidden(true)
    setIsCompletedOpen(true)
  }

  return (
    <>
      <div className="font-Commissioner relative">
        <Header />
        <MainContainer
          onOpenProject={openProject}
          totalAmount={totalAmount}
          totalBackers={totalBackers}
          inventory={inventory}
        />
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
        selectedProduct={selectedProduct}
        setSelectedProduct={setSelectedProduct}
        minimumPledges={MINIMUM_PLEDGES}
        inventory={inventory}
      />

      {isCompletedOpen && (
        <CompletedModal onClose={() => setIsCompletedOpen(false)} />
      )}
    </>
  )
}

export default App