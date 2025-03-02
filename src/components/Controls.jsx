const Controls = ({ closeStarter, refetchAyah, refetchRuku, fixed = false }) => {

    function onAyahClick() {
        closeStarter()
        refetchAyah()
    }

    function onRukuClick() {
        closeStarter()
        refetchRuku()
    }

    return (
        <div className="controls" style={
            fixed
                ?
                {
                    position: "absolute",
                    bottom: 0,
                    left: "50%",
                    transform: "translateX(-50%)",
                }
                :
                {}}>
            <div className="control text medium" onClick={onAyahClick} >Ayah</div>
            <div className="control text medium" onClick={onRukuClick} >Ruku</div>
        </div>
    );
}

export default Controls;