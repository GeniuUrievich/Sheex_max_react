import "./style.css"
import "./../../style.css"

function Card_people({img, name, role}){
    return (
        <div className="card_people">
            <img className="card_photo"src={img}/>
            <h1 className="card_h1">{name}</h1>
            <h2 className="card_h2">{role}</h2>
        </div>
    )
}

export default Card_people