package controllers

import play.api._
import play.api.mvc._
//import slick.driver.PostgresDriver._
//import slick.jdbc.JdbcBackend.Database
import scala.concurrent.ExecutionContext.Implicits.global

object Application extends Controller {

  def index = Action {
    Ok(views.html.index())
  }

}
