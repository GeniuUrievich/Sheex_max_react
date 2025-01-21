import "./../../style.css"

function Button_link({children}){
    return(
        <div>
            <a className="button_link">{children}</a>
        </div>
    )
}

export default Button_link