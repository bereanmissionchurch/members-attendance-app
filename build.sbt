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
  "org.webjars" % "requirejs" % "2.1.11-1",
//  "com.typesafe.slick" %% "slick" % "3.1.1",
//  "org.slf4j" % "slf4j-nop" % "1.6.4",
//  "org.postgresql" % "postgresql" % "9.3-1102-jdbc4"
  "com.typesafe.slick" %% "slick" % "2.1.0",
  "com.typesafe.play" %% "play-slick" % "0.8.0",
  "org.postgresql" % "postgresql" % "9.3-1102-jdbc4"
)

//javacOptions ++= Seq("-source", "1.7", "-target", "1.7")
//scalacOptions := Seq("-target:jvm-1.7")
//scalacOptions := Seq(s"-target:jvm-1.7")
//scalacOptions += "-target:jvm-1.7"
//javaHome := Some(file("/Library/Java/JavaVirtualMachines/jdk1.7.0_80.jdk/Contents/Home"))

resolvers += "scalaz-bintray" at "http://dl.bintray.com/scalaz/releases"

// Play provides two styles of routers, one expects its actions to be injected, the
// other, legacy style, accesses its actions statically.
//routesGenerator := InjectedRoutesGenerator
