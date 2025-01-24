import "./../../style.css"

function Button_link({children, style}){
    return(
        <div>
            <a className="button_link" style={style}>{children}</a>
        </div>
    )
}

export default Button_link