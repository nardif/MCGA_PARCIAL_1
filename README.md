# PARCIAL 1 MCGA CRUD BACKEND
### Consigna:
Crear un servidor web usando Node.js, NPM y Express.js respetando la arquitectura API REST. Debe contar
con una serie de endpoints que contemple las acciones básicas de un CRUD de productos. Los datos de los
productos afectados deben estar persistidos en un base de datos NoSQL, usando Mongoose como ODM y
Mongo Atlas como servicio en la nube en donde alojar la base de datos.
El proyecto debe estar ordenado en carpetas y archivos respetando las estructuras dadas en clase.

Crear un esquema de mongoose para los productos el cual tenga las siguientes propiedades. Cada una debe
contar con al menos la validación de tipo de dato:
- id
- name
- price
- stock
- description

Crear 6 endpoints respetando los métodos HTTP para manejar el CRUD:
- GET: para hacer ping al servidor y que devuelva 'OK' en caso que el server y la BD estén levantadas
- GET: para conseguir la lista entera de productos
- GET: para conseguir un producto por name O id
- POST: para agregar un producto a la BD
- DELETE: para eliminar un producto
- PUT: para editar algún campo de un producto

El proyecto debe manejar variables de entorno utilizando la librería dotEnv, en donde deben ir los valores
sensibles que no deben ser subidos al repositorio, como por ejemplo el string de conexión a la base de
datos.

## GUIA DE BACKEND para desarrollar este proyecto
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

15- configuramos modelo de datos, su correspondiente controladora y las rutas.
