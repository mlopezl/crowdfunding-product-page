function BackProductCard({ product, pledge, description, amountLeft, noReward}) {
  return (
    <article
      className={`bg-white border-1 border-gray-200 rounded-sm max-w-[100%] p-4 flex flex-col gap-6 sm:w-135 sm:gap-4 has-[:checked]:border-Green-400
        ${amountLeft > 0 ? "opacity-100" : "opacity-50"}`}
    >
      <div className="flex gap-2 items-center sm:gap-4">
          <label className="cursor-pointer w-6 h-6 rounded-full border-1 border-gray-400 flex justify-center items-center has-[:checked]:border-Green-400">
            <input
              type="radio"
              name="custom-radio"
              className="appearance-none w-3 h-3 rounded-full checked:border-none checked:bg-Green-400"
            />
          </label>
        <header className="flex flex-col gap-1 sm:flex-row sm:justify-between md:gap-4">
          <h3 className="text-[11px] font-bold sm:text-[13px]">{product}</h3>
          {
            noReward ? null : <p className="text-[11px] text-Green-400 font-bold sm:text-[13px]">
            Pledge {pledge} or more
          </p>
          }
        </header>
        <div className="hidden flex flex-col gap-2 sm:justify-self-end sm:flex-row sm:justify-between md:block">
        {
            noReward ? null : <p className="text-[11px]/5 text-Gray-500 flex gap-2 items-center sm:text-[13px]">
          <span className="font-bold text-2xl text-Black">{amountLeft}</span>{" "}
          left
        </p>
        }
      </div>
      </div>

      <p className="text-[11px]/5 text-Gray-500 sm:text-[13px]">
        {description}
      </p>
      <footer className="flex flex-col gap-2 sm:flex-row sm:justify-between md:hidden">
        {
            noReward ? null : <p className="text-[11px]/5 text-Gray-500 flex gap-2 items-center sm:text-[13px]">
          <span className="font-bold text-2xl text-Black">{amountLeft}</span>{" "}
          left
        </p>
        }
      </footer>
    </article>
  );
}

export default BackProductCard;
