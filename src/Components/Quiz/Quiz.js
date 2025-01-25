import "./style.css"
import "./../../style.css"
import Quiz_Modal_1 from "../Quiz_Modal/Quiz_Modal_1"
import Quiz_Modal_2 from "../Quiz_Modal/Quiz_Modal_2"
import Quiz_Modal_3 from "../Quiz_Modal/Quiz_Modal_3"
import { useState } from "react"
import Quiz_Modal_All from "../Quiz_Modal/Quiz_Modal_All"
import Quiz_Modal_Final from "../Quiz_Modal/Quiz_Modal_Final"

function Quiz()  {
    const str = " из 3"
    const [step, setStep] = useState(1)
    const [mod, setMod]= useState(<Quiz_Modal_1/>)
    const click = () => {
        if (step === 1){   
            setMod(<Quiz_Modal_2></Quiz_Modal_2>)         
        }
        else if (step===2){   
            setMod(<Quiz_Modal_3></Quiz_Modal_3>)
        }
        setStep(step+1) 
    }

    const resetQuiz = () => {
        setStep(1)
        setMod(<Quiz_Modal_1></Quiz_Modal_1>)
    }

    return (
        <section className="sec_5">
            <div className="container">
                <div className="quiz">
                    {step < 4 ? <Quiz_Modal_All key={step} step={step} mod={mod} clickd={click} str={str}></Quiz_Modal_All> : <Quiz_Modal_Final resetQuiz={resetQuiz}></Quiz_Modal_Final>}
                </div>
            </div>
        </section>
    )
}

export default Quiz