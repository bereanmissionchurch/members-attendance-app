package controllers

import controllers.UsersController._
import models.Users
import play.api._
import play.api.libs.json.Json
import play.api.mvc._
//import slick.driver.PostgresDriver._
//import slick.jdbc.JdbcBackend.Database
import scala.concurrent.ExecutionContext.Implicits.global

object Application extends Controller {

  def index = Action {
    Ok(views.html.index(Users.all))
  }

  def all = Action  { implicit request =>
    Logger.debug(s"all")
    val users = Users.all
    Logger.debug(users.toString)

//    users.map(user => Json.toJson(user))
//    Logger.debug(users.toString())

//    		Ok(Json.toJson(users))
    Ok(Json.toJson(Map("status" -> "OK", "message" -> ("Hello"))))
  }


//  def javascriptRoutes = Action { implicit request =>
//    Ok(
//      Routes.javascriptRouter("jsRoutes")(
//        routes.javascript.Users.list,
//        routes.javascript.Users.get
//      )
//    ).as("text/javascript")
//  }


}
