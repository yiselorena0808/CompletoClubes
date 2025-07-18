import router from "@adonisjs/core/services/router";
import UsersController from "#controllers/users_controller";


const controller=new UsersController()
router.post("/register", controller.register)
router.post("/login", controller.login) 