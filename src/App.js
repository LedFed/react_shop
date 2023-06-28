import React from "react";
import { Link, Route, Routes, BrowserRouter } from 'react-router-dom';
import Header from "./components/Header";
import { Items } from "./components/Items";
import MyBasket from "./components/MyBasket"
import Black from "./components/Black";


class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {

      orders: [],
      currentitems: [],
      items: [
        {
          id: 1,
          title: 'Сырная',
          img: '',
          catecory: 'pizza',
          price: '490',
        },
        {
          id: 2,
          title: 'Пепперони фреш',
          img: '',
          catecory: 'pizza',
          price: '239',
        },
        {
          id: 3,
          title: 'Двойной цыпленок',
          img: '',
          catecory: 'pizza',
          price: '399',
        },
        {
          id: 4,
          title: 'Ветчина и сыр',
          img: '',
          catecory: 'pizza',
          price: '799',
        },
        {
          id: 5,
          title: 'Карбонара',
          img: '',
          catecory: 'pizza',
          price: '459',
        },
        {
          id: 6,
          title: 'Песто',
          img: '',
          catecory: 'pizza',
          price: '899',
        },
        {
          id: 7,
          title: 'Аррива',
          img: '',
          catecory: 'pizza',
          price: '509',
        },
        {
          id: 8,
          title: 'Мясная',
          img: '',
          catecory: 'pizza',
          price: '849',
        },
        {
          id: 9,
          title: 'Пепси',
          img: '',
          catecory: 'water',
          price: '49',
        },
      ]
    }

    this.state.currentitems = this.state.items;
    this.addToOrder = this.addToOrder.bind(this);
    this.choseCategories = this.choseCategories.bind(this);
    this.deleteOrder = this.deleteOrder.bind(this);
  }

  // handleCartClick = () => {
  //   this.setState({ redirectToCart: true });
  // }

  render() {
    // this.deleteOrder(3);
    // console.log(this.state);
    // console.log(this.state.orders);
    // console.log(this.state.items);
    // const { mas } = this.props
    // console.log(this.props);
    // const { activeClass } = this.state;      <Link to="/cart"></Link>
    // console.log(this.props.cart);
    // console.log(this.state.orders);



    // this.LocalSave()
    return (
      <>
        <BrowserRouter>
          <div className="wrapper" >
            <Header items={this.state.items} orders={this.state.orders} />

            <Routes>
              <Route path="/" element={(<>
                <Black choseCategories={this.choseCategories} />
                <Items items={this.state.currentitems} onAdd={this.addToOrder} /></>)} />


              <Route path="/cart" element={<MyBasket items={this.state.items} orders={this.state.orders} onDelete={this.deleteOrder} />} />
            </Routes >
          </div>
        </BrowserRouter>
      </>
    )
  }

  choseCategories(catecory) {

    if (catecory === 'all') {
      this.setState({ currentitems: this.state.items })
      return
    }

    this.setState({
      currentitems: this.state.items.filter(el => el.catecory === catecory)

    })
  }

  deleteOrder(id) {

    this.setState({ orders: this.state.orders.filter(el => el.id !== id) })

  }

  addToOrder(item) {
    let isInArray = false
    this.state.orders.forEach(el => {
      if (el.id === item.id)
        isInArray = true
    })
    if (!isInArray)
      this.setState({ orders: [...this.state.orders, item] })

  }

  LocalSave() {
    if (this.state.orders.length > 0) {
      localStorage.setItem('myData', JSON.stringify(this.state.orders));
    }
  }

}

export default App;
