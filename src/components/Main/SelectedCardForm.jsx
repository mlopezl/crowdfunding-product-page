function SelectedCardForm({onContinue}){
    return(
        <div className="min-w-59 -ml-6 p-4 flex flex-col gap-4 -mt-9 border-t-1 border-t-gray-300 flex flex-col justify-center items-center sm:flex-row sm:-mt-0 sm:w-135 sm:h-15 sm:pt-10 sm:justify-between">
            <p className="text-Gray-500 text-[11px] sm:text-sm">Enter your pledge</p>
            <div className="flex gap-2 justify-center">
                <div className="w-18 p-2 gap-1 rounded-3xl flex items-center border-1 border-gray-300 hover:border-Green-400 transition duration-300 has-[:focus]:border-Green-400">
                    $
                    <input className="w-10 outline-none font-bold" type="number" />
                </div>
                <button
                type="button"
                onClick={onContinue}
                className="w-23 p-2 bg-Green-400 text-white text-sm rounded-3xl transition duration-300 hover:bg-Green-700">
                    Continue
                </button>
            </div>
        </div>
    )
}

export default SelectedCardForm;