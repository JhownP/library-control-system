/**
* @swagger
* /api/v1/unip/biblioteca/usuarios:
*   get:
*     tags:
*       - Usuario
*     summary: Usuario Get
*     responses:
*       200:
*         description: Ok
*         examples:
*           application/json:
*               {
*                 "code": 200,
*                 "status": "success",
*                 "data": {
*                   "total": "5",
*                   "perPage": 20,
*                   "page": 1,
*                   "lastPage": 1,
*                   "data": [
*                     {
*                       "id": 1,
*                       "nome": "Leonard Parker",
*                       "email": "lilardin@ocas.sc",
*                       "senha": "$2a$10$VV2YmCT6azS0vzFt/4VucONZhcI6lvnxOTrqttx/1YYRQq928QQB.",
*                       "telefone": "(689) 952-3995",
*                       "created_at": "2019-11-09 15:27:32",
*                       "updated_at": "2019-11-09 15:27:32"
*                     },
*                     {
*                       "id": 2,
*                       "nome": "Marie Hayes",
*                       "email": "pub@did.sm",
*                       "senha": "$2a$10$c70CgkR41JYJt.T6J5M5su73bmTSNKQv19w1fpIi55Vxha4wtpY6y",
*                       "telefone": "(278) 408-3449",
*                       "created_at": "2019-11-09 15:27:32",
*                       "updated_at": "2019-11-09 15:27:32"
*                     },
*                     {
*                       "id": 3,
*                       "nome": "Ruth Fletcher",
*                       "email": "nimas@baj.hu",
*                       "senha": "$2a$10$5gIQqV5jjBpjZPTvGes7xeupm87OhxSDv.At4fQO/fwun2ErHBiLi",
*                       "telefone": "(737) 517-5393",
*                       "created_at": "2019-11-09 15:27:32",
*                       "updated_at": "2019-11-09 15:27:32"
*                     },
*                     {
*                       "id": 4,
*                       "nome": "Jayden Schmidt",
*                       "email": "ha@repcudu.ps",
*                       "senha": "$2a$10$wZT29TXjJly2/V.IQnCEJevR/VFXVD3cV1Ae5dIu8xVAAMvWBAOZe",
*                       "telefone": "(862) 799-6929",
*                       "created_at": "2019-11-09 15:27:32",
*                       "updated_at": "2019-11-09 15:27:32"
*                     },
*                     {
*                       "id": 5,
*                       "nome": "Roy Matthews",
*                       "email": "bowfolo@na.pk",
*                       "senha": "$2a$10$fcHHYjLjICN.VT/Bk20hAe.f9msQWzS2KPZdIiL1oCpp8uvS7zKFK",
*                       "telefone": "(815) 647-3334",
*                       "created_at": "2019-11-09 15:27:32",
*                       "updated_at": "2019-11-09 15:27:32"
*                     }
*                   ]
*                 }
*               }
*/

/**
* @swagger
* /api/v1/unip/biblioteca/usuario/{id}:
*   get:
*     tags:
*       - Usuario
*     summary: Usuario Get
*     parameters:
*       - name: id
*         description: ID do Usuario
*         in: query
*         required: true
*         type: int
*     responses:
*       200:
*         description: OK
*         examples:
*           application/json:
*            {
*              "code": 200,
*              "status": "success",
*              "data": {
*                "id": 1,
*                "nome": "Leonard Parker",
*                "email": "lilardin@ocas.sc",
*                "senha": "$2a$10$VV2YmCT6azS0vzFt/4VucONZhcI6lvnxOTrqttx/1YYRQq928QQB.",
*                "telefone": "(689) 952-3995",
*                "created_at": "2019-11-09 15:27:32",
*                "updated_at": "2019-11-09 15:27:32"
*              }
*            }
*/

/**
* @swagger
* /api/v1/unip/biblioteca/usuario:
*   post:
*     tags:
*       - Usuario
*     summary: Usuario Post
*     parameters:
*       - name: id
*         description: ID do Usuário
*         in: query
*         required: true
*         type: string
*       - name: nome
*         description: Nome do Usuário
*         in: query
*         required: true
*         type: string
*       - name: email
*         description: Senha do Usuário
*         in: query
*         required: true
*         type: string
*       - name: senha
*         description: E-mail do Usuário
*         in: query
*         required: true
*         type: string
*       - name: telefone
*         description: Telefone do Usuário
*         in: query
*         required: true
*         type: string
*     responses:
*       200:
*          description: Ok
*          examples:
*          application/json:
*               {
*                 "code": 200,
*                 "status": "success",
*                 "data": {
*                   "id": 1,
*                   "nome": "Jeferson Oliver",
*                   "email": "lilardin@ocas.sc",
*                   "senha": "$2a$10$VV2YmCT6azS0vzFt/4VucONZhcI6lvnxOTrqttx/1YYRQq928QQB.",
*                   "telefone": "(689) 952-3995",
*                   "created_at": "2019-11-09 15:27:32",
*                   "updated_at": "2019-11-09 15:27:32"
*                 }
*               }
*/

/**
* @swagger
* /api/v1/unip/biblioteca/usuario/{id}:
*   patch:
*     tags:
*       - Usuario
*     summary: Usuario Patch
*     parameters:
*       - name: id
*         description: ID do Usuário
*         in: query
*         required: true
*         type: string
*       - name: nome
*         description: Nome do Usuário
*         in: query
*         required: false
*         type: string
*       - name: email
*         description: Senha do Usuário
*         in: query
*         required: false
*         type: string
*       - name: senha
*         description: E-mail do Usuário
*         in: query
*         required: false
*         type: string
*       - name: telefone
*         description: Telefone do Usuário
*         in: query
*         required: false
*         type: string
*     responses:
*       200:
*          description: Ok
*          examples:
*            application/json:
*               {
*                 "code": 200,
*                 "status": "success",
*                 "data": {
*                   "id": 1,
*                   "nome": "Jeferson Oliveira",
*                   "email": "lilardin@ocas.sc",
*                   "senha": "$2a$10$VV2YmCT6azS0vzFt/4VucONZhcI6lvnxOTrqttx/1YYRQq928QQB.",
*                   "telefone": "(689) 952-3995",
*                   "created_at": "2019-11-09 15:27:32",
*                   "updated_at": "2019-11-09 15:27:32"
*                 }
*               }
*/

/**
* @swagger
* /api/v1/unip/biblioteca/usuario/{id}:
*   delete:
*     tags:
*       - Usuario
*     summary: Usuario Delete
*     parameters:
*       - name: id
*         description: ID do Usuário
*         in: query
*         required: true
*         type: string
*     responses:
*       200:
*         description: Ok
*         examples:
*           application/json:
*               {
*                 "code": 200,
*                 "status": "success",
*                 "data": {
*                   "id": 1,
*                   "nome": "Jeferson Oliveira",
*                   "email": "lilardin@ocas.sc",
*                   "senha": "$2a$10$VV2YmCT6azS0vzFt/4VucONZhcI6lvnxOTrqttx/1YYRQq928QQB.",
*                   "telefone": "(689) 952-3995",
*                   "created_at": "2019-11-09 15:27:32",
*                   "updated_at": "2019-11-09 15:27:32"
*                 }
*               }
*/