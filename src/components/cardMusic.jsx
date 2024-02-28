import { useState } from "react";

const CardMusic = () => {
    return ( 
        <>
            <div className="flex flex-col max-w-[15%]">
                <div className="">
                    <img src="https://pbs.twimg.com/media/FQQolnsXEAIj4Un.jpg" alt="" className="rounded" />
                    <i class="bi bi-play-fill"></i>
                </div>
                <h2 className="text-lg font-bold pt-2">BIEN O MAL</h2>
                <p className="text-base"><i class="bi bi-explicit-fill text-[#b3b3b3]"></i> Canción - <a href="">Trueno</a></p>
            </div>
        </>
     );
}
 
export default CardMusic;

