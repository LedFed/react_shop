import React, { Component } from "react";

export class Item extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isActive: false,
            content: "+ в корзину"
        };
    }

    handleElementClick = () => {
        this.setState(prevState => ({
            isActive: true,
            content: true ? "Добавлено" : "+ в корзину"
        }));

        // localStorage.setItem('Array', this.props.onAdd(this.props.item))
        // console.log(this.props.onAdd(this.props.item));
        this.props.onAdd(this.props.item) 
    };

    render() {
        return (
            <div className="card_item">
                <div className="card_img"></div>
                <h3 className="card_title">{this.props.item.title}</h3>
                <span className="card_price">{this.props.item.price}</span>
                <div className={`add_basket ${this.state.isActive ? "active" : ""}`} onClick={this.handleElementClick}>{this.state.content}</div>
            </div >
        )
    }
}

export default Item