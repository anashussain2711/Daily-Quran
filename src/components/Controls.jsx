const Controls = ({ controls, setSelectedControl, showNextAyah, fetchRandomAyah, showCompleteRuku }) => {
    const select = (control) => {
        setSelectedControl(control)
        if (control === "ayah") {
            fetchRandomAyah();
        }
        else if (control === "next_ayah") {
            showNextAyah();
        }
        else if (control === "complete_ruku"){
            showCompleteRuku()
        }
    }
    return (
        <div className="controls">
            {
                controls.map((control, index) => {
                    return (
                        <div className={"text control " + control.key}
                            onClick={
                                () => {
                                    select(control.key)
                                }
                            }
                            key={index}>
                            {control.text}
                        </div>
                    )
                })
            }
        </div>
    );
}

export default Controls;