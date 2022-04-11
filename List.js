import React from 'react'
import "../Css/Course.css"

const List = (props) => {

const {state} = props;

  return (
    <div className='list-wrapper'>
    <h1 className='text-center py-3'>Kurs Rejasi</h1>
    <ul className="list-group">
         {state.map((st)=><li className="list-group-item"><div>{st.num}{st.title}{st.lessons}</div> 
         <button className='btn btn-danger px-2 py-1'>{st.index == 0 ? "Free" : "PREMIUM"}
         </button></li>)}
    </ul>
       <div className='btn-wrapper'>
            <button className='btn btn-success p-1 my-2'>Sotib olish</button>
            <button className='btn btn-success p-1 my-2'>Admin bilan Bog`lanish</button>

       </div>

</div>
  )
}

export default List