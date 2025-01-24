import Card from "./../Card/Card";
import "./../Card_List/style.css"
import "./../../style.css"

function Card_List({updata}) {
    return(
        <div className="Card_list">
            {updata.map((card) => {return <Card key={card.key} img={card.img} name={card.name} price = {card.price}></Card>})}
        </div>
    )
}

export default Card_List