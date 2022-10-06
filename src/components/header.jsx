import React from 'react';
import "./header.scss";
import {MdOutlineRealEstateAgent} from 'react-icons/md';
import Button from "../design/button";

const NAV_LINKS = [
    {
        id: 1,
        name: "Rent",
    },
    {
        id: 2,
        name: "Buy"
    },
    {
        id: 3,
        name: "Sell"
    },
    {
        id: 4,
        name: "Manage Property"
    },
    {
        id: 4,
        name: "Resources"
    }
]

const Header = () => {
    return (
        <header className="header">
            <div className="header__inner">
                <div className="header__inner_left">
                    <div className="header__inner_left-logo">
                        <MdOutlineRealEstateAgent size={32}/>
                        <span>Estatery</span>
                    </div>
                    <nav className="header__inner_left-nav">
                        {
                            NAV_LINKS.map(({id, name}, i) => {
                                return (
                                    <li key={`nav-link-${id}`}>
                                        {name}
                                    </li>
                                )
                            })
                        }
                    </nav>
                </div>
                <div className="header__inner_actions">
                    <Button label="login" variant="outlined"/>
                    <Button label="Signup" variant="contained"/>
                </div>

            </div>
        </header>
    )
}

export default Header;