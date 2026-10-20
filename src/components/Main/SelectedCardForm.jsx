function SelectedCardForm(){
    return(
        <div className="min-w-59 -ml-6 p-4 flex flex-col gap-4 -mt-9 border-t-1 border-t-gray-300 flex flex-col justify-center items-center sm:flex-row sm:-mt-0 sm:w-135 sm:h-15 sm:pt-10 sm:justify-between">
            <p className="text-Gray-500 text-[11px]">Enter your pledge</p>
            <div className="flex gap-2 justify-center">
                <div className="w-18 p-2 gap-1 rounded-3xl flex items-center border-1 border-gray-300">
                    $
                    <input className="w-10 outline-none font-bold" type="number" />
                </div>
                <button className="w-23 p-2 bg-Green-400 text-white text-sm rounded-3xl">
                    Continue
                </button>
            </div>
        </div>
    )
}

export default SelectedCardForm;