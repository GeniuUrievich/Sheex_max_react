import "./../Button_filter/style.css"
import "./../../style.css"

function Button_filter({children, onClick}){
    return(
        <div>
            <button onClick={onClick} className="button_filter">{children}</button>
        </div>
    )
}

export default Button_filter