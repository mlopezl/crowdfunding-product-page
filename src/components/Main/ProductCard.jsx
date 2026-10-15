function ProductCard({product, pledge, description, amountLeft}){
    return(
        <article className={`bg-white border-1 border-gray-200 rounded-sm w-55 p-4 m-auto flex flex-col gap-2
        ${amountLeft > 0 ? "opacity-100" : "opacity-50"}`}>
            <h3 className="text-[11px] font-bold">{product}</h3>
            <p className="text-[11px] text-Green-400 font-bold">Pledge {pledge} or more</p>
            <p className="text-[11px]/5 text-Gray-500">{description}</p>
            <p className="text-[11px]/5 text-Gray-500 flex gap-2 items-center"><span className="font-bold text-2xl text-Black">{amountLeft}</span> left</p>
            <button className={`w-30 text-[11px] p-2 text-white rounded-2xl
                ${amountLeft > 0 ? "bg-Green-400" : "bg-Gray-500"}`}>
                {amountLeft > 0 ? "Select Reward" : "Out of Stock"}</button>
        </article>
    )
}

export default ProductCard;