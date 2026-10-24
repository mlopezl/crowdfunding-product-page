import logoMastercraft from "../../../public/images/logo-mastercraft.svg";
import iconBookmark from "../../../public/images/icon-bookmark.svg";
import iconBookmarkGreen from "../../../public/images/icon-bookmark-green.svg";
import { useState } from "react";

function MastercraftMainCard({onOpenProject}){
    const [isBookmarked, setIsBookmaked] = useState(false);
    return(
        <article className="relative bg-white rounded-sm w-70 h-60 p-8 m-auto -mt-10 shadow flex flex-col justify-center gap-4 sm:w-150 sm:-mt-30 md:-mt-20 lg:-mt-10">
            <img className="w-12 absolute -top-6 left-28 sm:left-70" src={logoMastercraft} alt="Logo Mastercraft" />
            <h1 className="text-center font-bold sm:text-xl">Mastercraft Bamboo Monitor Riser</h1>
            <p className="text-[11px] text-Gray-500 text-center sm:text-sm">A beautifully handcrafted monitor stand to reduce neck and eye strain.</p>
            <div className="flex justify-between gap-2">
                <button
                onClick={() => onOpenProject()}
                className="w-40 rounded-3xl bg-Green-400 text-white text-xs font-semibold tracking-wider p-2 sm:text-sm transition duration-300 hover:bg-Green-700 cursor-pointer">Back this project</button>
               <button
  type="button"
  onClick={() => setIsBookmaked(prev => !prev)}
  aria-pressed={isBookmarked}
  aria-label={
    isBookmarked ? "Quitar de favoritos" : "Guardar en favoritos"
  }
  className={`flex items-center rounded-3xl cursor-pointer transition duration-300 sm:pr-4 sm:hover:brightness-105
    ${isBookmarked
      ? "text-Green-700 sm:bg-green-100"
      : "text-Gray-500 sm:bg-gray-200"
    }`}
>
  <img
    className="w-12 h-12 shrink-0"
    src={isBookmarked ? iconBookmarkGreen : iconBookmark}
    alt=""
  />
  <span className="hidden sm:block pl-2 text-sm font-bold">
    {isBookmarked ? "Bookmarked" : "Bookmark"}
  </span>
</button>
            </div>
        </article>
    )
}

export default MastercraftMainCard;