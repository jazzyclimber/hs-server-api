#hs-server-test

This project is just a simple way to set up a basic "proxy-server" for getting into the Hubspot API

Steps for receving client side data:

- Client calls a path on custom server ("/api") in this case.
- Server then makes an api call using the stored cridentials.
- Server sends the response back to the client. 

Next step would be to create an .env file and utilize OAuth 2 protocol instead of an API Key. 

***Note this is a node.js Server 
