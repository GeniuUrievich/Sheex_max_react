import "../Card/style.css"
import "../../style.css"

function Card(props){
    return (
        <div className="card">
            <img className="image_card" src={props.img}/>
            <h1 className="name_card">{props.name}</h1>
            <h2 className="price_card">{props.price}</h2>
        </div>
    )
}

export default Card