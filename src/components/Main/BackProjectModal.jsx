import closeIcon from '../../../public/images/icon-close-menu-dark.svg'
import BackProductCard from './BackProductCard';

function BackProjectModal({isHidden, setIsHidden}){
    return(
        <form className={`absolute w-[90%] max-w-150 shadow bg-white top-30 left-1/2 -translate-x-1/2 p-6 flex flex-col gap-8 rounded-xl z-5
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
            <BackProductCard product={"Pledge with no reward"} description={"Choose to support us without a reward if you simply believe in our project. As a backer, you will be signed up to receive product updates via email."} amountLeft={1} noReward={true}/>
            <BackProductCard product={"Bamboo Stand"} pledge={"$25"} description={"You get an ergonomic stand made of natural bamboo. You've helped us launch our promotional campaing, and you'll be added to a special Backer member list."} amountLeft={"101"} />
            <BackProductCard product={"Black edition Stand"} pledge={"$75"} description={"You get a Black Special Edition computer stand and a personal thank you. You'll be added to our Backer member list. Shipping is included."} amountLeft={"64"}/>
            <BackProductCard product={"Mahogany Special Edition"} pledge={"$200"} description={"You get two Special Edition Mahogamy stands, a Backer T-Shirt, and a personal thank you. You'll be added to our Backer member list. Shipping is included."} amountLeft={"0"}/>
        </form>
    )
}

export default BackProjectModal;