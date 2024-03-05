import CardMusic from "./cardMusic";
import { songs } from "../constants/songs";


const Recommendations = () => {
    return ( 
        <>
            <section className="mt-16">
                <h1 className="text-5xl font-bold">Recomendaciones</h1>
                <div className="flex gap-7 mt-6">
                    {songs.map(song => <CardMusic imgUrl={song.urlImg} nameSong={song.nameSong} artistName={song.artistName} artistsLinkYoutube={song.artistsLinkYoutube}></CardMusic>)}
                </div>
            </section>
        </>
     );
}
 
export default Recommendations;