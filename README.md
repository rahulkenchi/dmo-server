To setup the server you need to do the following : - 

RUN command :- 
"npm install"
this command will install modules required to run server.

have mongodb and mongo compass install in your system .

\
RUN command :- 
"npm start"
this will start your server

Now open mongo compass you will find a database named "test123" and two collections named "tenantschema" and "userschema" , open collection and import the "tenantList.json" and "userList.json" file in "tenantschema" and "userschmema" respectively.

you have to restart the server now .
So stop the server and start server again via "npm start"

NOTE :- you can change PORT number in env file a
        you can change database name via DATABASE_URL = "mongodb://localhost:27017/database_name" where database_name is your actual database name .