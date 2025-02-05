import "./style.css"
import "./../../style.css"

const Zakaz_card = ({data, click}) => {

    const Del_card = () => {
        click(data.key)
    }

    return (
        <div className="card_zakaz">
            <img className="card_zakaz_photo" src={data.img}/>
            <div className="card_zakaz_text">
                <h1 className="card_zakaz_name">{data.name}</h1>
                <h2 className="card_zakaz_price">{data.price}</h2>
            </div>
            <div className="card_btn" onClick={Del_card}>Удалить</div>
        </div>
    )
}

export default Zakaz_card