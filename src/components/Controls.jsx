const Controls = ({controls, setSelectedControl}) => {
    const select = (control) => {
        setSelectedControl(control)
    }
    return ( 
        <div className="controls">
            {
                controls.map((control, index)=>{
                    return(
                        <div className={ "text control " + control.key}
                        onClick={ () => select(control.key) } 
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