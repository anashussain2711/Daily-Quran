import { useState } from "react";
import Controls from "../components/Controls";
import background from "../assets/images/background.png"

export default function Home() {
  const [controls, setControls] = useState([
    {
      key: "ayat",
      text: "Ayat"
    },
    {
      key: "ruku",
      text: "Ruku"
    }
  ])
  return (
    <section
    style={{
      backgroundImage: `url(${background})`
    }}
    className="home">
      <div className="inner">
        <Controls controls={controls} />
      </div>
    </section>
  );
}