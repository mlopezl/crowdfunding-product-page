import { useState, useEffect } from "react";

function BackersInfoCard({ amount }) {
  const value = Number(amount);
  const safeAmount = Number.isFinite(value) ? Math.max(0, value) : 0;
  const percentage = Math.min(100, (safeAmount / 100000) * 100);

  return (
    <article className="relative bg-white rounded-sm w-70 h-80 p-8 m-auto mb-100 shadow flex flex-col justify-center gap-4">
      <div className="flex flex-col gap-2">
        <p className="text-center text-2xl font-bold">
          ${safeAmount.toLocaleString()}
        </p>
        <p className="text-[11px] text-gray-500 text-center">
          of $100,000 backed
        </p>
      </div>

      <div className="flex flex-col gap-2">
        <p className="text-center text-2xl font-bold">5007</p>
        <p className="text-[11px] text-gray-500 text-center">total backers</p>
      </div>

      <div className="flex flex-col gap-2">
        <p className="text-center text-2xl font-bold">56</p>
        <p className="text-[11px] text-gray-500 text-center">days left</p>
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