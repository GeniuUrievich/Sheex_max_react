import Card from "./../Card/Card";
import "./../Card_List/style.css"
import "./../../style.css"
import Button_link from "../Button_link/Button_link";

function Card_List({updata}) {
    const margin =  {
        marginLeft: "320px",
        width: "200px",
        marginTop: "40px",
        marginBottom: "60px"
    }
    return(
        <div className="cards_list">
            <div className="Card_list">
                {updata.map((card) => {return <Card data={card} key={card.id}></Card>})}
            </div>
            <Button_link style={margin}>Показать еще</Button_link>
        </div>
        
    )
}

export default Card_List