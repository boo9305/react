import React from 'react'
import { CSSTransition } from 'react-transition-group'
import {Route, NavLink, Switch} from 'react-router-dom'


import './Header.css'

const Home = (props) => {
    return (
        <CSSTransition
          key="3"
          timeout={500}
          unmountOnExit
          classNames="frame"
        >
            <div className="Home">
                <ul>
                    <li>Home1-1</li>

                    <li>Home1-2</li>

                    <li>Home1-3</li>
                </ul>
            </div>

        </CSSTransition>
     
    )
}

const Menu1 = (props) => {
    return (
        <div className="Menu1">
            adasd
        </div>
    )
}

const Menu2 = (props) => {
    return (
        <div className="Menu2">
            111
        </div>     
    )
}
class Header extends React.Component {
    render() {  
        return(
            <div className="header">
                <div>
                    <div className="left">
                        <ul>
                            <li><NavLink exact to="/Home">Home</NavLink></li>
                            <li><NavLink to="/Menu1">Menu1</NavLink></li>
                            <li><NavLink to="/Menu2">Menu2</NavLink></li>
                        </ul>

                    </div>

                    <div className="section">
                        <Switch>
                            <Route exact path="/Home"><Home></Home></Route>
                            <Route exact path="/Menu1"><Menu1></Menu1></Route>
                            <Route exact path="/Menu2"><Menu2></Menu2></Route>        
                        </Switch>
                        
                    </div>
                        
                </div>
      
            </div>
        )
    }
}

export default Header;