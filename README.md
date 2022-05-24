## IP App
A web application that echoes out latitude and longitude information for a given IPv4 address. Implemented using react as my frontend framework. For this excercise, I did not need more than the ability to serve up a static html page with a single route to a function; however, using a framework has advantages in simplifying the code. Geolocation-db api was requested using axios through an external http request.

## Options to Run the App
This project is fully depolyed and can be found here (https://mhassantalpur.github.io/ip-app/).<br />Additionally, the project can be through the use of docker-compose:
1. Change to correct directory: cd ip-app
2. Build docker images: docker-compose build
3. run docker container in detached mode: docker-compose up -d

## Testing
* Manual testing can be done after launching the application and inputting a IPv4 (format 8.8.8.8) address into the form text field. Error handling is implented to account for most incorrect inputs.
* Automated testing is implemented through jest + react testing library via executing npm test - then input 'a' to run all tests.
