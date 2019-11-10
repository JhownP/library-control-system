/**
* @swagger
* /api/v1/unip/biblioteca/autores:
*   get:
*     tags:
*       - Autor
*     summary: Autor Get
*     responses:
*       200:
*         description: OK
*         examples:
*           application/json:
*
*               {
*                 "code": 200,
*                 "status": "success",
*                 "data": {
*                   "total": "10",
*                   "perPage": 20,
*                   "page": 1,
*                   "lastPage": 1,
*                   "data": [
*                     {
*                       "id": 1,
*                       "nome": "Marvin Figueroa",
*                       "created_at": "2019-11-09 15:27:32",
*                       "updated_at": "2019-11-09 15:27:32",
*                       "livro": [
*                         {
*                           "id": 1,
*                           "titulo": "tuj",
*                           "quantidade": 1389,
*                           "foto": "1d41965fc9d237ee16a44e185.jpg",
*                           "created_at": "2019-11-09 15:27:32",
*                           "updated_at": "2019-11-09 15:27:32",
*                           "pivot": {
*                             "livro_id": 1,
*                             "autor_id": 1
*                           }
*                         }
*                       ]
*                     },
*                     {
*                       "id": 2,
*                       "nome": "Rebecca King",
*                       "created_at": "2019-11-09 15:27:32",
*                       "updated_at": "2019-11-09 15:27:32",
*                       "livro": [
*                         {
*                           "id": 2,
*                           "titulo": "venedmi",
*                           "quantidade": 518,
*                           "foto": "3814964c64e27b791affe32d7.jpg",
*                           "created_at": "2019-11-09 15:27:32",
*                           "updated_at": "2019-11-09 15:27:32",
*                           "pivot": {
*                             "livro_id": 2,
*                             "autor_id": 2
*                           }
*                         }
*                       ]
*                     },
*                     {
*                       "id": 3,
*                       "nome": "Vincent Vasquez",
*                       "created_at": "2019-11-09 15:27:32",
*                       "updated_at": "2019-11-09 15:27:32",
*                       "livro": [
*                         {
*                           "id": 3,
*                           "titulo": "sacu",
*                           "quantidade": 621,
*                           "foto": "dcbb3610fce066e2b354ad114.jpg",
*                           "created_at": "2019-11-09 15:27:32",
*                           "updated_at": "2019-11-09 15:27:32",
*                           "pivot": {
*                             "livro_id": 3,
*                             "autor_id": 3
*                           }
*                         }
*                       ]
*                     },
*                     {
*                       "id": 4,
*                       "nome": "Adrian Singleton",
*                       "created_at": "2019-11-09 15:27:32",
*                       "updated_at": "2019-11-09 15:27:32",
*                       "livro": [
*                         {
*                           "id": 4,
*                           "titulo": "zuwad",
*                           "quantidade": 1008,
*                           "foto": "a07113c853908b12a92e28b9f.jpg",
*                           "created_at": "2019-11-09 15:27:32",
*                           "updated_at": "2019-11-09 15:27:32",
*                           "pivot": {
*                             "livro_id": 4,
*                             "autor_id": 4
*                           }
*                         }
*                       ]
*                     },
*                     {
*                       "id": 5,
*                       "nome": "Marian Simmons",
*                       "created_at": "2019-11-09 15:27:32",
*                       "updated_at": "2019-11-09 15:27:32",
*                       "livro": [
*                         {
*                           "id": 5,
*                           "titulo": "dat",
*                           "quantidade": 1365,
*                           "foto": "66dcf14218561aa159f2ba4f5.jpg",
*                           "created_at": "2019-11-09 15:27:32",
*                           "updated_at": "2019-11-09 15:27:32",
*                           "pivot": {
*                             "livro_id": 5,
*                             "autor_id": 5
*                           }
*                         }
*                       ]
*                     },
*                     {
*                       "id": 10,
*                       "nome": "Willie Russell",
*                       "created_at": "2019-11-09 15:27:32",
*                       "updated_at": "2019-11-09 15:27:32",
*                       "livro": [
*                         {
*                           "id": 10,
*                           "titulo": "fusre",
*                           "quantidade": 1397,
*                           "foto": "f7c3b042e619b14c26c36d5df.jpg",
*                           "created_at": "2019-11-09 15:27:32",
*                           "updated_at": "2019-11-09 15:27:32",
*                           "pivot": {
*                             "livro_id": 10,
*                             "autor_id": 10
*                           }
*                         }
*                       ]
*                     }
*                   ]
*                 }
*               }
*
*/

/**
* @swagger
* /api/v1/unip/biblioteca/autor:
*   post:
*     tags:
*       - Autor
*     summary: Autor Post
*     parameters:
*       - name: nome
*         description: Nome do Autor
*         in: query
*         required: true
*         type: string
*     responses:
*       201:
*         description: OK
*         examples:
*           application/json:
*               {
*                  "code": 201,
*                  "status": "success",
*                  "data": {
*                      "nome": "Jeff",
*                      "created_at": "2019-11-09 18:52:44",
*                      "updated_at": "2019-11-09 18:52:44",
*                      "id": 12
*                  }
*               }
*/

/**
* @swagger
* /api/v1/unip/biblioteca/autor/{id}:
*   patch:
*     tags:
*       - Autor
*     summary: Autor Patch
*     parameters:
*       - name: id
*         description: ID do Autor
*         in: query
*         required: true
*         type: int
*       - name: nome
*         description: Nome do Autor
*         in: query
*         required: false
*         type: string
*     responses:
*       200:
*         description: Ok
*         example:
*          application/json:
*               {
*                  "code": 201,
*                  "status": "success",
*                  "data": {
*                      "nome": "Jeferson Oliver",
*                      "created_at": "2019-11-09 18:52:44",
*                      "updated_at": "2019-11-09 19:52:44",
*                      "id": 12
*                  }
*               }
*/

/**
* @swagger
* /api/v1/unip/biblioteca/autor/{id}:
*   get:
*     tags:
*       - Autor
*     summary: Autor Get
*     parameters:
*       - name: id
*         description: ID do Autor
*         in: query
*         required: true
*         type: int
*     responses:
*       200:
*         description: OK
*         examples:
*           application/json:
*               {
*                 "code": 200,
*                 "status": "success",
*                 "data": {
*                   "id": 1,
*                   "nome": "Marvin Figueroa",
*                   "created_at": "2019-11-09 15:27:32",
*                   "updated_at": "2019-11-09 15:27:32"
*                 }
*               }
*/

/**
* @swagger
* /api/v1/unip/biblioteca/autor/{id}:
*   delete:
*     tags:
*       - Autor
*     summary: Autor Delete
*     parameters:
*       - name: id
*         description: ID do Autor
*         in: query
*         required: true
*         type: string
*     responses:
*       200:
*         description: OK
*         examples:
*            application/json:
*              {
*                 "code": 200,
*                 "status": "success",
*                 "data": {
*                   "id": 2,
*                   "nome": "Rebecca King",
*                   "created_at": "2019-11-09 15:27:32",
*                   "updated_at": "2019-11-09 15:27:32"
*                 }
*              }
*/