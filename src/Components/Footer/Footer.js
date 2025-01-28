import "./style.css"
import "./../../style.css"

const Footer = () => {
    return (
        <footer>
            <div className="container">
                <div className="footer">
                <h1>SneakMax</h1>
                <nav className="foot_nav">
                    <ul className="foot_nav_list">
                        <li className="foot_nav_item">Каталог</li>
                        <li className="foot_nav_item">О нас</li>
                        <li className="foot_nav_item">Подбоор товара</li>
                        <li className="foot_nav_item">Наша команда</li>
                        <li className="foot_nav_item">Доставка и оплата</li>
                        <li className="foot_nav_item">Контакты</li>
                    </ul>
                </nav>
                </div>
            </div>
        </footer>
    )
}

export default Footer