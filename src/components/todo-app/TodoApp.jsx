import React,{Component} from 'react'
import './todo-app.css'
import {BrowserRouter as Router,Route,Switch,Link} from 'react-router-dom'
import HeaderComponent from '../header/HeaderComponent'
import FooterComponent from '../footer/FooterComponent'
import SessionService from '../session-storage/SessionService'
import LogoutComponent from '../LogoutComponent'
import AuthenticationComponent from '../session-storage/AuthenticationComponent'

class ToDoApp extends Component{

    render(){
        return(
        <div>
        <Router>
            <>
            <HeaderComponent/>
            <Switch> {/**To ensure only one end-point is matched out of all available Route,and not the combination */}
            <Route path="/" exact component={LoginComponent}></Route>
            <Route path="/login" component={LoginComponent}></Route>
            <AuthenticationComponent path="/welcome/:username" component={WelcomeComponent}></AuthenticationComponent>
            <AuthenticationComponent path="/todoList"  component={TodoListComponent}></AuthenticationComponent>
            <Route path="/logout" component={LogoutComponent}></Route>

            <Route component={ErrorComponent}></Route> {/** URL Mapping for unknown /endpoint */}
            </Switch>
            <FooterComponent/>
            </>
        </Router>
    </div>
        )
    }

}



export class TodoListComponent extends Component{

    constructor(props)
    {
        super(props)
        this.state={
            todos:
            [
                {id:1,Desc:'Practise Code',Status:'Completed'},
                {id:2,Desc:'Sleep',Status:'Pending'},
                {id:3,Desc:' Repeat',Status:'Scheduled'}
            ]
        }

    }

    render(){
        return (

            <div>
                <div className="container">
                <table className="table">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Description</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.todos.map(
                                todo=> 
                                <tr key={todo.id}>
                                    <td>{todo.id}</td>
                                    <td>{todo.Desc}</td>
                                    <td>{todo.Status}</td>
                                    </tr>
    
                            )}
                    </tbody>
                </table>
                </div>
            </div>
        )
    }


}

function ErrorComponent(){


        return(
            <div>OOPS !! Something Went Wrong.</div>
        )
    
}

class WelcomeComponent extends Component{
   render(){
       return(
           <div>Welcome {this.props.match.params.username} !You can manage your Todos's <Link to="/todoList">Here</Link></div>
       )
   }
}

 class LoginComponent extends Component{

    constructor(props)
    {
      super(props)
      this.state={
          username:'prashansha.gupta',
          password:'',
          isSuccessfulLogin:false,
          isFailedLogin:false
      }
      this.handleChangeEvent=this.handleChangeEvent.bind(this)
      this.validateUserLogin=this.validateUserLogin.bind(this)
    }
    
    handleChangeEvent(event){
        this.setState(
            {
                [event.target.name]:event.target.value
            }
        )
    }

    validateUserLogin()
    {
      if(this.state.username==='prashansha.gupta' && this.state.password==='test')
      {
          //save username and password in session.
          SessionService.saveSessionDetails(this.state.username,this.state.password)
          this.props.history.push(`/welcome/${this.state.username}`)
       // this.setState({isSuccessfulLogin:true,isFailedLogin:false})
      }
      else{
        this.setState({isSuccessfulLogin:false,isFailedLogin:true})
 
      }
    }
   
    render(){
        return(
            <div className="container">
                <h1>LOGIN</h1>
                {/*<SuccessfulLoginFunction showSuccessfulLogin={this.state.isSuccessfulLogin}/>*/}
                <FailedLoginFunction showFailedLogin={this.state.isFailedLogin}/>
                Username : <input type="text" name="username" value={this.state.username} onChange={this.handleChangeEvent}/>
                <br></br>
                <br></br>
                Password : <input type="Password" name="password" value={this.state.password} onChange={this.handleChangeEvent}/>
                <br></br>
                <br></br>
                <button className="btn btn-success" onClick={this.validateUserLogin}>Submit</button>
            </div>
        )
    }
}

// function SuccessfulLoginFunction(props){
//  if(props.showSuccessfulLogin)
//  {
//      return <div>Successful Logged In</div>
//  }
//  return null
// }

function FailedLoginFunction(props){
    if(props.showFailedLogin)
    {
        return <div className="alert alert-warning">Login Failed !!</div>
    }
    return null
   }

export default  ToDoApp