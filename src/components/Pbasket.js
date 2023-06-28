import React, { Component } from "react";

export class Pbasket extends Component {
    // console.log(props.orders);
  


    handeDeletCart(e) {
        // this.onDelete();
        // console.log();
    }

    render() {
        // console.log(this.props.item.id);
        return (
            <>

                <div className="basket_item" key={this.props.item.id}>
                    <img src="./img/pizza.png" alt="" className="pizza"></img>
                    <div className="basket_left">
                        <h3 className="basket_title">{this.props.item.title}</h3>
                        <span className="basket_text">{this.props.item.price}</span>
                        <div className="counters_block">
                            <button className="btQ minus">-</button>
                            <div className="quantity">1</div>
                            <button className="btQ plus">+</button>
                            <img src="./img/delete.svg" alt="" className="delete" key={this.props.item.id} onClick={() => this.props.onDelete(this.props.item.id)} ></img>
                        </div>
                    </div>
                </div>

            </>
        )
    }
    // this.props.onAdd(this.props.item) 

}


export default Pbasket

// {props.orders.map(el => (
//     <div className="basket_item" key={el.id}>
//       <img src="./img/pizza.png" alt="" className="pizza"></img>
//       <div className="basket_left">
//         <h3 className="basket_title">{el.title}</h3>
//         <span className="basket_text">{el.price}</span>
//         <div className="counters_block">
//           <button className="btQ minus">-</button>
//           <div className="quantity">1</div>
//           <button className="btQ plus">+</button>
//           <img src="./img/delete.svg" alt="" className="delete" key={el.id} ></img>
//         </div>
//       </div>
//     </div>
//   ))}
// </Fragment>