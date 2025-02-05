import "./style.css"
import "./../../style.css"
import { useModal } from "../../ModalContext"
import { useState, useEffect } from "react"
import Zakaz_card from "./Zakaz_card"
import Button_link from "./../Button_link/Button_link"

const Zakaz = () => {
    const {closeModal, bascet, setBascet} = useModal()
    const [final_price, setFinal_price] = useState(0)
    const [active, setActive] = useState(false)
    const [name, setName] = useState("")
    const [phone, setPhone] = useState("")
    const [email, setEmail] = useState("")
    const [check_name, setCheck_name] = useState(true)
    const [check_phone, setCheck_phone] = useState(true)
    const [check_email, setCheck_email] = useState(true)


    const handleName = (event) => {
        setName(event.target.value)
    }

    const handlePhone = (event) => {
        setPhone(event.target.value)
    }

    const handleEmail = (event) => {
        setEmail(event.target.value)
    }

    let numb = "0000 00"
    const count = bascet.length

    const handleCLick = () => {
        setActive(!active)
    }

    const style = {
        width: "211px",
        marginTop: "29px",
        position: "relative",        
    }

    const handleDel = (key) => {
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

    const check_validation = () => {
        const emailRegex =
        /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        const regex = /^[0-9]+$/;
        if (name !== "") {
            setCheck_name(true)
        } else {setCheck_name(false)}

        if (phone !== "" && regex.test(phone)){setCheck_phone(true)}
        else {setCheck_phone(false)} 

        if (email !== "" && emailRegex.test(email)){
            setCheck_email(true)
        }else(setCheck_email(false))
        
    }

    useEffect(() => {
            let total=0;
            bascet.forEach((card) => total += parseInt(card.price.replace(/\D/g, '')))
            setFinal_price(total)
        }, [bascet])

    return (
        <div className="zakaz" onClick={closeModal}>
            <div className="zakaz_modal" onClick={(e) => e.stopPropagation()}>
                <div className="zakaz_modal_title">
                    <h1 className="zakaz_modal_name">Оформление заказа</h1>
                    <h2 className="zakaz_modal_number">{"Заказ " + numb}</h2>
                </div>
                <div className="zakaz_modal_bascet">
                    <div className="count_products_price">Товаров в заказе:<span>{count + " шт"}</span></div>
                    <div className="count_products_price">Общая сумма заказа:<span>{final_price +  " ₽"}</span></div>
                    <div className="spisok_open">Состав заказа<button onClick={handleCLick} className={active ? "spisok_open_btn" : "spisok_open_btn active"}/></div>
                    {active ? 
                    <ul>
                        <li>{bascet.map((card) => <Zakaz_card data={card} click={handleDel}></Zakaz_card>)}</li>
                    </ul> : null}
                </div>
                <div className="zakaz_modal_form">
                    <input placeholder="Ваше имя" className="zakaz_modal_input" value={name} onChange={handleName}></input>
                    {!check_name ? <h1 className="error_card">Имя не заполнено</h1>: null}
                    <input placeholder="Номер телефона" className="zakaz_modal_input" value={phone} onChange={handlePhone}></input>
                    {!check_phone ? <h1 className="error_card">Телефон не заполнен или заполен не верно</h1>: null}
                    <input placeholder="E-mail" className="zakaz_modal_input" value={email} onChange={handleEmail}></input>
                    {!check_email ? <h1 className="error_card">Почта не заполнена или заполена не верно</h1>: null}
                </div>
                <Button_link style={style} click={check_validation}>Оформить заказ</Button_link>
            </div>
        </div>
    )
}

export default Zakaz