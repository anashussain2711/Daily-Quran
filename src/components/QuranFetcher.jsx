import axios from "axios";
import { useEffect, useState } from "react";

const QuranFetcher = ({selectedControl}) => {
    const [ruku, setRuku] = useState({});
    const fetchRandomAyah = async () => {
        try {
            const response = await axios.get('https://api.quran.com/api/v4/quran/verses/uthmani?ruku_number=1');
            console.log(response.data.verses[0])
            SetAyah(response.data.verses[0])
        } catch (err) {
            console.log(err)
        }
    };
    useEffect(() => {
        if(selectedControl === "ayah"){
            fetchRandomAyah();
        }
    }, [selectedControl]);
    return ( 
        <h1>
            {ayah.text}
        </h1>
     );
}
 
export default QuranFetcher;