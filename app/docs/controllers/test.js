/**
* @swagger
* /api/hello:
*   get:
*     tags:
*       - Test
*     summary: Sample API
*     parameters:
*       - name: name
*         description: Name of the user
*         in: query
*         required: false
*         type: string
*     responses:
*       200:
*         description: Send hello message
*         example:
*           message: Hello Guess
*/