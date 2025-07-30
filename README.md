# todo-app-backend

This App is made with Express.js with Prisma and MySQL

Before starting, ensure you have:

Node.js (version 18 or higher) and npm installed. Download from nodejs.org
MySQL (version 8 or higher) installed and running locally. Download from mysql.com

Gettings started:

1. clone this repo
2. ``cd todo-app-backend ``
3. run  
`` 
    npm init -y
    npm install express @prisma/client cors
    npm install --save-dev typescript @types/express @types/cors @types/node ts-node-dev prisma 
``

4. at folder root level create a ".env" file
5. add ``` DATABASE_URL="mysql://root:password@localhost:3306/todo_db" ```
6. update 'root' for MySQL user and password for your MySQL password
7. run `` mysql -u <mysql-user> -p ``
8. execute `` CREATE DATABASE todo_db; ``
9. run ``npx prisma migrate dev --name init ``
10. run `` npm run dev ``

now time to set up the frontend which is here: https://github.com/justinlaos/todo-app-frontend

