import React,{useState} from "react";

const InputForm = (props)=>{
const [enterProductID, setProductId] = useState("");
const [enterSellingPrice, setSellingPrice] = useState("");
const [enterProductName, setProductName] = useState("");

const productIDChangeHandler = (event)=>{
    setProductId(parseInt(event.target.value));
};

const SellingPriceChangeHandler = (event)=>{
    setSellingPrice(parseInt(event.target.value));
};

const productChangeHandler = (event)=>{
    setProductName(event.target.value);
};

const submitHandler = (event)=>{
    event.preventDefault();
    const formData ={
        id: enterProductID,
        SellingPrice: enterSellingPrice,
        ProductName: enterProductName
    };

    localStorage.setItem(formData.id, JSON.stringify(formData));

    props.onAddproduct(
        formData.id,
        formData.SellingPrice,
        formData.ProductName,
    );

    console.log(formData, "in InputForm");

    setProductId("");
    setSellingPrice("");
    setProductName("");
};

return (
    <div>
        <form onSubmit={submitHandler}>
            <div>
                <label>Product Id:</label>
                <input 
                type ="number"
                value={enterProductID}
                onChange={productIDChangeHandler}
                />
                <label>Selling Price:</label>
                <input 
                type="number"
                value={enterSellingPrice}
                onChange={SellingPriceChangeHandler}
                />
                <label>Product Name:</label>
                <input 
                type="text"
                value={enterProductName}
                onChange={productChangeHandler}
                />
                <button type="submit">Add Product</button>
            </div>
        </form>
       <h1>Products</h1>
    </div>
);
};

export default InputForm;