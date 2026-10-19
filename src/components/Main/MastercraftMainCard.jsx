import logoMastercraft from "../../../public/images/logo-mastercraft.svg";
import iconBookmark from "../../../public/images/icon-bookmark.svg";

function MastercraftMainCard({setIsHidden}){
    return(
        <article className="relative bg-white rounded-sm w-70 h-60 p-8 m-auto -mt-10 shadow flex flex-col justify-center gap-4 sm:w-150 sm:-mt-30 md:-mt-20 lg:-mt-10">
            <img className="w-12 absolute -top-6 left-28 sm:left-70" src={logoMastercraft} alt="Logo Mastercraft" />
            <h1 className="text-center font-bold sm:text-xl">Mastercraft Bamboo Monitor Riser</h1>
            <p className="text-[11px] text-Gray-500 text-center sm:text-[13px]">A beautifully handcrafted monitor stand to reduce neck and eye strain.</p>
            <div className="flex justify-between gap-2">
                <button
                onClick={() => setIsHidden(false)}
                className="w-40 rounded-3xl bg-Green-400 text-white text-xs font-semibold tracking-wider p-2 sm:text-sm">Back this project</button>
                <div className="flex items-center relative">
                    <img className="w-12 z-2" src={iconBookmark} alt="Icon bookmark" />
                    <button
                    className="hidden rounded-2xl w-30 h-10 bg-gray-200 text-sm text-Gray-500 font-bold -ml-5 sm:block">Bookmark</button>
                </div>
            </div>
        </article>
    )
}

export default MastercraftMainCard;