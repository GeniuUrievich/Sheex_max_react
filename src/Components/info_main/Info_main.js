import Button_link from "../Button_link/Button_link"
import "./../../style.css"
import "./../info_main/style.css"

function Info_main(){
    return(
        <section className="first_section">
            <div className="container">
                <div className="line"></div>
                <div className="text">
                    <h1>Кроссовки известных брендов 
                    с доставкой по России и СНГ</h1>
                    <p>Мы продаем кроссовки брендов Nike, Adidas, Puma, Reebok, Converse и многие другие по низким ценам</p>
                </div>
                <Button_link>Перейти к покупкам</Button_link>
                <h1 className="text_cat">SneakMax</h1>
            </div>
        </section>
    )
}

export default Info_main