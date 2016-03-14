package controllers

import models.{User, Users}
import play.api._
import play.api.data.Forms._
import play.api.data._
import play.api.libs.json._
import play.api.mvc._


object MembersController extends Controller {
	val userForm = Form(
	    mapping(
	        "name" -> text,
	        "id" -> optional(number)
	)(User.apply)(User.unapply))

	def index = Action {
		Logger.debug("index")
		Ok(views.html.index(Users.all))
	}
	def show(id:Int) = Action { implicit request =>
		Logger.debug("show")
		Ok(views.html.users.show(Users.find(id)))
	}
	def add = Action {
		Logger.debug("add")
		Ok(views.html.users.add(userForm))
	}

	def save = Action{implicit request =>
		Logger.debug(s"save!!")
		val user = userForm.bindFromRequest.get
		Users.create(user)
		Redirect(routes.Application.index)
	}
	def edit(id:Int) = Action {
		Logger.debug("edit")
		Ok(views.html.users.edit(id, userForm.fill(Users.find(id))))
	}
	def update(updateid: Int) = Action {implicit request =>
		Logger.debug("update")
		val user = userForm.bindFromRequest.get
		val newuser = user.copy(id = Some(updateid))
		Users.update(newuser)
		Redirect(routes.Application.index)
	}
	def delete(id: Int) = Action {implicit request =>
		Logger.debug("delete")
		Users.delete(id)
		Redirect(routes.Application.index)
	}

	def all = Action  { implicit request =>
		Logger.debug(s"all")
		Logger.debug(s"this is all()")
		val users = Users.all
		Logger.debug(users.toString)
//
//		users.map(user => Json.toJson(user))
//		Logger.debug(users.toString())

//		Ok(Json.toJson(users))
		Ok(Json.toJson(Map("status" -> "OK", "message" -> ("Hello"))))
	}
}
