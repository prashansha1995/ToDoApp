import axios from "axios"

class HelloWorldService{

    retriveHelloWorld()
    {
   return axios.get("http://localhost:4000/")
    }
}

export default new  HelloWorldService()