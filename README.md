# weather-microservice

What the project does 
- This is for CS361 microservice for partner's project
- This is a weather microservice where it will provide the weather information of Alexandria, VA, where all pet events are happening 


How users can get started with the microservice
- To get started, start withd node app.js


There are two ways to show the temperature
- go to app.js
- data.current.temp_c shows the temperature in Celsius  
- data.current.temp_f shows the temperature in Farenheit

  

How to programmatically request data 
- Once the service is running, the request is made automatically when user load the page, and user's HTTP GET request will be sent to the microservice, which will send request to the weather API using the API key and the zip code, if the response is successful, the service will process the received data and sent it back to the user with the weather information

UML sequence diagram that clearly communicates how to programmatically request and programmatically receive data from the microservice you implemented

[![WX20230730-225135.png](https://i.postimg.cc/1X09fTqq/WX20230730-225135.png)](https://postimg.cc/bSJX5mLy)

