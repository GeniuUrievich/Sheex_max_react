import FAQ_item from "./FAQ_item"
import { useState } from "react"
import "./style.css"
import "./../../style.css"

function FAQ(){
    return (
        <section sec_7>
            <div className="container">
                <div className="FAQ">
                    <h1 className="FAQ_h1">Часто задаваемые вопросы</h1>
                    <ul className="FAQ_sec">
                        <FAQ_item></FAQ_item>
                        <FAQ_item></FAQ_item>
                    </ul>
                </div>
            </div>
        </section>
    )
}

export default FAQ