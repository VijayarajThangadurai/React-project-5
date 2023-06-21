import React from "react";

const Productlist = (props)=>{
const handleDelete = (itemId, itemSp)=>{
    const updatedList = props.list.filter((item)=> item.itemid !== itemId);
    props.setList(updatedList);

    localStorage.removeItem(itemId);

    props.setTotal((prevAmount)=> prevAmount - itemSp);
    console.log("Delete item with ID:", itemId);
};
return (
    <div>
        <div>
            <ul>
                {props.list.map((item)=>(
                    <li key={item.itemid}>
                        {item.itemid}-{item.itemSp}-{item.itemName}
                        <button onClick={()=> handleDelete(item.itemid,item.itemSp)}>
                            Delete
                        </button>
                    </li>
                ))};
            </ul>
        </div>
    </div>
);
};
export default Productlist;