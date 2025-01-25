import { useState } from "react"
import "./style.css"
import "./../../style.css"

function Quiz_Modal_3(){
    const [text, setText] = useState()

    const handleText = (event)=>{
        setText(event.target.value)
    }

    return (
    <>
        <h2 className="modal_text">Уточните какие-либо моменты</h2>
        <textarea type="text" className="modal_input_text" value={text} onChange={handleText} placeholder="Введите сообщение"></textarea>
    </>
    )
}

export default Quiz_Modal_3