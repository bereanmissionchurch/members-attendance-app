Member Attendance Application
================================

## Introduction
This project keeps a roster of group members and tracks their attendance. Using the data, dashboards with statistics will indicate possible actions to take.


## Install
1) Before running the site locally, install [Homebrew](http://brew.sh/) if you haven't. Once you have Homebrew on your machine, install Typesafe's Activator:

    $ brew install typesafe-activator
    
Check to see that Activator has been installed:

    $ which activator
    
This project uses a Postgres database, so install that if you don't have it:
    
    $ brew install postgresql

2) Create a database called 'members-attendance-app':
    
    $ createdb members-attendence-app

3) Navigate to a folder you want the project to reside in and clone the project:

    $ git clone https://github.com/bereanmissionchurch/members-attendance-app.git
    
4) Go into the project folder:

    $ cd members-attendance-app

5) Run activator:

    $ activator run

6) Once you see "Server started, use Ctrl+D ...", go to ```http://localhost:9000``` on a webpage




 