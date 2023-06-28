import React, { useState } from "react";
import Filter from "./Filter";
import { Link, Route, Routes, BrowserRouter } from 'react-router-dom';
import MyBasket from "./MyBasket"


export function Header(props) {
    const [searchValue, setValue] = React.useState('');
    const [Btn, SetBtn] = React.useState(false);

    const [Check, SetCheck] = React.useState(false);
    const [Cart, SetCart] = React.useState(false);
    const mas = props.items;

    function handleClick() {
        if(Check) {handleCloseNav()};
        SetBtn(!Btn);
     
    }

    function handleCartClick() {
        if(Check) {handleCloseNav()};
        return <Route path="/cart" element={<MyBasket />} />
       
    }

    function handleMain() {
        return <Route path="/" />
    }

    const handleChange = () => {
        SetCheck(!Check);
    };

   
    const handleCloseNav = () => {
        let flf = document.querySelector('.menu input').checked = !Check;
        console.log(flf);
        handleChange();
    }

    let SerchLenght = searchValue.length;

    const filtered = mas.filter((item) =>
        item.title.toLowerCase().includes(searchValue.toLowerCase())
    );

    return (

        <header className={` ${Btn ? "active" : ''}`}>

            <div className={`menu back menu--3 ${` ${Btn ? "none" : ''}`}`} onChange={handleChange}>
                <label>
                    <input type="checkbox"></input>
                    <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="50" cy="50" r="30" />
                        <path className="line--1" d="M0 40h62c18 0 18-20-17 5L31 55" />
                        <path className="line--2" d="M0 50h80" />
                        <path className="line--3" d="M0 60h62c18 0 18 20-17-5L31 45" />
                    </svg>
                </label>
            </div>

            <div className="main_header"  >
                <Filter searchValue={searchValue} setValue={setValue} Btn={Btn} mas={mas} />
                <div className="header_search" onClick={handleClick}></div>
            </div>

            <div className="logo">
                pizza
            </div>

            <nav onClick={handleCloseNav} className={`navigation ${Check ? "active" : ''} `}>
                <ul className="header_container" >
                    <li className="header_links"><Link to="/" className="header_link" onClick={handleMain}>Главная</Link></li>
                    <li className="header_links"><a href="protein.html" className="header_link">Протеины</a></li>
                    <li className="header_links"><a href="gainer.html" className="header_link">Гейниры</a></li>
                    <li className="header_links"><a href="vitamin.html" className="header_link">Витамины</a></li>
                    <li className="header_links"><a href="creatine.html" className="header_link">Креатин</a></li>
                </ul>

            </nav>

            <div className="header_functional">
                <a href="favorite.html" className="header_icon favorite">
                </a>
                <Link className="header_icon basket" to="/cart" onClick={handleCartClick}>
                    <span className={`${props.orders.length && !Btn ? 'notify' : ''}`}>{props.orders.length && !Btn ? props.orders.length : ''}</span>
                </Link>
            </div>

            <div className={`list_items ${SerchLenght && Btn ? 'active' : ''}`}>
                {filtered.map(el => (
                    <div className="list_item" key={el.id} >
                        <h2 className="litem_title">{el.title}</h2>
                        <span>{el.price}</span>
                    </div>
                ))}
            </div>

        </header>
    )

}

//List items рендерит весь массив!!! Исправить

export default Header