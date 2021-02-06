import React, {useState} from "react";
import mod from "./paginator.module.css"


let Paginator = ({itemsCount,pageSize,currentPage,onPageChanged,portionSize=10}) => {

let pagesCount = Math.ceil(itemsCount / pageSize);
let pages = [];
for (let i = 1 ; i <= pagesCount ; i++) {
    pages.push(i)
}

let portionCount = Math.ceil(pagesCount/portionSize);
let [portionNumber,setPortionNumber] = useState(1);
let leftPortionPageNumber = (portionNumber - 1) *  portionSize + 1;
let rightPortionPageNumber = portionNumber * portionSize

return <div >
    {portionNumber > 1 && <button className={mod.arrowLeft } onClick={ ()=> {setPortionNumber(portionNumber-1)}}/>}


        {pages.filter(p => p >= leftPortionPageNumber && p <= rightPortionPageNumber).map(p => {
            return <span key={p.id} className={(currentPage === p && mod.selectedPage)|| mod.page}
                         onClick={()=>{onPageChanged(p)}}>{p}</span>})}

    {portionCount > portionNumber && <button className={mod.arrowRight } onClick={() => setPortionNumber(portionNumber+1)}/>}

</div>

    }

    export default Paginator;