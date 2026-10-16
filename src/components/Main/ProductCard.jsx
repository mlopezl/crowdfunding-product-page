function ProductCard({product, pledge, description, amountLeft}){
    return(
        <article className={`bg-white border-1 border-gray-200 rounded-sm w-55 p-4 m-auto flex flex-col gap-2 sm:w-135 sm:gap-4
        ${amountLeft > 0 ? "opacity-100" : "opacity-50"}`}>
            <header className="flex flex-col gap-2 sm:flex-row sm:justify-between">
                 <h3 className="text-[11px] font-bold sm:text-[13px]">{product}</h3>
            <p className="text-[11px] text-Green-400 font-bold sm:text-[13px]">Pledge {pledge} or more</p>
            </header>
           
            <p className="text-[11px]/5 text-Gray-500 sm:text-[13px]">{description}</p>
            <footer className="flex flex-col gap-2 sm:flex-row sm:justify-between">
                 <p className="text-[11px]/5 text-Gray-500 flex gap-2 items-center sm:text-[13px]"><span className="font-bold text-2xl text-Black">{amountLeft}</span> left</p>
            <button className={`w-30 text-[11px] p-2 text-white rounded-2xl sm:text-[13px]
                ${amountLeft > 0 ? "bg-Green-400" : "bg-Gray-500"}`}>
                {amountLeft > 0 ? "Select Reward" : "Out of Stock"}</button>
            </footer>
        </article>
    )
}

export default ProductCard;