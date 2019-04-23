import React, { Component, Fragment } from 'react';
import {Link} from 'react-router-dom';

const menu = [
    {
        label: 'Trang Chủ',
        to: '/',
    },
    {
        label: 'Danh Sách Sản Phẩm',
        to: '/list',
    },
    {
        label: 'Liên Hệ',
        to: '/contact',
    },
];

const MenuLink = ({ label, to }) => {
    return (
        <li className="nav-item">
            <button className="btn btn-outline-success" type="button">
                <Link to={to} className="nav-link" href="#">{label}</Link>
            </button>
        </li>
    );
}

export default class App extends Component {
    render() {
        return (
            <Fragment>
                <section>
                    <div className="container">
                        <nav className="navbar navbar-expand-sm bg-light navbar-light justify-content-center">
                            <ul className="navbar-nav">
                               
                                { this.menu(menu) }

                            </ul>
                        </nav>
                    </div>

                </section>
            </Fragment>
        );
    }
    menu=menu=>{
        let menulnk = '';
        menulnk = menu.map( (value,index)=>{
            return(
               <MenuLink to={ value.to } label={ value.label } /> 
            );
        });
        return menulnk;
    }
}