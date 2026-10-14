import logoMastercraft from "../../../public/images/logo-mastercraft.svg";
import iconBookmark from "../../../public/images/icon-bookmark.svg";

function MastercraftMainCard(){
    return(
        <article className="relative bg-white rounded-sm w-60 h-60 p-4 m-auto -mt-10 shadow flex flex-col justify-center gap-4">
            <img className="w-12 absolute -top-6 left-24" src={logoMastercraft} alt="Logo Mastercraft" />
            <h1 className="text-center font-bold">Mastercraft Bamboo Monitor Riser</h1>
            <p className="text-[11px] text-Gray-500 text-center">A beautifully handcrafted monitor stand to reduce neck and eye strain.</p>
            <div className="flex justify-between gap-2">
                <button className="w-40 rounded-3xl bg-Green-400 text-white text-xs font-semibold tracking-wider p-2">Back this project</button>
                <img className="w-12" src={iconBookmark} alt="Icon bookmark" />
            </div>
        </article>
    )
}

export default MastercraftMainCard;