import React, { Component } from 'react'

class Navbar extends Component {
    constructor(){
        super()

        this.state = {
            navLink: [
                {
                    id: 1,
                    link: 'home',
                    active: true
                },
                {
                    id: 2,
                    link: 'about',
                    active: false
                },
                {
                    id: 3,
                    link: 'contact',
                    active: false
                },
                {
                    id: 4,
                    link: 'login',
                    active: false
                },
            ]
        }
    }
    
    render() {
        const {navLink} = this.state
        const links = navLink.map(item => {
            if (item.link === 'login'){
                return <a key={item.id} href="" className="btn btn-hover">{item.link}</a>
            } else {
                return <a href="" className={item.active ? 'nav--active' : ''}>{item.link}</a>
            }
        })
        return (
            <navbar className="nav container">
                <div className="nav__logo">
                    <a href="">balagendir</a>
                </div>
                <div className="nav__link">
                    {links}
                </div>
            </navbar>
        )
    }
}

export default Navbar
