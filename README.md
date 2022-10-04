# GUIA DE BACKEND para ser feliz :D
1- Crear carpetas de src: 
controllers: products.js
models: Products.js
routes: products.js, index.js

2- index.js afuera de src
.gitignore
.env

3- npm init

4- npm install

5- npm install express
agregar node_modules a gitignore
https://expressjs.com/en/starter/installing.html

6- Probar server
En index.js {
    const express = require('express')
    const app = express()
    const port = 3000

    app.get('/', (req, res) => {
    res.send('Hello World!')
    })
    app.listen(3000, () => {
        console.log('Example app listening on port 4000')
    })
}
En la terminal correr: node inde.js
Cuidado en donde está parada la terminal (en la carpeta que contenga index.js)

7- Crear contenido de controllers: products.js

8- Crear contenido de models: products.js

9- Instanciar en routes el contenido de controllers

10- En src: index.js crear métodos de los verbos (get, post, put, delete)

11-  npm install mongoose
y agregamos dependencias a models y index.js(src)

12- instalamos nodemon
https://www.npmjs.com/package/nodemon
en package.json: start con nodemon en scripts
"start": "nodemon ./src/index.js",
"dev": "nodemon ./src/index.js",

13- instalamos dotenv en la terminal:
    npm install dotenv --save
y en index.js(src):
    require("dotenv").config();

14- en .env agregamos el PORT y la DATABASE_URL del mongodb