import Info_main from "./info_main/Info_main";
import Catalog from "./Catalog/Catalog";
import About from "./About/About";
import Quiz from "./Quiz/Quiz";
import Team from "./Team/Team";
import FAQ from "./FAQ/FAQ"
import Contacts from "./Contacts/Contacts";
import Instagram from "./Instagram/Instagram";

function Main(){
    return(
        <main>
            <Info_main></Info_main>
            <Catalog></Catalog>
            <About></About>
            <Quiz></Quiz>
            <Team></Team>
            <FAQ></FAQ>
            <Contacts></Contacts>
            <Instagram></Instagram>
        </main>
    )
}

export default Main