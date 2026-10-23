function BackersInfoCard({ amount, backers }) {
  const value = Number(amount);
  const safeAmount = Number.isFinite(value) ? Math.max(0, value) : 0;
  const percentage = Math.min(100, (safeAmount / 100000) * 100);

  return (
    <article className="relative bg-white rounded-sm w-70 h-80 p-8 m-auto shadow flex flex-col justify-center gap-2 sm:w-150 sm:flex-row sm:flex-wrap ">
      <div className="w-30 m-auto flex flex-col p-2 gap-2 border-b-1 border-gray-200 sm:w-42 sm:border-b-0 sm:border-r-1">
        <p className="text-center text-2xl font-bold sm:text-[25px]">
          ${safeAmount.toLocaleString()}
        </p>
        <p className="text-[11px] text-gray-500 text-center sm:text-sm">
          of $100,000 backed
        </p>
      </div>

      <div className="w-30 m-auto flex flex-col p-2 gap-2 border-b border-b-1 border-gray-200 sm:w-42 sm:border-b-0 sm:border-r-1">
        <p className="text-center text-2xl font-bold sm:text-[25px]">{backers.toLocaleString()}</p>
        <p className="text-[11px] text-gray-500 text-center sm:text-sm">total backers</p>
      </div>

      <div className="w-30 m-auto flex flex-col p-2 gap-2 sm:w-42">
        <p className="text-center text-2xl font-bold sm:text-[25px]">56</p>
        <p className="text-[11px] text-gray-500 text-center sm:text-sm">days left</p>
      </div>

      <div className="w-full h-2 rounded bg-gray-200">
        <div
          className="h-full rounded bg-Green-400"
          style={{ width: `${percentage}%` }}
        />
      </div>
    </article>
  );
}

export default BackersInfoCard;