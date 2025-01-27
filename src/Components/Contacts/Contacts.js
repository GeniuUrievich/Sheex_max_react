import image from "./../../Image/Property 1=default.svg"
import im_vk from "./../../Image/VK.svg"
import im_in from "./../../Image/Instagram.svg"
import "./../../style.css"
import "./style.css"

function Contacts() {
    return (
        <section className="sec_7">
            <div className="container">
                <div className="contacts">
                    <div className="contact_text">
                        <h1 className="contacts_h1">Контакты</h1>
                        <div className="foto">
                            <h4 className="contacts_h4">Главный офис</h4>
                            <img className="con_foto" src={image}/>
                        </div>
                        <div className="phone_contact">+7 800 789 89 89</div>
                        <div className="adress">г. Санкт-Петербург, Комсомольская, 43 к1</div>
                        <h4 className="contacts_h4">Отдел продаж</h4>
                        <div className="phone_contact">+7 800 789 89 89</div>
                        <div className="adress">г. Санкт-Петербург, Комсомольская, 43 к1</div>
                        <div className="social">
                            <img className="social_photo" src={im_vk}></img>
                            <img className="social_photo" src={im_in}></img>
                        </div>
                    </div>
                    <iframe src="https://yandex.ru/maps/-/CHa3ZF7z"
                    width={700}
                    height={500}
                    ></iframe>
                </div>
            </div>
        </section>
    )
}

export default Contacts