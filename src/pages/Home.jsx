import { useState } from "react";
import Controls from "../components/Controls";
// import QuranFetcher from "../components/QuranFetcher";
import background from "../assets/images/background.png"

export default function Home() {
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
  return (
    <section
    style={{
      backgroundImage: `url(${background})`
    }}
    className="home">
      <div className="inner">
        {/* <QuranFetcher selectedControl={selectedControl}/> */}
        <Controls controls={controls} setSelectedControl={setSelectedControl} />
      </div>
    </section>
  );
}