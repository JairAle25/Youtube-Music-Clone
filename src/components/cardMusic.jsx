import { useState } from "react";


const CardMusic = ({imgUrl,nameSong,artistName,artistsLinkYoutube}) => {
    const classNameRep='absolute top-[83%] left-[83%] transform -translate-x-1/2 -translate-y-1/2 bg-[#11090bd6] py-1 px-2 rounded-full text-2xl cursor-pointer transition-all duration-300 hover:bg-black hover:scale-110';

    const [iconPlayer, setIconPlayer] = useState(true);


    return ( 
        <>
            <div className="flex flex-col max-w-[15%] relative">
                <div className="relative" >
                    <img src={imgUrl} alt="" className="rounded cursor-pointer" onClick={()=> setIconPlayer(!iconPlayer)}/>
                    {iconPlayer ? <i className={`bi bi-play-fill ${classNameRep}`} onClick={()=> setIconPlayer(!iconPlayer)}></i> : <i className={`bi bi-pause-fill ${classNameRep}`} onClick={()=> setIconPlayer(!iconPlayer)}></i>}
                </div>
                <h2 className="text-base font-bold pt-2">{nameSong}</h2>
                <p className="text-base pt-1 text-[#b0b0b0]"><i className="bi bi-explicit-fill text-[#b3b3b3]"></i> Canción - <a href={artistsLinkYoutube} className="hover:underline" target="_blank">{artistName}</a></p>
            </div>
        </>
     );
}
 
export default CardMusic;

