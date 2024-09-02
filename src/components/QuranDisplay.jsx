import { Ayah } from "./Ayah";
import Starter from "../components/Starter";


const QuranDisplay = ({ ayah, display, selectedControl }) => {

    return (
        <div className="ayahs display">
            <Starter started={selectedControl}/>
            {display.map((item, index) => (
                <Ayah key={index} text={item.text_uthmani} translation={item.translation} ayahKey={item.verse_key} />
            ))}
        </div>
    );
}

export default QuranDisplay;