import "./../../style.css"

function Button_link({children, style, click}){
    return(
        <button className="button_link" onClick={click} style={style}>{children}</button>
    )
}

export default Button_link