import completedIcon from '../../../public/images/icon-check.svg';

function CompletedModal(){
    return(
        <div className='bg-white text-black absolute left-1/2 -translate-x-1/2 -top-20 p-6 flex flex-col items-center text-center rounded-xl shadow gap-4 w-[90%] z-10 max-w-100'>
            <img className='w-15' src={completedIcon} alt="Check icon" />
            <p className='font-bold sm:text-xl'>Thank for your support!</p>
            <p className="text-[13px] text-Gray-500 text-center sm:text-sm">Your pledge brings us one step closer to sharing Mastercraft Bamboo Monitor Riser worldwide. You will get an email once our campaign is completed.</p>
            <button className='bg-Green-400 w-20 rounded-3xl p-2 text-white text-[13px] mb-5 transition duration-300 hover:bg-Green-700'>Got it</button>
        </div>
    )
}

export default CompletedModal;