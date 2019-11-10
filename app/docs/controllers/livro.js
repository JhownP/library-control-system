/**
* @swagger
* /api/v1/unip/biblioteca/livros:
*   get:
*     tags:
*       - Livro
*     summary: Livros Get
*     responses:
*       200:
*         description: OK
*         examples:
*           application/json:
*            {
*              "code": 200,
*              "status": "success",
*              "data": {
*                "total": "10",
*                "perPage": 20,
*                "page": 1,
*                "lastPage": 1,
*                "data": [
*                  {
*                    "id": 1,
*                    "titulo": "tuj",
*                    "quantidade": 1389,
*                    "foto": "1d41965fc9d237ee16a44e185.jpg",
*                    "created_at": "2019-11-09 15:27:32",
*                    "updated_at": "2019-11-09 15:27:32",
*                    "autor": [
*
*                    ]
*                  },
*                  {
*                    "id": 2,
*                    "titulo": "venedmi",
*                    "quantidade": 518,
*                    "foto": "3814964c64e27b791affe32d7.jpg",
*                    "created_at": "2019-11-09 15:27:32",
*                    "updated_at": "2019-11-09 15:27:32",
*                    "autor": [
*
*                    ]
*                  },
*                  {
*                    "id": 3,
*                    "titulo": "sacu",
*                    "quantidade": 621,
*                    "foto": "dcbb3610fce066e2b354ad114.jpg",
*                    "created_at": "2019-11-09 15:27:32",
*                    "updated_at": "2019-11-09 15:27:32",
*                    "autor": [
*                      {
*                        "id": 3,
*                        "nome": "Vincent Vasquez",
*                        "created_at": "2019-11-09 15:27:32",
*                        "updated_at": "2019-11-09 15:27:32",
*                        "pivot": {
*                          "autor_id": 3,
*                          "livro_id": 3
*                        }
*                      }
*                    ]
*                  },
*                  {
*                    "id": 4,
*                    "titulo": "zuwad",
*                    "quantidade": 1008,
*                    "foto": "a07113c853908b12a92e28b9f.jpg",
*                    "created_at": "2019-11-09 15:27:32",
*                    "updated_at": "2019-11-09 15:27:32",
*                    "autor": [
*                      {
*                        "id": 4,
*                        "nome": "Adrian Singleton",
*                        "created_at": "2019-11-09 15:27:32",
*                        "updated_at": "2019-11-09 15:27:32",
*                        "pivot": {
*                          "autor_id": 4,
*                          "livro_id": 4
*                        }
*                      }
*                    ]
*                  },
*                  {
*                    "id": 5,
*                    "titulo": "dat",
*                    "quantidade": 1365,
*                    "foto": "66dcf14218561aa159f2ba4f5.jpg",
*                    "created_at": "2019-11-09 15:27:32",
*                    "updated_at": "2019-11-09 15:27:32",
*                    "autor": [
*                      {
*                        "id": 5,
*                        "nome": "Marian Simmons",
*                        "created_at": "2019-11-09 15:27:32",
*                        "updated_at": "2019-11-09 15:27:32",
*                        "pivot": {
*                          "autor_id": 5,
*                          "livro_id": 5
*                        }
*                      }
*                    ]
*                  },
*                  {
*                    "id": 6,
*                    "titulo": "ebumactuw",
*                    "quantidade": 459,
*                    "foto": "1a6211a11c648877a85028cbc.jpg",
*                    "created_at": "2019-11-09 15:27:32",
*                    "updated_at": "2019-11-09 15:27:32",
*                    "autor": [
*                      {
*                        "id": 6,
*                        "nome": "Mayme Lowe",
*                        "created_at": "2019-11-09 15:27:32",
*                        "updated_at": "2019-11-09 15:27:32",
*                        "pivot": {
*                          "autor_id": 6,
*                          "livro_id": 6
*                        }
*                      }
*                    ]
*                  },
*                  {
*                    "id": 7,
*                    "titulo": "nokle",
*                    "quantidade": 1796,
*                    "foto": "e389c3efb810a1d9695e20255.jpg",
*                    "created_at": "2019-11-09 15:27:32",
*                    "updated_at": "2019-11-09 15:27:32",
*                    "autor": [
*                      {
*                        "id": 7,
*                        "nome": "Cynthia Hall",
*                        "created_at": "2019-11-09 15:27:32",
*                        "updated_at": "2019-11-09 15:27:32",
*                        "pivot": {
*                          "autor_id": 7,
*                          "livro_id": 7
*                        }
*                      }
*                    ]
*                  },
*                  {
*                    "id": 8,
*                    "titulo": "fud",
*                    "quantidade": 1121,
*                    "foto": "59c2a8165991cd0de3fe2c1c8.jpg",
*                    "created_at": "2019-11-09 15:27:32",
*                    "updated_at": "2019-11-09 15:27:32",
*                    "autor": [
*                      {
*                        "id": 8,
*                        "nome": "Fanny Holmes",
*                        "created_at": "2019-11-09 15:27:32",
*                        "updated_at": "2019-11-09 15:27:32",
*                        "pivot": {
*                          "autor_id": 8,
*                          "livro_id": 8
*                        }
*                      }
*                    ]
*                  },
*                  {
*                    "id": 9,
*                    "titulo": "jebpedsa",
*                    "quantidade": 670,
*                    "foto": "e552eaa18f6ec01fffe32565c.jpg",
*                    "created_at": "2019-11-09 15:27:32",
*                    "updated_at": "2019-11-09 15:27:32",
*                    "autor": [
*                      {
*                        "id": 9,
*                        "nome": "Christian Norton",
*                        "created_at": "2019-11-09 15:27:32",
*                        "updated_at": "2019-11-09 15:27:32",
*                        "pivot": {
*                          "autor_id": 9,
*                          "livro_id": 9
*                        }
*                      }
*                    ]
*                  },
*                  {
*                    "id": 10,
*                    "titulo": "fusre",
*                    "quantidade": 1397,
*                    "foto": "f7c3b042e619b14c26c36d5df.jpg",
*                    "created_at": "2019-11-09 15:27:32",
*                    "updated_at": "2019-11-09 15:27:32",
*                    "autor": [
*                      {
*                        "id": 10,
*                        "nome": "Willie Russell",
*                        "created_at": "2019-11-09 15:27:32",
*                        "updated_at": "2019-11-09 15:27:32",
*                        "pivot": {
*                          "autor_id": 10,
*                          "livro_id": 10
*                        }
*                      }
*                    ]
*                  }
*                ]
*              }
*            }
*
*/

/**
* @swagger
* /api/v1/unip/biblioteca/livro:
*   post:
*     tags:
*       - Livro
*     summary: Livro Post
*     parameters:
*       - name: titulo
*         description: Tituto do Livro
*         in: query
*         required: true
*         type: string
*       - name: quantidade
*         description: Quantidade de Livros
*         in: query
*         required: true
*         type: string
*       - name: foto
*         description: Caminho da foto do Livro
*         in: query
*         required: false
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
* /api/v1/unip/biblioteca/livro/{id}:
*   patch:
*     tags:
*       - Livro
*     summary: Livro Patch
*     parameters:
*       - name: id
*         description: ID do Livro
*         in: query
*         required: true
*         type: int
*       - name: titulo
*         description: Tituto do Livro
*         in: query
*         required: false
*         type: string
*       - name: quantidade
*         description: Quantidade de Livros
*         in: query
*         required: false
*         type: string
*       - name: foto
*         description: Caminho da foto do Livro
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
* /api/v1/unip/biblioteca/livro/{id}:
*   get:
*     tags:
*       - Livro
*     summary: Livro Get
*     parameters:
*       - name: id
*         description: ID do Livro
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
*                   "titulo": "tuj",
*                   "quantidade": 1389,
*                   "foto": "1d41965fc9d237ee16a44e185.jpg",
*                   "created_at": "2019-11-09 15:27:32",
*                   "updated_at": "2019-11-09 15:27:32"
*                 }
*               }
*/

/**
* @swagger
* /api/v1/unip/biblioteca/livro/{id}:
*   delete:
*     tags:
*       - Livro
*     summary: Livro Delete
*     parameters:
*       - name: id
*         description: ID do Livro
*         in: query
*         required: true
*         type: string
*     responses:
*       200:
*         description: OK
*         examples:
*            application/json:
*              {
*               "code": 200,
*               "status": "success",
*               "data": {
*                   "id": 1,
*                   "titulo": "tuj",
*                   "quantidade": 1389,
*                   "foto": "1d41965fc9d237ee16a44e185.jpg",
*                   "created_at": "2019-11-09 15:27:32",
*                   "updated_at": "2019-11-09 15:27:32"
*               }
*           }
*/