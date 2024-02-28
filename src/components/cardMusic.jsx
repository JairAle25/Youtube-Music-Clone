import { useState } from "react";

const CardMusic = () => {
    return ( 
        <>
            <div className="flex flex-col max-w-[15%] relative">
                <div className="relative">
                    <img src="https://pbs.twimg.com/media/FQQolnsXEAIj4Un.jpg" alt="" className="rounded" />
                    <i class="bi bi-play-fill absolute top-[83%] left-[83%] transform -translate-x-1/2 -translate-y-1/2 bg-[#11090bd6] py-1 px-2 rounded-full text-2xl cursor-pointer transition-all duration-300 hover:bg-black hover:scale-110"></i>
                </div>
                <h2 className="text-lg font-bold pt-2">BIEN O MAL</h2>
                <p className="text-base"><i class="bi bi-explicit-fill text-[#b3b3b3]"></i> Canción - <a href="" className="hover:underline">Trueno</a></p>
            </div>
        </>
     );
}
 
export default CardMusic;

