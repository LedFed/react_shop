import React, { Component } from "react";


export class Black extends Component {
    constructor(props) {
        super(props)
        this.state = {
            activeKey: null,
            categories: [
                {
                    key: 'all',
                    name: 'Все'
                },
                {
                    key: 'pizza',
                    name: 'Все'
                },
                {
                    key: 'water',
                    name: 'Все'
                },
                {
                    key: 'all',
                    name: 'Все'
                },
            ]
        }

        this.handleItemClick = this.handleItemClick.bind(this);
    }

    handleItemClick = (key) => {
        this.setState({ activeKey: key });

    };

    render() {
        const { activeKey } = this.state;
       
        return (
            <div className="filter">
                {this.state.categories.map(el => (
                    <div className={`filter_item ${el.key === activeKey ? "active" : ''}`} key={el.key}
                        onClick={() => { this.props.choseCategories(el.key); this.handleItemClick(el.key); }}>{el.name}</div>))}
            </div>
        )

    }

}

export default Black