/**
* @swagger
* /user:
*   get:
*     tags:
*       - Users
*     summary: Users Get
*     parameters:
*       - name: name
*         description: Name of the user
*         in: query
*         required: false
*         type: string
*       - name: username
*         description: Usuário
*         in: query
*         required: false
*         type: string
*     responses:
*       200:
*         description: Send hello message
*         example:
*           message: Hello Guess
*/

/**
* @swagger
* /user:
*   post:
*     tags:
*       - Users
*     summary: Users Post
*     parameters:
*       - name: name
*         description: Name of the user
*         in: query
*         required: false
*         type: string
*       - name: username
*         description: Usuário
*         in: query
*         required: false
*         type: string
*     responses:
*       200:
*         description: Send hello message
*         example:
*           message: Hello Guess
*/

/**
* @swagger
* /user/{user_id}:
*   put:
*     tags:
*       - Users
*     summary: Users Put
*     parameters:
*       - name: name
*         description: Name of the user
*         in: query
*         required: false
*         type: string
*       - name: username
*         description: Usuário
*         in: query
*         required: false
*         type: string
*     responses:
*       200:
*         description: Send hello message
*         example:
*           message: Hello Guess
*/

/**
* @swagger
* /user/{user_id}:
*   delete:
*     tags:
*       - Users
*     summary: Users Delete
*     parameters:
*       - name: name
*         description: Name of the user
*         in: query
*         required: false
*         type: string
*       - name: username
*         description: Usuário
*         in: query
*         required: false
*         type: string
*     responses:
*       200:
*         description: Send hello message
*         example:
*           message: Hello Guess
*/