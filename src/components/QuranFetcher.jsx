import axios from "axios";
import { useEffect, useState } from "react";
import $ from "jquery";

const QuranFetcher = ({ selectedControl, setControls }) => {
    const [ruku, setRuku] = useState({});
    const [ayah, setAyah] = useState({});
    const [ayahIndex, setAyahIndex] = useState(null);
    const [ayahDisplay, setAyahDisplay] = useState([]);

    const fetchRandomAyah = async () => {
        
        //generate random ruku 
        const randomRukuNumber = Math.floor(Math.random() * 558) + 1;

        //change controls animation
        $(".controls").fadeOut(1000, function(){
            setControls([
                {
                    key: "next_ayah",
                    text: "Next Ayah"
                },
                {
                    key: "complete_ruku",
                    text: "Complete Ruku"
                }
            ]);
            $(".controls").fadeIn(1000);
        });

        //getting the random ruku
        axios.get(`https://api.quran.com/api/v4/quran/verses/uthmani?ruku_number=${randomRukuNumber}`)
        .then(response => {
            const verses = response.data.verses;
            setRuku(verses);
            let localRandomAyahIndex = Math.floor(Math.random() * verses.length)
            setAyahIndex(localRandomAyahIndex);
            const randomAyah = verses[localRandomAyahIndex];
            setAyah(randomAyah);
            setAyahDisplay([...ayahDisplay, randomAyah])
        })
        .catch(err => {
            console.log(err);
        });
    };
    const showNextAyah = function(){
        setAyah(ruku[ayahIndex + 1]);
        setAyahDisplay([...ayahDisplay, ayah])
    }
    useEffect(() => {
        if (selectedControl === "ayah") {
            fetchRandomAyah();
        }
        if (selectedControl === "next_ayah") {
            showNextAyah();
        }
    }, [selectedControl]);
    return (
        <div className="ayahs">
            {ayahDisplay.map((ayah, index) => (
                <div key={index} className="ayah text">
                    {ayah.verse_key}
                </div>
            ))}
        </div>
    );
}

export default QuranFetcher;