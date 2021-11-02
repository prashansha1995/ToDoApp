import React,{Component} from 'react'
import {Link} from 'react-router-dom'
import './header.css'
import '../../bootstrap.css'
import SessionService from '../session-storage/SessionService'
import { withRouter } from 'react-router';


class HeaderComponent extends Component{

    render(){
        const  isLoggedIn=SessionService.hasUserLoggedIn();

        return(
            <header>
             <nav className="navbar navbar-expand-md navbar-dark bg-dark">
                   
                   <div><Link to="">ToDo</Link></div>
                    <ul className="navbar-nav">
                    {isLoggedIn && <li> <Link className="nav-link" to="/welcome/in28min">HOME</Link></li>}
                    {isLoggedIn && <li> <Link className="nav-link" to="/todoList">TODO List</Link></li>}
                    </ul>
                    <ul className="navbar-nav navbar-collapse justify-content-end">
                     {!isLoggedIn && <li> <Link className="nav-link" to="/login">LOGIN</Link></li>}
                     {isLoggedIn && <li> <Link className="nav-link" to="/logout" onClick={SessionService.logoutUser}>LOGOUT</Link></li>}
                    </ul>
                </nav>
            </header>
           
        )
    }
}

export default withRouter(HeaderComponent)
