import "./style.css"
import "./../../style.css"
import Button_link from "./../Button_link/Button_link"
import { useModal } from "../../ModalContext"
import star from "./../../Image/Star 1.svg"
import galka from "./../../Image/Vector (2).svg"

const Card_open = ({data}) => {

    const {closeModal} = useModal();

    if (!data) return null; 
    
    const size_button = {
        width: "450px"        
    }

    return (
        <div className="card_open" onClick={closeModal}>
            <div className="card_open_content" onClick={(e) => e.stopPropagation()}>
                <div className="card_open_source">
                    <div className="card_open_priev">
                        <img src={data.img} className="card_open_img"/>
                        <ul className="card_open_photos">
                            <li><img src={data.img} className="card_open_img_li"/></li>
                            <li><img src={data.img} className="card_open_img_li"/></li>
                            <li><img src={data.img} className="card_open_img_li"/></li>
                            <li><img src={data.img} className="card_open_img_li"/></li>
                            <li><img src={data.img} className="card_open_img_li"/></li>
                            <li><img src={data.img} className="card_open_img_li"/></li>
                        </ul>
                        <div className="discription">
                            <h3 className="discription_h3">Описание</h3>
                            <p className="discription_p">Кроссовки Nike Blazer Mid '77 Vintage Suede с винтажной подошвой возрождают стиль баскетбольных моделей Nike прошлого, создавая впечатление, что они хранились в шкафу долгие годы. </p>
                        </div>
                    </div>
                    <div className="card_open_info">
                        <div className="info_base">
                            <h4 className="info_base_h4">{"Артикул: " + data.artical}</h4>
                            <h4 className="info_base_h4">В наличии: <span>{data.count + " шт"}</span> </h4>
                            <button className="btn_close" onClick={closeModal}><span></span></button>
                        </div>
                        <h1 className="card_open_name">{data.name}</h1>
                        <div className="rating">
                            <img src={star}/>
                            <img src={star}/>
                            <img src={star}/>
                            <img src={star}/>
                            <img src={star}/>
                        </div>
                        <div className="text_size">Выберите размер</div>
                        <ul className="change_size">
                            <li><div className="size_item">36</div></li>
                            <li><div className="size_item">37</div></li>
                            <li><div className="size_item">38</div></li>
                            <li><div className="size_item">39</div></li>
                            <li><div className="size_item">40</div></li>
                        </ul>
                        <div className="card_open_price">{data.price}</div>
                        <Button_link style={size_button}>Заказать</Button_link>
                        <ul className="condition">
                            <li className="condition_item">
                                <img className="condition_img" src={galka}/>
                                <h6 className="condition_h6">Бесплатная доставка до двери</h6>
                            </li>
                            <li className="condition_item">
                                <img className="condition_img" src={galka}/>
                                <h6 className="condition_h6">Оплата заказа при получении</h6>
                            </li>
                            <li className="condition_item">
                                <img className="condition_img" src={galka}/>
                                <h6 className="condition_h6">Обмен в течении двух недель</h6>
                            </li>
                        </ul>
                        <ul className="specifications">
                            <div className="specifications_h3">Характеристики</div>
                            <li className="specifications_item">{"Пол: " + data.sex}</li>
                            <li className="specifications_item">{"Цвета: " + data.color}</li>
                            <li className="specifications_item">{"Состав: " + data.structure}</li>
                            <li className="specifications_item">{"Страна: " + data.country}</li>
                        </ul>
                    </div>
                </div>
                <div className="hz"></div>
            </div>
        </div>
    );
}

export default Card_open