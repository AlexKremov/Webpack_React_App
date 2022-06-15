import { getProducts } from './api/queries';
import "./app.css";
import React, { useState } from "react";
import Chek from "./item";

function App() {
  const [items, setItems] = useState([])

  const totalPrice = items.reduce((acc,val)=>{
    acc += val.price * val.quantity
    return acc;
  }, 0)
  const totalQty = items.reduce((acc,val)=>{
    acc += Number(val.quantity)
    return acc;
  }, 0)


  React.useEffect(() => {
    getProducts().then((res) => {
      setItems(res.data.allproducts);
    })
  }, [])

  const handleChangeQty = (id, value) => {
    setItems(
      items.map((e) => {
        if (e.id == id) {
          e.quantity = value;
        }
        return e;
      }),
    );
  }

  const Delete = (id) => {
    setItems(items.filter((e) => {
      return e.id != id
    }))
  }

  return (
    <div className="App">
      <div className="container">
        {items.map((item) => {
          return (
            <Chek
              key={item.id}
              id={item.id}
              name={item.name}
              description={item.product_description}
              quantity={item.quantity}
              price={item.price}
              handleChangeQty={handleChangeQty}
              Delete={Delete}
            />
          );
        })}
        <hr />
      </div>

      <div className="total_panel">
        <span className="total_price">Total Price : {totalPrice}</span>
        <span className="total_qty">Quantity : {totalQty}</span>
        <span className="number_of_goods">Number of Goods : {items.length}</span>
      </div>
    </div>
  );
}

export default App;