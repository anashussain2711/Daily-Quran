import axios from "axios";
import { useEffect, useState } from "react";

const QuranFetcher = () => {
    const [ayah, SetAyah] = useState({

    });
    const fetchData = async () => {
        try {
            const response = await axios.get('https://api.quran.com/api/v4/quran/verses/uthmani?ruku_number=1');
            console.log(response.data.verses[0])
            SetAyah(response.data.verses[0])
        } catch (err) {
            console.log(err)
        }
    };
    useEffect(() => {
        fetchData();
    }, []);
    return ( 
        <h1>
            {ayah.text}
        </h1>
     );
}
 
export default QuranFetcher;