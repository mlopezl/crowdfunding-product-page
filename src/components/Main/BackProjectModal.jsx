import closeIcon from '../../../public/images/icon-close-menu-dark.svg'
import BackProductCard from './BackProductCard';
import { useEffect, useRef } from 'react'

function BackProjectModal({isHidden, setIsHidden, onContinue, selectedProduct, setSelectedProduct,  minimumPledges, inventory}){
    const modalRef = useRef(null)

useEffect(() => {
  if (isHidden || !selectedProduct) return

  const modal = modalRef.current
  const card = modal?.querySelector(
    `[data-product-id="${selectedProduct}"]`
  )

  if (!modal || !card) return

  const modalRect = modal.getBoundingClientRect()
  const cardRect = card.getBoundingClientRect()

  const target =
    modal.scrollTop +
    cardRect.top -
    modalRect.top -
    (modal.clientHeight - cardRect.height) / 2

  modal.scrollTo({
    top: target,
    behavior: 'smooth',
  })
}, [isHidden, selectedProduct])
    return(
        <form ref={modalRef} className={`fixed w-[90%] max-w-150 shadow bg-white top-6 left-1/2
        -translate-x-1/2 p-6 flex flex-col gap-8 rounded-xl z-[50]
        max-h-[calc(100vh-3rem)] overflow-y-auto hide-scrollbar
        ${isHidden ? "hidden" : "block"}`}>
            <header className='flex flex-col gap-4'>
                <div className='w-full h-10 flex justify-between items-center'>
                    <h2 className="text-center font-bold sm:text-xl">Back this project</h2>
                    <img
                    onClick={() => setIsHidden(true)}
                    className='w-4 h-4 cursor-pointer' src={closeIcon} alt="close icon" />
                </div>
                <p className="text-[12px] text-Gray-500 text-center sm:text-[14px]">Want to support us in bringing Mastercraft Bamboo Monitor Riser out in the world?</p>
            </header>
            <BackProductCard minPledge={minimumPledges.noreward}  productId="noreward" product={"Pledge with no reward"} description={"Choose to support us without a reward if you simply believe in our project. As a backer, you will be signed up to receive product updates via email."} amountLeft={1} noReward={true} onContinue={onContinue} isSelected={selectedProduct === 'noreward'} onSelect={() => setSelectedProduct('noreward')}/>
            <BackProductCard minPledge={minimumPledges.bamboo} productId="bamboo" product={"Bamboo Stand"} pledge={"$25"} description={"You get an ergonomic stand made of natural bamboo. You've helped us launch our promotional campaing, and you'll be added to a special Backer member list."} amountLeft={inventory.bamboo} onContinue={onContinue} 
            isSelected={selectedProduct === 'bamboo'} onSelect={() => setSelectedProduct('bamboo')}/>
            <BackProductCard minPledge={minimumPledges.black} productId="black" product={"Black edition Stand"} pledge={"$75"} description={"You get a Black Special Edition computer stand and a personal thank you. You'll be added to our Backer member list. Shipping is included."} amountLeft={inventory.black} onContinue={onContinue}
            isSelected={selectedProduct === 'black'} onSelect={() => setSelectedProduct('black')}/>
            <BackProductCard minPledge={minimumPledges.mahogany} productId="mahogany" product={"Mahogany Special Edition"} pledge={"$200"} description={"You get two Special Edition Mahogamy stands, a Backer T-Shirt, and a personal thank you. You'll be added to our Backer member list. Shipping is included."} amountLeft={inventory.mahogany} onContinue={onContinue}
            isSelected={selectedProduct === 'mahogany'} onSelect={() => setSelectedProduct('mahogany')}/>
        </form>
    )
}

export default BackProjectModal;