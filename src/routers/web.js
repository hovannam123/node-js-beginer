import express from "express"
import homeController from "../controller/homeController"

let router = express.Router()

const initWebRoute = (app) => {
    router.get("/", homeController.getHomepage)

    router.get("/detail/user/:userId", homeController.getDetail)

    router.get("/new-user-form", homeController.NewUserForm)

    router.get("/user/edit/:idEdit", homeController.EditUser)

    router.get("/user/delete/:idDelete", homeController.DeleteUser)

    router.post("/create-new-user", homeController.CreateNewUser)

    router.post("/update-user/", homeController.UpdateUser)

    router.get('/about', homeController.getAbout)

    return app.use('/', router)
}

export default initWebRoute