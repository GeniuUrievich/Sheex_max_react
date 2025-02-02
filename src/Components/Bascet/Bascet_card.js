import "./style.css"
import "./../../style.css"
import { useState } from "react"
import Bascet_list from "../../Bascet_List"

const Bascet_card = ({data, click}) => {
    const bascet = data

    const [hover, setHover] = useState(false)

    const mouse_Enter = () => {
        setHover(true)
    }

    const mouse_leave = () => {
        setHover(false)
    }

    const handleDel = () => {
        click(data.key)
    }

    return (
        <div className={hover ? "card_bascet hover_2" : "card_bascet"} onMouseEnter={mouse_Enter} onMouseLeave={mouse_leave}>
            <img className="card_bascet_photo" src={bascet.img}/>
            <div className="card_bascet_text">
                <h1 className="card_bascet_name">{bascet.name}</h1>
                <h2 className="card_bascet_price">{bascet.price}</h2>
            </div>
            <button className="card_delete" onClick={handleDel}></button>
        </div>
    )
}

export default Bascet_card