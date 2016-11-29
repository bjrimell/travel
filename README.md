MEAN QuickStart Instructions (MAC OSX)



These are additional notes and explanations to assist with the very good instructions at https://scotch.io/tutorials/setting-up-a-mean-stack-single-page-application

- Create a new folder with project name
- In that folder, create a file called package.json containing your list of project dependencies e.g.

    {
      "name": "starter-node-angular",
      "main": "server.js",
      "dependencies": {
        "express" : "~4.5.1",
        "mongoose" : "~3.8.0",
        "body-parser" : "~1.4.2",
        "method-override" : "~2.0.2"        
      }
    }

- Then simply open up a terminal in the same folder and type npm install.
- Check that the dependencies you've stated have now been downloaded and appear in a node_modules folder. Easy!
- Create a server.js file in the same parent directory. This is the Node Application itself, in which you instantiate the app,  determine ports, determine DB connection, define routes, and set certain parameters such as what the location of the static files will be.

- Install Homebrew on MAC by running the following command in the terminal: 
	/usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"
- Ensure Homebrew is up to date by running the following command: brew update
- Install MongoDB locally by running the following command: brew install mongodb
- Create the Mongo data directory  by running the following command: sudo mkdir -p /data/db
- Ensure that the current user has read and write perrmissions to the above directory
- Run MongoDB by running the following command: mongod
- The default installation for mongo when installed via Homebrew is /usr/local/var/mongodb, so cd into here in a new terminal window
- Run the following command to open the mongo shell: mongo
- You should be connected to a database called test. Test this by running the following command: db
- Mongo will return the name of the database you are currently connected to (which is called test).
- Create a new folder at app/models and create a new file there called nerd.js. NERD stands for Node, Express, React, and D3 - common Javascript libraries. For us, Nerd is a bit of data we are modelling, and nerd.js will be where a model used for handling CRUD operations is defined.
- In nerd.js, get the mongoose module and use it to define our nerd model
- The app folder that has been created can be used in future for setting up other models, controllers, routes, and any other Node backend stuff required.
- Add another file in app called routes.js. This file contains the definitions for routes that we will be using in our app, and specifically at the moment for the CRUD operations and a default route for all other requests. For example, if an API GET endpoint at <application_web_address>/api/nerds should retrieve all nerds from the database, we need to tell our app exactly what to do when that address is visited. Routing is a common aspect of modern web dev which can and should be understood before progressing further.
- The backend is now setup and ready to be used. We just need to create a very simple view to test what we've done out. Create a new directory at public/views.
- Create a file at the above location called index.html and use basic HTML to show some Hello World text.
- In a terminal window, type the following command to start node: node server.js
- This starts the application as defined in server.js (i.e. to use the 4 modules express, app, bodyParser, methodOverride, and to initiate the db connection etc.)
- Test this has worked by visiting http://localhost:8080 in your web browser. You should see your back HTML view displayed. The reason this view is displayed is because in our routes.js file we have determined that the default thing to do when an undefined url is hit is to open index.html (app.get('*'))
- Our backend setup work is now complete! We are using Node running locally  as a web server to serve up an HTML page as a website.

# Front End Setup

- We will use Bower to grab the utilities we need.
- Install Bower globally using NPM (that we installed earlier) by running the following command: sudo npm install -g bower. The -g ensures it is installed for use globally and not just where you have run this command from.
- When we use Bower within our new app, we want to define what tools/components/software we want, and also where they will be installed. To do this, we create a new file at the top level called .bowerrc and another one called bower.json
- In .bowerrc we define the installation location and in bower.json we state the things we want to install, in a very similar fashion to the packages.json file created and used earlier. Examples of things we might want to install are FontAwesome, Bootstrap, Angular, custom CSS files etc. e.g.:
- {
    "name": "starter-node-angular",
    "version": "1.0.0",
    "dependencies": {
        "bootstrap": "latest",
        "font-awesome": "latest",
        "animate.css": "latest",
        "angular": "latest",
        "angular-route": "latest"   
    }
}
- Now you have defined what you want and where you want it, open a new terminal window in the root of your application and type the following command: bower install
- Observe that the terminal will use bower to pull down from the web all the files you have listed in your bower.json file. Also check that they are installed in the directory you defined in .bowerrc
- Now we are moving onto the AngularJS world. Create two files called MainCtrl.js and NerdCtrl.js at public/js/controllers
- Having created these two controllers, we also want to create a service. Create a directory at public/js/services and n that location create a new file called NerdService.js
- The NerdService  can be setup to get Nerd data from the DB by calling the API endpoint we setup earlier at /api/nerds, when we created the routing.js file. We can also tell it to be used to delete Nerd data, or to create a new one. It is a service file that we can rely on to talk with the database layer.
- As it stands, the only thing close to working so far, using what we have now setup in the nerd service, is the Get function, because we have setup a route for that. We haven't setup any routing for the other functionality anywhere.
- 