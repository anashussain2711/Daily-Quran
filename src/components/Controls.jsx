const Controls = ({controls}) => {
    
    return ( 
        <div className="controls">
            {
                controls.map((control, index)=>{
                    return(
                        <div className={ "text control " + control.key} key={index}>
                            {control.text}
                        </div>
                    )
                })
            }
        </div>
    );
}
 
export default Controls;