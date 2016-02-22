Member Attendance Application
================================

## Introduction
This project keeps a roster of group members and tracks their attendance. Using the data, dashboards with statistics will indicate possible actions to take.


## Install
1) Before running the site locally, install [Homebrew](http://brew.sh/) if you haven't. Once you have Homebrew on your machine, install Typesafe's Activator:

    $ brew install typesafe-activator

Check to see that Activator has been installed:

    $ which activator

2) Navigate to a folder you want the project to reside in and clone the project:

    $ git clone https://github.com/bereanmissionchurch/members-attendance-app.git
    
3) Go into the project folder:

    $ cd members-attendance-app

4) Run activator:

    $ activator run

5) Once you see "Server started, use Ctrl+D ...", go to ```http://localhost:9000``` on a webpage



## Install Front End automation with bower and gulp
1) Make sure you have node installed (we need npm which comes with node).

    $ node -v

If you see a version number, great! Otherwise, just download it from nodejs.org

2) Navigate to the root of the project, we want to now install bower globally.

    $ npm install -g bower
	
If there's an error about permissions, put sudo in front of everything. Will have to type in your password.

	$ sudo npm install -g bower
    
3) Let's install some packages we'll need:

    $ bower install
	
4) Let's also install CSS preprocessor. If you got a mac, you should have ruby already installed, if not you can download it at ruby-lang.org. Let's first make sure we have the latest and greatest.

    $ ruby update --system
	
Now let's install compass

	$ gem install compass
	
Again, if you run into permission errors, add sudo.

	$ sudo gem install compass
	
You can check to see if you have compass by finding the version number

	$ compass -v
	
Instal Susy. Add sudo if permissions needed.

	$ gem install susy
	
Install breakpoint. Add sudo if permissions needed.

	$ gem install breakpoint

5) Now let's install Gulp. First Let's install it globally, before we do it locally.

	$ npm install -g gulp
	
Make sure you're in the root directory of the project and type:

	$ npm install gulp --save-dev
	
Let's also install some important dependencies:

	$ npm install gulp-plumber gulp-uglify browser-sync gulp-compass gulp-autoprefixer del gulp-rename --save-dev
	
6. Now let's have gulp automate things for us while we develop:
	
	$ gulp
	
7. Now whenever you make any changes to .scss or .js files Gulp should automate for us a minified and autoprefixed css and js. :)


Enjoy,
Jsub




 