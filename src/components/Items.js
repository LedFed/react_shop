import React, { Component } from 'react';
import Item from './Item';

export class Items extends Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 6,
        };
    }

    handleShowMore = () => {
        const { count } = this.state;
        this.setState({ count: count + 4 });
        //Поскольку будем показывать товаров
    };

    render() {
        const { items } = this.props;
        const { count } = this.state;
        
        return (
            <div className='container'>
                <div className='card_items'>
                    {items.slice(0, count).map(el => (
                        <Item key={el.id} item={el} onAdd={this.props.onAdd} />
                    ))}
                   
                </div>
                {count < items.length && (
                        <button className='payment' onClick={this.handleShowMore}>Показать еще</button>
                    )}
            </div>

        )
    }
}

export default Items