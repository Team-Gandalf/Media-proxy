# Steamy
This is the proxy server for the Front End Capstone done at Hack Reactor. Our team replicated the Steam website, and this is a simplified version of a product page.

I built the Media/Summary component (https://github.com/BHamp/Media) and this server.

![app demo](Steamy.gif)

## Getting Started
All of the components are being hosted via AWS, so the proxy needs minimal work to get started. Simply install the dependencies and start the server.

### Installation
```sh
npm install (installs necessary dependencies)
npm start
```
The component can be accessed at http://localhost:2112/?=1. Change the id number after ?= to any number between 1 and 100 to access different games. It is currently setup to use sample data, but a curated game page can be accessed with id 237.
