import {UserService} from '../service/UserService.ts'
import User from "#models/user";

const userService = new UserService();


export default class UsersController {
  
  async register({ request, response}) {
    try { 
      const {email,password}=request.body()
      const user= await userService.register(email,password)
      return response.json({msj:"usuario registrado",user})
    }
    catch(malo) {
      return response.json({error:malo.message})
      
    }
  }  
  async login({ request, response }){
    try{
      const {email,password}=request.body()
      const respuesta= await userService.login(email,password)
      return response.json({msj:"usuario logueado",respuesta})
    }
    catch(e){
      return response.json({error:e.message})
    }
  }
}