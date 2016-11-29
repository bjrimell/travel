# meany
a basic mean stack app
MEAN QuickStart Instructions (MAC OSX)

# backend setup
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

# frontend setup
