import React, { Fragment } from "react";

// import { Link } from 'react-router-dom';

export function MyBasket(props) {

  function Allsum() {
    let sum = 0;
    props.orders.map(el => { sum += +el.price });
    return sum;
  }

  return (
    <>
      <div className="container">
        <div className="bsket_items" >
          {props.orders.length ? <Fragment>
            {props.orders.map(el => (<div className="basket_item" key={el.id}>
              <img src="./img/pizza.png" alt="" className="pizza"></img>
              <div className="basket_left">
                <h3 className="basket_title">{el.title}</h3>
                <span className="basket_text">{el.price}</span>
                <div className="counters_block">
                  <button className="btQ minus">-</button>
                  <div className="quantity">1</div>
                  <button className="btQ plus">+</button>
                  <img src="./img/delete.svg" alt="" className="delete" key={el.id} onClick={() => props.onDelete(el.id)}></img>
                </div>
              </div>
            </div>
            ))} </Fragment> : <h2>Корзина пуста</h2>}
        </div >

        <div className="all_price">{`Общая сумма: ${Allsum()}`}</div>
        <button className="payment">Перейти к оплате</button>
      </div >
    </>
  )




}

export default MyBasket

