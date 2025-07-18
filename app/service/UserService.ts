import User from "#models/user";
import bcrypt from 'bcrypt';


export class UserService {
  // Your code here
  async register(email: string, password: string) {
    //findBY create 
    const user = await User.findBy('email',email) //select * from users where email = ""=> id,email,password
    if(user){
      return ( 'Usuario existente' )
    }
    else{
      //hash 
      const nuevaContraseña= await bcrypt.hash(password,10)
      const user= await User.create({email,password:nuevaContraseña})//insert into ......... values
      return user //select * from user  ultimo registro

    }
  }
  async login (email: string, password: string) {
    //select * from users where email = "" id,email,password
    const user = await User.findBy('email',email)
    
    if(user){
      const resp = bcrypt.compare(password,user.password)
      if(resp){
        return  user 
      }else{
        return "Contraseña incorrecta"
      }
    }else{
      return "Usuario no encontrado"
    }

  }
}