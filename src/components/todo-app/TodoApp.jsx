import React,{Component} from 'react'
import './todo-app.css'

class ToDoApp extends Component{

    render(){
        return (
            <div>Welcome !</div>
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
        //console.log(this.state)
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
        this.setState({isSuccessfulLogin:true,isFailedLogin:false})
      }
      else{
        this.setState({isSuccessfulLogin:false,isFailedLogin:true})
 
      }
    }
   
    render(){
        return(
            <div>
                <SuccessfulLoginFunction showSuccessfulLogin={this.state.isSuccessfulLogin}/>
                <FailedLoginFunction showFailedLogin={this.state.isFailedLogin}/>
                Username : <input type="text" name="username" value={this.state.username} onChange={this.handleChangeEvent}/>
                Password : <input type="Password" name="password" value={this.state.password} onChange={this.handleChangeEvent}/>
                <button onClick={this.validateUserLogin}>Submit</button>
            </div>
        )
    }
}

function SuccessfulLoginFunction(props){
 if(props.showSuccessfulLogin)
 {
     return <div>Successful Logged In</div>
 }
 return null
}

function FailedLoginFunction(props){
    if(props.showFailedLogin)
    {
        return <div>Login Failed</div>
    }
    return null
   }

export default  LoginComponent