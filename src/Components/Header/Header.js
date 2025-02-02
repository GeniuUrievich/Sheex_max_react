import "./../Header/style.css"
import "./../../style.css"
import image from "./../../Image/Vector.svg"
import { useModal } from "../../ModalContext"
import data from "./../../Bascet_List"

function Header(){
    const {openModal} = useModal()


    const handleOpenModal = () => {
        openModal("bascet", data);
      };

    return(
        <header>
            <div className="container">
                <div className="headers">
                    <h1>SneakMax</h1>
                    <ul className="list">
                        <li className="list_item"><a>Каталог</a></li>
                        <li className="list_item"><a>О нас</a></li>
                        <li className="list_item"><a>Подбор товара</a></li>
                        <li className="list_item"><a>Наша команда</a></li>
                        <li className="list_item"><a>Доставка и оплата</a></li>
                        <li className="list_item"><a>Контакты</a></li>
                        <li className="list_item" onClick={handleOpenModal}><a>Корзина</a><img src={image}/></li>
                    </ul>
                </div>
                <div className="line"></div>
            </div>
        </header>
    )
}

export default Header