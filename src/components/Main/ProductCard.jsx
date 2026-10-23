function ProductCard({productId,
  onSelectReward, product, pledge, description, amountLeft}) {
  return (
    <article
      className={`bg-white border-1 border-gray-200 rounded-lg w-55 p-6 m-auto flex flex-col gap-2 sm:w-135 sm:gap-6
        ${amountLeft > 0 ? "opacity-100" : "opacity-50"}`}
    >
        <header className="flex flex-col gap-2 sm:flex-row sm:justify-between">
          <h3 className="text-[11px] font-bold sm:text-sm">{product}</h3>
          <p className="text-[11px] text-Green-400 font-bold sm:text-sm">
            Pledge {pledge} or more
          </p>
        </header>

      <p className="text-[11px]/5 text-Gray-500 sm:text-sm">
        {description}
      </p>
      <footer className="flex flex-col gap-2 sm:flex-row sm:justify-between">
        <p className="text-[11px]/5 text-Gray-500 flex gap-2 items-center sm:text-[13px]">
          <span className="font-bold text-2xl text-Black">{amountLeft}</span>{" "}
          left
        </p>
        <button
        onClick={() => onSelectReward(productId)}
          disabled={Number(amountLeft) === 0}
          className={`w-30 text-[11px] p-2 text-white rounded-2xl sm:text-[13px] transition duration-300 hover:bg-Green-700
                ${amountLeft > 0 ? "bg-Green-400" : "bg-Gray-500"}`}
        >
          {amountLeft > 0 ? "Select Reward" : "Out of Stock"}
        </button>
      </footer>
    </article>
  );
}

export default ProductCard;
