
# About this App
    
Want a Easy to Use planner that encourages discussions without alienating your fitness?  The goal of this app is to improve your production levels without ignoring your fitness.  It's easy to get lost in the computer screen while having the gym on your backlog for what seems like forever.  Whether its tracking a discussion by making sure that time efficiency is a priority, planning a simple to do list, planning an Agile Sprint or keeping track of the muscle groups that you've worked out in the week... This app aims to weave them all together into something easy to use right from the web.  All you need is a Browser and your good to go.  This project is meant to help people.

- Link to site -

For Developers

# Getting Started

If you'd like to hit the ground running make sure that you have Docker installed on your computer.  

Navigate to the directory that has the Dockerfile in it and run the command: 

<docker compose up>

# What is Docker?

Think of Docker as it's own individual computer within your computer.  In its world, it's capable of loading all of the neccessary settings needed to run the app without having to worry about what Operating System your running on.  

For example, Let's say that you write an application on Linux.  You might use the terminal and a lot of different commands to setup your app.  You might have different packages installed on your computer.  

Now let's say that you want to continue working on your app but from your Windows desktop.  You might find out that your missing things like git.  You might not have some of the dependencies setup like Nodejs.  You might have to spend a good amount of time configuring you app each and every single time that you work on a different project from different computers.  

Docker is here to help reduce the time spent on that process.  Configuring Docker the first time has its own learning curve.  But once its done on your computer, your apps can run all the dependencies that ran your app as though it were on any computer.  Docker takes a snapshot image of it and makes it so that your computers can run the apps regardless of their operating systems.
    
# Docker for Linux

Installing on linux Fedora
https://docs.docker.com/desktop/install/fedora/

Once you go through the first step it's going to ask you to install the .rpm file.
To do this navigate to the directory it downloaded into.
Do not unzip or extract the files.

Instead run the command that the docker docs say to run on step 3.

    Note:
        Replace version, without the arrows, with the version the .rpm file has from the download.
        Do the same thing for arch.  Arch just refers to the architecture your operating system is using.  You can find this by typing in the command. 
            <uname -m>


# Docker for Windows

Installing on Windows 10
https://docs.docker.com/desktop/install/windows-install/

Using powershell to initiate docker commands.  You'll need to run the powershell as with Admin Rights. Otherwise you won't be able to access commands like <docker compose up>

If your having trouble using git to push or pull things from github.  You can download gits GUI application.  It has its own terminal (linux based) that allows you to run some git commands on your pc.  Use this if your having a hard time getting git to work locally on your powershell (I use it).

    
# Accessing the Application within Docker

Open up the Docker Desktop GUI and go into the containers tab.  Your app will have a drop down arrow.  Click it and it'll show an app image running on a port.  

Click the port (It's a link) and it should open up the web app in your local browser.

# Troubleshooting Start Issues (Page not Loading)
    
If the container is running but throws a page loading error there is a chance that you might have another server running on your local machine.  If this happens try to close the other server and then run the container.  If the react site doesn't load up then try to change the port settings on the container manually from inside of Docker-Desktop.

### Changing the Port Settings

Go to the images tab on Docker Desktop.  Then, in the local tab, select the image associated with your app by clicking on the underlined name.  

It'll open up a screen with a lot of information on it.  Look at the top of the screen and you'll see a box that says 'recommended fixes' and next to it you'll see a blue button that says Run with a drop down arrow next to it.  Click on the Run button.

It'll open up a new screen that displays Optional Settings with a drop down arrow.  Click the drop down arrow and look for the category that says ports.  Enter a new port like 8000.  This will run the application on that port and should fix the problem (If other ports are already being used.).  

If you have to run any tests or get requests to the site make sure that your code is also making the correct calls to the correct URL's.

# What are all the details in the compose.yaml file?  

In a docker-compose.yaml file, everything indented under the services: section is considered as a separate service definition. Each service definition represents an individual container in your multi-container application.

Each service definition consists of properties like image, ports, environment, volumes, etc., which are specific to that particular container. These properties help configure the behavior of the container, including which image to use, which ports to expose, environment variables to set, volumes to mount, and more.

For example, in the following docker-compose.yaml file:
    version: '3'

services:
  web:
    image: nginx:latest
    ports:
      - "80:80"
  database:
    image: mysql:latest
    environment:
      MYSQL_ROOT_PASSWORD: example_password

There are two service definitions: web and database. The web service uses the nginx:latest image and maps port 80 of the container to port 80 of the host machine. The database service uses the mysql:latest image and sets the MYSQL_ROOT_PASSWORD environment variable.

Each service definition is isolated and represents a separate container in your application, allowing you to manage and orchestrate them together using Docker Compose.

# Jenkins

Jenkins is a great tool for CI/CD - Continuous Integration and Development - and it runs as a Daemon on your computer or docker container.  There are different ways to install it depending on your operating system or if you plan to use it within Docker (Which makes things a lot easier).  

Installation documentation can be found below:

>https://www.jenkins.io/doc/book/installing/linux/>

# What it does?

Jenkins works as a server whether locally or within a Container.  It has a great GUI to make things go really smooth.  A small amount of account management is required (locally stored) and once its up and running you can:
  execute script chains that pull in an associated github branch repository
  setup virtual environments and install the packages from a requirements.txt file
  execute a pytest (assuming the venv had it installed)
  add more steps to the build process

  If any step doesn't work the build is considered a Fail and Jenkins keeps a log of the output and names of the trial runs.

# Before you install Jenkins (How to install Java Dependencies) Choose Long Term or Weekly

# Long term support Java (Recommended Stable Version)

sudo wget -O /etc/yum.repos.d/jenkins.repo \
    https://pkg.jenkins.io/redhat-stable/jenkins.repo
sudo rpm --import https://pkg.jenkins.io/redhat-stable/jenkins.io-2023.key
sudo dnf upgrade

# Add required dependencies for the jenkins package
sudo dnf install java-17-openjdk
sudo dnf install jenkins
sudo systemctl daemon-reload

# Weekly Release Java

sudo wget -O /etc/yum.repos.d/jenkins.repo \
    https://pkg.jenkins.io/redhat/jenkins.repo
sudo rpm --import https://pkg.jenkins.io/redhat/jenkins.io-2023.key
sudo dnf upgrade

# Add required dependencies for the jenkins package
sudo dnf install java-17-openjdk
sudo dnf install jenkins

# How to start Jenkins on Fedora

Enable Jenkins:
sudo systemctl enable jenkins

Start Jenkins:
sudo systemctl start jenkins

Check Status of Jenkins:
sudo systemctl status jenkins

# Run Jenkins in the Browser

Open up your browser and go to:

localhost:8080

This should take you to the **Login Screen** 

By default the logins are unique to each individual computer --Meaning that you'll have to configure your username and password per computer -- unless you use an advanced setup in a cloud or network structure (This scope of this project does not use this at this time but that may change in the future).

# What to do after Jenkins is installed

Configure a build from a repository URL on Github

Steps coming soon...


# Extra Notes

- You started a backend
    created an env
    made its own folder
    didnt finish populating the env with the right packages
    you did install flask cors
    you made a requirements page
    You structured your folder so that it is heroku friendly when needed...
    It will be the contents of build (manaully made) that get pushed.  Heroku asks for env, files etc...

- You need to run the backend flask app you created and test it using a test client pytest.
- After that you can push the backend to heroku for a build.  Once thats done you'll be able to push the front end.  
- But before doing that you need to create the front end and run a basic test connection.

dont forget to link the two. 

- started a front end folder
     you did nothing but make a folder.

Resources for MongoDb and Python with Pandas

https://learn.mongodb.com/learn/course/mongodb-crud-operations-in-python/lesson-1-working-with-mongodb-documents-in-python/learn?client=customer


LINUX
## You need to get HOW TO CONFIG the front end 
## You need to get HOW TO CONFIG the back end 

DEVELOPMENT
## You need to get HOW TO START the front end - REACT

## You need to get HOW TO START the back end - FLASK

If you want to run a backend to use for testing purposes.  Use the file named mock_server.py as an example.  Then activate it by entering the following:

python -m flask --app mock_server run

## You need to get HOW TO START the testing - pytest

PRODUCTION
## You need to get HOW TO START the production front end - HEROKU
## You need to get HOW TO START the production back end - AWS

npm install @testing-library/react @testing-library/jest-dom
npm install @babel/preset-env @babel/preset-react @babel/core babel-jest --save-dev

Both config files should be placed in the root of the React application folder.  Not in the src.

jest.config.js
module.exports = {
    transform: {
      '^.+\\.[t|j]sx?$': 'babel-jest',
    },
    testEnvironment: 'jsdom',
  };
  
babel.config.js
module.exports = {
    presets: [
      '@babel/preset-env',
      '@babel/preset-react'
    ],
  };
  