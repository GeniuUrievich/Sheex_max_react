import "./style.css"
import "./../../style.css"
import { useModal } from "../../ModalContext"

const Zakaz = () => {
    const {closeModal, bascet, setBascet} = useModal()

    return (
        <div className="zakaz" onClick={closeModal}>
            <div className="zakaz_modal" onClick={(e) => e.stopPropagation()}>
                
            </div>
        </div>
    )
}

export default Zakaz