import image from "./../../Image/Смотреть товар.png"
import image1 from "./../../Image/Добавить в корзину.png"
import "../Card/style.css"
import "../../style.css"
import { useState } from "react"
import { useModal } from "../../ModalContext"

function Card({data}){

    const [active, setActive] = useState(false)
    const {openModal,bascet,setBascet} = useModal()


    const mouse_Enter = () => {
        setActive(true)
    }

    const mouse_leave = () => {
        setActive(false)
    }

    const handleOpenModal = () => {
        openModal("card", data);
      };

    const add_card = () => {
        setBascet([...bascet, data])
    }

    return (
        <>
        <div className="card">
            <img className={active ? "image_card hover" :"image_card"} src={data.img} onMouseEnter={mouse_Enter} onMouseLeave={mouse_leave}/>
            {active ?
            <div className="card_images_hover" onMouseEnter={mouse_Enter} onMouseLeave={mouse_leave} >
                <img className="card_image_hover" src={image}  onClick={handleOpenModal}></img>
                <img className="card_image_hover" src={image1} onClick={add_card}></img>
            </div> : null}
            <h1 className="name_card">{data.name}</h1>
            <h2 className="price_card">{data.price}</h2>
        </div>
        </>
    )
}

export default Card