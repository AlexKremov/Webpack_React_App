import React, { useState } from "react";

export default function Chek(props) {
  const [disable, setDisable] = useState(true);
  const [enable, setEnable] = useState(false);

  const Edit = () => {
      setEnable(true);
      setDisable(false);
  }
  const Save = () => {
    setEnable(false);
    setDisable(true);
  }

  return (
    
    <div className='item_container'>
      <img/>
      <div className='item' >
        <span className='item_name'>
          {props.name}
        </span>
        <span className='item_description'>
          {props.description} 
        </span>
      </div>
      <input  className='item_quantity' type='number' min="1" max="10" disabled={disable} onChange={(e) => {props.handleChangeQty(props.id, e.target.value)}} />
      <input className='item_price' type='number' placeholder={props.price} disabled />
      <button className='edit' hidden={enable} onClick={Edit}>Edit</button>
      <button className='save' hidden={disable} onClick={Save} >Save</button>
      <button className='delete' onClick={() => {props.Delete(props.id)}}  >Delete</button>
    </div>
  )
}
