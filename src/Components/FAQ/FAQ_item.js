import { useState } from "react"
import "./style.css"
import "./../../style.css"

function FAQ_item(){
    const [active, setActive] = useState(false)

    return(
    <li className={active ? "faq_item open" : "faq_item"}>
        <button className="quastion" onClick={() => (setActive(!active))}>
            <span className="quastion_text">Вопрос 1</span>
            <span className="quastion_image"></span>
        </button>
        {active ? <p className="anser">А это ответ 1: в комплексе функционируют 6 детских садов с площадками, воспитателями и всякими другими людьми</p>:null}
    </li>
    )
}

export default FAQ_item