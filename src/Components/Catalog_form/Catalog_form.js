import "./../Catalog_form/style.css"
import "./../../style.css"
import { useState } from "react"
import Button_filter from "../Button_filter/Button_filter"
import filter_list from "../../filret_list"
import Card_List from "../Card_List/Card_List"
import Button_link from "../Button_link/Button_link";
import List_card from "../../List_card";

function Catalog_form(){
    const [minValue, setMinValue] = useState(500)
    const [maxValue, setMaxValue] = useState(100000)
    const [updata, setUpdata] = useState(List_card)
    const [filter, setFilter] = useState(filter_list)

    const changemin = (event) =>{
        const value = parseInt(event.target.value,10)
        if (value < maxValue){setMinValue(value)}    }
    const changemax = (event) =>{
        const value = parseInt(event.target.value,10)
        if (value > minValue){setMaxValue(value)}}
    
    const handleFilter = () =>{

        filter_list.price[0] = minValue;
        filter_list.price[1] = maxValue;
        

        if (checkd.мужской === true && !filter_list.sex.includes("мужской")){
            filter_list.sex.push("мужской")
        }

        if (checkd.женский === true && !filter_list.sex.includes("женский")){
            filter_list.sex.push("женский")
        }

        if (checkd.мужской === false && filter_list.sex.includes("мужской")){
            filter_list.sex = filter_list.sex.filter((item) => item !== "мужской")
        }

        if (checkd.женский === false && filter_list.sex.includes("женский")){
            filter_list.sex = filter_list.sex.filter((item) => item !== "женский")
        }

        

        activeCell.forEach((row_list, index_row) => {
            row_list.forEach((cell_i, index_cell) =>{
                if (activeCell[index_row][index_cell] === true && !filter_list.size.includes(rows[index_row][index_cell]))
                {
                    filter_list.size.push(rows[index_row][index_cell])
                }
                else if (activeCell[index_row][index_cell] === false && filter_list.size.includes(rows[index_row][index_cell])){
                    filter_list.size.splice(filter_list.size.indexOf(rows[index_row][index_cell]))
                }
            })
        });
        console.log(filter_list)
    }

    const [activeCell, setactiveCell] = useState([[false, false,false],
        [false, false,false],
        [false, false,false]])

    const handleV = (rowIn, cellIn) => {
        setactiveCell((prev) => {
        const updated = prev.map((row, rowIndex) =>
            row.map((cell, cellIndex) =>
                rowIndex === rowIn && cellIndex === cellIn ? !cell : cell
            )
        );
        return updated;
    })};
        
    const rows = [
        [35, 36, 37],
        [38, 39, 40],
        [41, 42, 43],
      ];
    
    const [checkd, setCheckd] = useState({
        мужской : false,
        женский : false
    })
      
    const handleChangeSex = (event) =>{
        const {name, checked} = event.target;
        setCheckd((prev) => ({
            ...prev,
            [name] : checked
        }))
    }

    const handleDel = () => {
        filter_list.sex = []
        filter_list.size = []
        setactiveCell((prev) => {
            const updated = prev.map((row) =>
                row.map((cell) =>
                    cell = false
                )
            );
            return updated;
        })
        setMinValue(500);
        setMaxValue(100000);
        setCheckd((prev) => ({
            ...prev,
            мужской : false,
            женский : false
        }))
        console.log(filter_list)
    
    }

    const click = () => {
        let updatas = List_card.filter(card => {
            return (
                parseInt(filter.price[0]) <= parseInt(card.price) &&
                parseInt(card.price) <= parseInt(filter.price[1]) &&
                (filter.sex.includes(card.sex) || filter.sex.length === 0) &&
                (filter.size.includes(parseInt(card.size)) || filter.size.length === 0)
            )
        }
        )
        setUpdata(updatas)
        console.log(updatas)
    }

    const clickAll = () => {
        handleFilter();
        click()
    }

    return(
        <>
        <div className="catalog_form">
            <div className="form_text">Подбор по параметрам</div>
            <div className="catalog_price">
                <h3>Цена, руб</h3>
                <div className="cat_pr_in">
                    <input type="text" className="cat_pr_in_pole" value = {minValue} onChange={changemin} ></input>
                    <input type="text" className="cat_pr_in_pole" value = {maxValue} onChange={changemax}></input>  
                </div>
                <div className="range-slider">
                    <div className="slider-track"></div>
                    <input type="range" id="sliderMin" min={500} max={49999} step="1" value={minValue} onInput={changemin}/>
                    <input type="range" id="sliderMax" min={50000} max={99999} step="1" value={maxValue} onInput={changemax}/>
                </div>
            </div>
            <div className="list_sex">
                <h3>Пол</h3>
                <div className="checkbox">
                    <label className="check_box"><input type="checkbox" name={"мужской"} checked={checkd.мужской} onChange={handleChangeSex}/><span className="check"></span>мужской</label>
                    <label className="check_box"><input type="checkbox" name={"женский"} checked={checkd.женский} onChange={handleChangeSex}/><span className="check"></span>женский</label>
                </div>
            <div className="table_size">
                <h3>Размер</h3>
                <table className="table_list">
                    <tbody>
                        {rows.map((row, rowIndex)=>{
                            return (<tr className="table_row" key={rowIndex}>
                                {row.map((cell, cellIndex) => {
                                    return (
                                        <td key={cellIndex} className={activeCell[rowIndex][cellIndex] ? "table_item active" : "table_item"} onClick={()=>(handleV(rowIndex, cellIndex))}>{cell}</td>
                                    )
                                } )}
                            </tr>
                        )})}
                    </tbody>
                </table>
            </div>
            <Button_filter onClick={()=>clickAll()}>Применить</Button_filter>
            <button className="ref" onClick={() => {handleDel(rows); click()}}>сбросить</button>
            </div>  
         </div>
         <Card_List updata={updata}></Card_List>
         </>
    )
}

export default Catalog_form