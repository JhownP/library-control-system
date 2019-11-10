/**
* @swagger
* /api/v1/unip/biblioteca/emprestimos:
*   get:
*     tags:
*       - Emprestimo - Livro - Usuário
*     summary: Emprestimo Get
*     responses:
*       200:
*         description: OK
*         examples:
*           application/json:
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
*                       "user_id": 1,
*                       "data_inicio": "2111-06-16T03:00:00.000Z",
*                       "data_final": "2071-12-25T02:00:00.000Z",
*                       "data_devolucao": "2070-06-21T03:00:00.000Z",
*                       "created_at": "2019-11-09 15:27:32",
*                       "updated_at": "2019-11-09 15:27:32",
*                       "livro": [
*
*                       ],
*                       "user": {
*                         "id": 1,
*                         "nome": "Leonard Parker",
*                         "email": "lilardin@ocas.sc",
*                         "senha": "$2a$10$VV2YmCT6azS0vzFt/4VucONZhcI6lvnxOTrqttx/1YYRQq928QQB.",
*                         "telefone": "(689) 952-3995",
*                         "created_at": "2019-11-09 15:27:32",
*                         "updated_at": "2019-11-09 15:27:32"
*                       }
*                     },
*                     {
*                       "id": 2,
*                       "user_id": 3,
*                       "data_inicio": "2041-04-20T03:00:00.000Z",
*                       "data_final": "2114-06-21T03:00:00.000Z",
*                       "data_devolucao": "2112-10-25T03:00:00.000Z",
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
*                             "emprestimo_id": 2
*                           }
*                         }
*                       ],
*                       "user": {
*                         "id": 3,
*                         "nome": "Ruth Fletcher",
*                         "email": "nimas@baj.hu",
*                         "senha": "$2a$10$5gIQqV5jjBpjZPTvGes7xeupm87OhxSDv.At4fQO/fwun2ErHBiLi",
*                         "telefone": "(737) 517-5393",
*                         "created_at": "2019-11-09 15:27:32",
*                         "updated_at": "2019-11-09 15:27:32"
*                       }
*                     },
*                     {
*                       "id": 3,
*                       "user_id": 1,
*                       "data_inicio": "2052-08-16T03:00:00.000Z",
*                       "data_final": "2051-08-28T03:00:00.000Z",
*                       "data_devolucao": "2028-08-20T03:00:00.000Z",
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
*                             "emprestimo_id": 3
*                           }
*                         }
*                       ],
*                       "user": {
*                         "id": 1,
*                         "nome": "Leonard Parker",
*                         "email": "lilardin@ocas.sc",
*                         "senha": "$2a$10$VV2YmCT6azS0vzFt/4VucONZhcI6lvnxOTrqttx/1YYRQq928QQB.",
*                         "telefone": "(689) 952-3995",
*                         "created_at": "2019-11-09 15:27:32",
*                         "updated_at": "2019-11-09 15:27:32"
*                       }
*                     },
*                     {
*                       "id": 4,
*                       "user_id": 3,
*                       "data_inicio": "2098-05-03T03:00:00.000Z",
*                       "data_final": "2021-11-07T03:00:00.000Z",
*                       "data_devolucao": "2083-06-29T03:00:00.000Z",
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
*                             "emprestimo_id": 4
*                           }
*                         }
*                       ],
*                       "user": {
*                         "id": 3,
*                         "nome": "Ruth Fletcher",
*                         "email": "nimas@baj.hu",
*                         "senha": "$2a$10$5gIQqV5jjBpjZPTvGes7xeupm87OhxSDv.At4fQO/fwun2ErHBiLi",
*                         "telefone": "(737) 517-5393",
*                         "created_at": "2019-11-09 15:27:32",
*                         "updated_at": "2019-11-09 15:27:32"
*                       }
*                     },
*                     {
*                       "id": 5,
*                       "user_id": 2,
*                       "data_inicio": "2069-11-27T02:00:00.000Z",
*                       "data_final": "2045-08-12T03:00:00.000Z",
*                       "data_devolucao": "2057-02-16T02:00:00.000Z",
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
*                             "emprestimo_id": 5
*                           }
*                         }
*                       ],
*                       "user": {
*                         "id": 2,
*                         "nome": "Marie Hayes",
*                         "email": "pub@did.sm",
*                         "senha": "$2a$10$c70CgkR41JYJt.T6J5M5su73bmTSNKQv19w1fpIi55Vxha4wtpY6y",
*                         "telefone": "(278) 408-3449",
*                         "created_at": "2019-11-09 15:27:32",
*                         "updated_at": "2019-11-09 15:27:32"
*                       }
*                     },
*                     {
*                       "id": 6,
*                       "user_id": 3,
*                       "data_inicio": "2043-07-11T03:00:00.000Z",
*                       "data_final": "2081-03-16T03:00:00.000Z",
*                       "data_devolucao": "2075-02-28T03:00:00.000Z",
*                       "created_at": "2019-11-09 15:27:32",
*                       "updated_at": "2019-11-09 15:27:32",
*                       "livro": [
*                         {
*                           "id": 6,
*                           "titulo": "ebumactuw",
*                           "quantidade": 459,
*                           "foto": "1a6211a11c648877a85028cbc.jpg",
*                           "created_at": "2019-11-09 15:27:32",
*                           "updated_at": "2019-11-09 15:27:32",
*                           "pivot": {
*                             "livro_id": 6,
*                             "emprestimo_id": 6
*                           }
*                         }
*                       ],
*                       "user": {
*                         "id": 3,
*                         "nome": "Ruth Fletcher",
*                         "email": "nimas@baj.hu",
*                         "senha": "$2a$10$5gIQqV5jjBpjZPTvGes7xeupm87OhxSDv.At4fQO/fwun2ErHBiLi",
*                         "telefone": "(737) 517-5393",
*                         "created_at": "2019-11-09 15:27:32",
*                         "updated_at": "2019-11-09 15:27:32"
*                       }
*                     },
*                     {
*                       "id": 7,
*                       "user_id": 1,
*                       "data_inicio": "2044-05-31T03:00:00.000Z",
*                       "data_final": "2037-08-24T03:00:00.000Z",
*                       "data_devolucao": "2066-12-01T02:00:00.000Z",
*                       "created_at": "2019-11-09 15:27:32",
*                       "updated_at": "2019-11-09 15:27:32",
*                       "livro": [
*                         {
*                           "id": 7,
*                           "titulo": "nokle",
*                           "quantidade": 1796,
*                           "foto": "e389c3efb810a1d9695e20255.jpg",
*                           "created_at": "2019-11-09 15:27:32",
*                           "updated_at": "2019-11-09 15:27:32",
*                           "pivot": {
*                             "livro_id": 7,
*                             "emprestimo_id": 7
*                           }
*                         }
*                       ],
*                       "user": {
*                         "id": 1,
*                         "nome": "Leonard Parker",
*                         "email": "lilardin@ocas.sc",
*                         "senha": "$2a$10$VV2YmCT6azS0vzFt/4VucONZhcI6lvnxOTrqttx/1YYRQq928QQB.",
*                         "telefone": "(689) 952-3995",
*                         "created_at": "2019-11-09 15:27:32",
*                         "updated_at": "2019-11-09 15:27:32"
*                       }
*                     },
*                     {
*                       "id": 8,
*                       "user_id": 2,
*                       "data_inicio": "2118-03-01T03:00:00.000Z",
*                       "data_final": "2095-10-10T03:00:00.000Z",
*                       "data_devolucao": "2034-11-06T02:00:00.000Z",
*                       "created_at": "2019-11-09 15:27:32",
*                       "updated_at": "2019-11-09 15:27:32",
*                       "livro": [
*                         {
*                           "id": 8,
*                           "titulo": "fud",
*                           "quantidade": 1121,
*                           "foto": "59c2a8165991cd0de3fe2c1c8.jpg",
*                           "created_at": "2019-11-09 15:27:32",
*                           "updated_at": "2019-11-09 15:27:32",
*                           "pivot": {
*                             "livro_id": 8,
*                             "emprestimo_id": 8
*                           }
*                         }
*                       ],
*                       "user": {
*                         "id": 2,
*                         "nome": "Marie Hayes",
*                         "email": "pub@did.sm",
*                         "senha": "$2a$10$c70CgkR41JYJt.T6J5M5su73bmTSNKQv19w1fpIi55Vxha4wtpY6y",
*                         "telefone": "(278) 408-3449",
*                         "created_at": "2019-11-09 15:27:32",
*                         "updated_at": "2019-11-09 15:27:32"
*                       }
*                     },
*                     {
*                       "id": 9,
*                       "user_id": 3,
*                       "data_inicio": "2070-10-26T03:00:00.000Z",
*                       "data_final": "2102-01-24T02:00:00.000Z",
*                       "data_devolucao": "2038-09-25T03:00:00.000Z",
*                       "created_at": "2019-11-09 15:27:32",
*                       "updated_at": "2019-11-09 15:27:32",
*                       "livro": [
*                         {
*                           "id": 9,
*                           "titulo": "jebpedsa",
*                           "quantidade": 670,
*                           "foto": "e552eaa18f6ec01fffe32565c.jpg",
*                           "created_at": "2019-11-09 15:27:32",
*                           "updated_at": "2019-11-09 15:27:32",
*                           "pivot": {
*                             "livro_id": 9,
*                             "emprestimo_id": 9
*                           }
*                         }
*                       ],
*                       "user": {
*                         "id": 3,
*                         "nome": "Ruth Fletcher",
*                         "email": "nimas@baj.hu",
*                         "senha": "$2a$10$5gIQqV5jjBpjZPTvGes7xeupm87OhxSDv.At4fQO/fwun2ErHBiLi",
*                         "telefone": "(737) 517-5393",
*                         "created_at": "2019-11-09 15:27:32",
*                         "updated_at": "2019-11-09 15:27:32"
*                       }
*                     },
*                     {
*                       "id": 10,
*                       "user_id": 1,
*                       "data_inicio": "2020-05-05T03:00:00.000Z",
*                       "data_final": "2047-03-27T03:00:00.000Z",
*                       "data_devolucao": "2118-09-07T03:00:00.000Z",
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
*                             "emprestimo_id": 10
*                           }
*                         }
*                       ],
*                       "user": {
*                         "id": 1,
*                         "nome": "Leonard Parker",
*                         "email": "lilardin@ocas.sc",
*                         "senha": "$2a$10$VV2YmCT6azS0vzFt/4VucONZhcI6lvnxOTrqttx/1YYRQq928QQB.",
*                         "telefone": "(689) 952-3995",
*                         "created_at": "2019-11-09 15:27:32",
*                         "updated_at": "2019-11-09 15:27:32"
*                       }
*                     }
*                   ]
*                 }
*               }
*/

/**
* @swagger
* /api/v1/unip/biblioteca/emprestimo/{id}:
*   get:
*     tags:
*       - Emprestimo - Livro - Usuário
*     summary: Emprestimo Get
*     responses:
*       200:
*         description: Ok
*         example:
*          application/json:
*           {
*             "code": 200,
*             "status": "success",
*             "data": [
*               {
*                 "id": 3,
*                 "user_id": 1,
*                 "data_inicio": "2052-08-16T03:00:00.000Z",
*                 "data_final": "2051-08-28T03:00:00.000Z",
*                 "data_devolucao": "2028-08-20T03:00:00.000Z",
*                 "created_at": "2019-11-09 15:27:32",
*                 "updated_at": "2019-11-09 15:27:32",
*                 "livro": [
*                   {
*                     "id": 3,
*                     "titulo": "sacu",
*                     "quantidade": 621,
*                     "foto": "dcbb3610fce066e2b354ad114.jpg",
*                     "created_at": "2019-11-09 15:27:32",
*                     "updated_at": "2019-11-09 15:27:32",
*                     "pivot": {
*                       "livro_id": 3,
*                       "emprestimo_id": 3
*                     }
*                   }
*                 ],
*                 "user": {
*                   "id": 1,
*                   "nome": "Leonard Parker",
*                   "email": "lilardin@ocas.sc",
*                   "senha": "$2a$10$VV2YmCT6azS0vzFt/4VucONZhcI6lvnxOTrqttx/1YYRQq928QQB.",
*                   "telefone": "(689) 952-3995",
*                   "created_at": "2019-11-09 15:27:32",
*                   "updated_at": "2019-11-09 15:27:32"
*                 }
*               }
*             ]
*           }
*/