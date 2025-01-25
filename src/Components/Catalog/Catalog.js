import Catalog_form  from "../Catalog_form/Catalog_form";
import "./../Catalog/style.css"
import "./../../style.css"

function Catalog(){
    return (
        <section className="third_sec">
            <div className="container">
                <h1 className="sec_name">Каталог</h1>
                <div className="card_list_form">
                    <Catalog_form></Catalog_form>
                </div>
            </div>  
        </section>
    )
}

export default Catalog