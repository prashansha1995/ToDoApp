/**
 * A javascript function to save session details for authentication.
 * Local storage is not preferred since ,saving details in local storage are not explicitly removed,even when 
 * you close the browser.
 * 
 * But in Session Storage,as soon as we will close the browser,details will be removed.
 */

class SessionService{

    saveSessionDetails(username,password)
    {
        //sessionStorage :- object provided by javascipt
        //setItem :- Method to set key for session
        sessionStorage.setItem("authenticatedUser",username);
    }

    logoutUser()
    {
        sessionStorage.removeItem("authenticatedUser")
    }

    hasUserLoggedIn()
    {
       let getUser= sessionStorage.getItem("authenticatedUser")
       if( getUser === null ){return false }
       return true
    }
}

export default new SessionService()