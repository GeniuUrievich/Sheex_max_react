import image from "./../../Image/фигура.png"
import image1 from "./../../Image/фигура (1).png"
import Team_List from "../../Team_list"
import "./style.css"
import "./../../style.css"
import Card_people from "./Card_people"

function Team(){
    return (
        <section className="sec_6">
            <img className="figure_first" src={image}/>
            <img className="figure_first" src={image1}/>
            <div className="container">
               <div className="team">
                    <h1 className="team_h1">Наша команда</h1>
                    <div className="team_list">
                        {Team_List.map((card) => <Card_people img={card.img} name={card.name} role={card.role}></Card_people>)}  
                    </div>
               </div>
            </div>
        </section>
    )
}

export default Team