import { useState } from "react";
import Controls from "../components/Controls";
import QuranDisplay from "../components/QuranDisplay";
import background from "../assets/images/background.png"
import axios from "axios";
import $ from "jquery";

export default function Home() {
  const [ruku, setRuku] = useState({});
  const [ayah, setAyah] = useState({});
  const [display, setDisplay] = useState([]);
  const [controls, setControls] = useState([
    {
      key: "ayah",
      text: "Ayah"
    },
    {
      key: "ruku",
      text: "Ruku"
    }
  ])
  const [selectedControl, setSelectedControl] = useState("");

  const changeControls = (newControls) => {
    // Change controls animation
    $(".controls").fadeOut(1000, function () {
      setControls(
        newControls.map((control) => ({
          key: control.key,
          text: control.text,
        }))
      );
      $(".controls").fadeIn(1000);
    });
  };
  const showCompleteRuku = () => {
    if (display) {
      $(".display").fadeOut(1000, function () {
        setDisplay(() => ruku);
        $(".display").fadeIn(1000);
      });
    } else {
      //fetch random ruku
    }
    changeControls([
      { key: "next_ruku", text: "Next Ruku" }
    ]);
  }
  const fetchRandomAyah = async () => {
    //change controls animation
    changeControls([
      { key: "next_ayah", text: "Next Ayah" },
      { key: "complete_ruku", text: "Complete Ruku" }
    ]);
    try {
      // Generate random ruku
      const randomRukuNumber = Math.floor(Math.random() * 558) + 1;

      // Get the random ruku (Arabic text)
      const arabicResponse = await axios.get(`https://api.quran.com/api/v4/quran/verses/uthmani?ruku_number=${randomRukuNumber}`);
      let ruku = arabicResponse.data.verses;
      const rukuLength = ruku.length;
      const randomIndex = Math.floor(Math.random() * rukuLength);

      // Get the corresponding translations for the entire ruku
      const translationResponse = await axios.get(`https://api.quran.com/api/v4/quran/translations/131?ruku_number=${randomRukuNumber}`);
      const translations = translationResponse.data.translations;

      // Combine each ayah with its corresponding translation based on the index
      ruku = ruku.map((ayah, index) => ({
        ...ayah,
        translation: translations[index] ? translations[index].text : "Translation not available",
        indexInRuku: index,
      }));

      // Set the ayah and display states
      const selectedAyah = ruku[randomIndex]; // Select the ayah using the updated ruku

      setRuku(ruku);
      setAyah(selectedAyah);
      setDisplay((prevDisplay) => [...prevDisplay, selectedAyah]);
    } catch (err) {
      console.log(err);
    }
  };
  const showNextAyah = () => {
    if (ayah.indexInRuku !== ruku.length - 1) {
      setAyah({
        ...ruku[ayah.indexInRuku + 1],
        translation: ruku[ayah.indexInRuku + 1].translation,
        indexInRuku: ayah.indexInRuku + 1,
      });
      setDisplay((prevDisplay) => [
        ...prevDisplay,
        {
          ...ruku[ayah.indexInRuku + 1],
          indexInRuku: ayah.indexInRuku + 1,
        }
      ]);
      if (ayah.indexInRuku + 1 == ruku.length - 1) {
        console.log("end of ruku")
        changeControls([
          { key: "next_ruku", text: "Next Ruku" }
        ]);
      }
    }
  }
  return (
    <section
      style={{
        backgroundImage: `url(${background})`
      }}
      className="home">
      <div className="inner">
        <QuranDisplay
          ayah={ayah}
          display={display}
          selectedControl={selectedControl}
        />
        <Controls
          controls={controls}
          setSelectedControl={setSelectedControl}
          fetchRandomAyah={fetchRandomAyah}
          showNextAyah={showNextAyah}
          showCompleteRuku={showCompleteRuku}
        />
      </div>
    </section>
  );
}