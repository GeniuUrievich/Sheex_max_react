import "./style.css"
import "./../../style.css"
import Quiz_Modal_1 from "../Quiz_Modal/Quiz_Modal_1"
import { useState } from "react"
import Quiz_Modal_list from "../Quiz_Modal/Quiz_Modal_list"

function Quiz()  {
    const str = " из 3"
    const [key, setKey] = useState(1)
    const [mod, setMod]= useState(<Quiz_Modal_1/>)
    const click = () => {
        if (key < 3){
            setKey(key+1)   
            setMod()         
        }
    }
    return (
        <section className="sec_5">
            <div className="container">
                <div className="quiz">
                    <h1 className="quiz_text_h1">Мы подберем идеальную пару для вас</h1>
                    <h3 className="quiz_text_h3">Ответьте на три вопроса и мы вышлем каталог с самыми подходящими для вас моделями </h3>
                    <span className="quiz_line"></span>
                    {mod}
                    <span className="quiz_line"></span>
                    <div className="footer_quiz">
                        <h3 className="quiz_text_h4">{key+str}</h3>
                        <button className="button_modal" onClick={click}>Следующий шаг</button>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Quiz