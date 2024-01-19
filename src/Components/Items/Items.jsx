import React from 'react'
import './Items.css'
 const Items = (props) => {
  return (
 <div className="items">
<img src={props.image} alt="" />
<p>{props.price}</p>
<div className="item_price">
    <div className="item_price_new">
        {props.new_price}
    </div>
    <div className="item_price_old">
        {props.old_price}
    </div>
</div>
 </div>
  )
}
export default Items
