import "./style.css"
import "./../../style.css"
import { useModal } from "../../ModalContext"
import { useEffect, useState } from "react";
import Bascet_card from "./Bascet_card";
import Button_link from "../Button_link/Button_link";

const Bascet = () => {
    const {openModal, closeModal, bascet=[], setBascet} = useModal();
    const [final_price, setFinal_price] = useState(0)

    const datacount = bascet.length > 0

    const style = {
        marginLeft: "200px",
        marginTop: "20px"
    }

    useEffect(() => {
    }, [bascet])

    const delete_card = (key) => {
        setBascet((prev) => {
           const index = prev.findIndex((item) => item.key === key)
           if (index !== -1){
            const newBascet = [...prev]
            newBascet.splice(index, 1)
            return newBascet
           } 
           return prev
        })
    }


    useEffect(() => {
        let total=0;
        bascet.forEach((card) => total += parseInt(card.price.replace(/\D/g, '')))
        setFinal_price(total)
    }, [bascet])

    const handleOpenModal = () => {
        openModal("zakaz", bascet)
    }

    if (!bascet) return null; 
    return(
        <div className="bascet" onClick={closeModal}>
            <div className="bascet_content" onClick={(e) => e.stopPropagation()}>
                <div className="bascet_block">
                    {datacount ? bascet.map((card) => {return <Bascet_card data={card} click={delete_card}/>}) : <h1 className="bascet_null">Корзина пуста</h1>}
                </div>
                { datacount ? 
                    <div className="bascet_block_2">
                        <div className="bascet_price">
                            <h1 className="bascet_price_title">Итого:</h1>
                            <h2 className="bascet_price_body">{final_price}</h2>
                        </div>
                        <Button_link style={style} click={handleOpenModal}>Перейти к заказу</Button_link>
                    </div> : null 
                }
            </div>
        </div>
    )
}

export default Bascet