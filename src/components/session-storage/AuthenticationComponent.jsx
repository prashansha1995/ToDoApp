import { Component } from "react"
import SessionService from "./SessionService"
import { Route,Redirect} from 'react-router-dom'

class AuthenticationComponent extends Component{
    render(){
            if(SessionService.hasUserLoggedIn()){
                return(
                 <Route {...this.props}/>
                )
            }else{
               return ( <Redirect to="/login"></Redirect>)
            }
        
    }
}
export default AuthenticationComponent