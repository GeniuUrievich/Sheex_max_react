import "./style.css"
import "./../../style.css"
import { useModal } from "../../ModalContext"
import star from "./../../Image/Star 1.svg"

const Card_open = () => {

    const { isModalOpen, closeModal, modalData } = useModal();

    if (!isModalOpen) return null; 

    console.log(modalData)

    return (
        <div className="card_open" onClick={closeModal}>
            <div className="card_open_content" onClick={(e) => e.stopPropagation()}>
                <div className="card_open_priev">
                    <img src={modalData.img} className="card_open_img"/>
                    <ul className="card_open_photos">
                        <li><img src={modalData.img} className="card_open_img_li"/></li>
                        <li><img src={modalData.img} className="card_open_img_li"/></li>
                        <li><img src={modalData.img} className="card_open_img_li"/></li>
                        <li><img src={modalData.img} className="card_open_img_li"/></li>
                        <li><img src={modalData.img} className="card_open_img_li"/></li>
                        <li><img src={modalData.img} className="card_open_img_li"/></li>
                    </ul>
                </div>
                <div className="card_open_info">
                    <div className="info_base">
                        <h4 className="info_base_h4">{"Артикул: " + modalData.artical}</h4>
                        <h4 className="info_base_h4">В наличии: <span>{modalData.count + " шт"}</span> </h4>
                    </div>
                    <h1 className="card_open_name">{modalData.name}</h1>
                    <div className="rating">
                        <img src={star}/>
                        <img src={star}/>
                        <img src={star}/>
                        <img src={star}/>
                        <img src={star}/>
                    </div>
                    <ul className="change_size">
                        <li><div className="size_item">36</div></li>
                        <li><div className="size_item">37</div></li>
                        <li><div className="size_item">38</div></li>
                        <li><div className="size_item">39</div></li>
                        <li><div className="size_item">40</div></li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Card_open