# Steamy
This is the proxy server that unites all the microservices into a single page application. Each of the four microservices were built by an individual engineer and then merged using this server. This was the final submission for my Hack Reactor Front-End Capstone project.

This app:
* Renders video and images to the webpage
* Utilizes conditional rendering to ensure different media types are handled appropriately
* Implements styled-components to allow seamless integration with other the other microservices

## Getting Started
All of the components are being hosted via AWS, so the proxy needs minimal work to get started. Simply install the dependencies and start the server.


### Installation
```sh
npm install (installs necessary dependencies)
npm start

The component can be accessed at http://localhost:2112/?=1. Change the id number after ?= to any number between 1 and 100 to access different games. It is currently setup to use sample data, but a curated game page can be accessed with id 237.
```