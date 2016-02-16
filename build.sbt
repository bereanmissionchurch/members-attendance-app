name := """members-attendence-app"""

version := "1.0-SNAPSHOT"

lazy val root = (project in file(".")).enablePlugins(PlayScala)

scalaVersion := "2.11.6"

libraryDependencies ++= Seq(
  jdbc,
  cache,
  ws,
//  specs2 % Test,
  "postgresql" % "postgresql" % "9.1-901-1.jdbc4",
  "org.webjars" % "angularjs" % "1.4.9",
  "org.webjars" % "requirejs" % "2.1.11-1"
)

resolvers += "scalaz-bintray" at "http://dl.bintray.com/scalaz/releases"

// Play provides two styles of routers, one expects its actions to be injected, the
// other, legacy style, accesses its actions statically.
//routesGenerator := InjectedRoutesGenerator
